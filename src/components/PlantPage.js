import React,{useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const url = 'http://127.0.0.1:6001/plants'

function PlantPage() {
  const [plants, setPlants] = useState([])
  const[searchText, setSearchText] = useState("")

const onHandleSearchChange =(e)=>{
  setSearchText(e.target.value)
}

const plantToDisplay = plants.filter(plant =>{
  if(plant.name.toLowerCase().includes(searchText.toLowerCase())){
    return true
  }
})




  useEffect(() => {

    fetch(url)
      .then(resp=>resp.json())
      .then(plants=> setPlants(plants))
  }, [])

  const onHandleNewSubmit = (newPlant) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }



  return (
    <main>
      <NewPlantForm  onHandleNewSubmit={onHandleNewSubmit}/>
      <Search onHandleSearchChange={onHandleSearchChange} searchText={searchText}  />
      <PlantList plants={plantToDisplay} />
    </main>
  );
}

export default PlantPage;
