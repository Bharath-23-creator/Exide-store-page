import { useState } from "react";

// Import all images from src/assets
import GT650Amaron from "../assets/GT650-Amaron-battery.png";
import GT650Exide from "../assets/GT650-Exide-battery.JPG";
import TharAmaron from "../assets/Thar-amaron-battery.JPG";
import TharExide from "../assets/Thar-battery.jpg";
import SwiftVDI from "../assets/Swift-vdi-battery.jpg";
import Activa5G from "../assets/Activa-5G-battery.jpg";
import LuminousInverter from "../assets/Luminous-inverter.jpg";
import LuminousCase from "../assets/Luminous-inverter-case.jpg";
import TataHarrier from "../assets/Tata-harrier-battery.jpg";
import InnovaCrysta from "../assets/Innova-crysta-battery.jpg";

export default function Products({ addToCart }) {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "GT650 Amaron battery", price: 3700, image: GT650Amaron },
    { id: 2, name: "GT650 Exide battery", price: 3530, image: GT650Exide },
    { id: 3, name: "Thar amaron battery", price: 7400, image: TharAmaron },
    { id: 4, name: "Thar exide battery", price: 6000, image: TharExide },
    { id: 5, name: "Swift vdi battery", price: 7800, image: SwiftVDI },
    { id: 6, name: "Activa 5G battery", price: 1200, image: Activa5G },
    { id: 7, name: "Luminous inverter", price: 4890, image: LuminousInverter },
    { id: 8, name: "Luminous inverter case", price: 5000, image: LuminousCase },
    { id: 9, name: "Tata harrier battery", price: 9030, image: TataHarrier },
    { id: 10, name: "Innova crysta battery", price: 6000, image: InnovaCrysta }
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Our Products</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
}
