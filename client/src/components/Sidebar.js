import React , {Component}from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

class Sidebar extends Component{
    state = {
        categoriesData: []
    }


    traerCategorias(){
        axios.get('/products/category')
            .then(res => {
                res.data.forEach(element => {
                    this.state.categoriesData.push(element.name)
                });
                // const categoriesData = res.data;
                //console.log(productsData)
                // this.setState({
                //     categoriesData
                // })
                //console.log(this.state)
            }).catch(e=>{
                console.log(e)
            })
    }


    componentDidMount() {
        this.traerCategorias()
    }



    render(){
        
    return (
            <ListGroup>
                {
                this.state.categoriesData.map(categoria => {
                    return <ListGroup.Item action >{categoria}</ListGroup.Item>
                    })}
            </ListGroup>
    )}
}
    





export default Sidebar;


