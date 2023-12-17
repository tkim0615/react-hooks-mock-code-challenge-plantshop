import React,{useState} from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
    setInStock(prevInStock=>!prevInStock)
  }

  const inStockButton = inStock ? (
    <button onClick={handleClick} className="primary">In Stock</button>
  ) : (
    <button onClick={handleClick}>Out of Stock</button>
  )





  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStockButton}
    </li>
  );
}

export default PlantCard;
