import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() =>{
    fetch('http://127.0.0.1:6001/plants')
    .then(res => res.json())
    .then(data=>setPlants(data))
  },[])
  const onHandleSearch = (e) =>{
    setSearchTerm(e.target.value)
  }
  const filteredPlants = plants.filter(plant =>{
    if(searchTerm ==='' || plant.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return true
    }})
    
  const onHandleSubmit =(newPlant)=>{
    fetch('http://127.0.0.1:6001/plants',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data=>setPlants([...plants, data]))  
  }

  return (
    <main>
      <NewPlantForm onHandleSubmit={onHandleSubmit} />
      <Search searchTerm={searchTerm}onHandleSearch={onHandleSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
