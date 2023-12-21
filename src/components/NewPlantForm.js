import React,{useState} from "react";
//make staet for form data, each input value to state. make onchange to set state for value
//attribute...make sure name matches with key
//submit form on form to create newdata with matching key and valus as db
function NewPlantForm({handleSubmitData}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })
  const handleChange = e =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleSubmit = e =>{
    e.preventDefault()
      const newPlantData ={
        name: formData.name,
        image: formData.image,
        price: formData.price
      }
      handleSubmitData(newPlantData)
      setFormData({
        name: "",
        image: "",
        price: 0
      })
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name}type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image}type="text" name="image" placeholder="Image URL" />
        <input  onChange={handleChange} value={formData.price}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
