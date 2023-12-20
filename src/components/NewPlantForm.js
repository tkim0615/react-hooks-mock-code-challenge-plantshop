import React,{useState} from "react";
//create state for each input, set state with value attrbute, handleChang event to update state
//create formData state..
//create submit event and handleSubmit function. create newPlant object using state(make sure
//new plant object data matches exactly with server data format!)
//include call back function in submit handle function that takes argument as new data.
// define the call back function in PlantPage component.
//submit post request and set plants state
function NewPlantForm({onHandleSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })
  const handleChange = (event) =>{
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    onHandleSubmit(newPlant)
    setFormData({
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form  onSubmit={handleSubmit}>
        <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={formData.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={formData.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
