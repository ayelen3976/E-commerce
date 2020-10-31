require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

//Connect to DB
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Category, User, Order ,Orderline ,Review } = sequelize.models;
// Aca vendrian las relaciones
console.log(sequelize.models)


// N to N
Order.belongsToMany(Product, { through: Orderline}); //tiene muchos productos N a N con productos
Product.belongsToMany(Order, { through: Orderline }) //Puede estar en varias ordenes
// N to N
Product.belongsToMany(Category, { through: 'productcategories' });//Pertenece a muchas categorias
Category.belongsToMany(Product, { through: 'productcategories' }); //Tiene muchos productos
//1 to N
User.hasMany(Review);//Un usuario puede tener muchas reviews
Review.belongsTo(User);//Una review pertenece a un usuario en particular
//1 to N
Product.hasMany(Review); // Un producto puede tener muchas reviews
Review.belongsTo(Product); //Una review pertecene a un producto en particular

Order.belongsTo(User);
User.hasMany(Order)

Category.belongsToMany(Product, { through: 'productcategories' }); 
 
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
