import React,{useState} from "react";
//set state for each input of nanem, image, price.. set values to be state of each..formData..
//set state with onchange handle event
//{name,value} = e.target
//...formData, [name]:value...
//call callback function from Plantpage component that will add new plant to plants state array
//post fetch new plant.
function NewPlantForm({onHandleNewSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })
  const handleChange =(e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    onHandleNewSubmit(newPlant)
  }





  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value= {formData.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value= {formData.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value= {formData.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
