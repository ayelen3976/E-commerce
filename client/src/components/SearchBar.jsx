  
import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [prod, setProd] = useState("");
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(prod);
      }}>
        <input
          type="text"
          placeholder="Producto..."
          value={prod}
          onChange={e => setProd(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
    );
  }