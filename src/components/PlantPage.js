import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const url = 'http://127.0.0.1:6001/plants'
function PlantPage() {
  const[plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch(url)
      .then(res=>res.json())
      .then(data =>setPlants(data))
  },[])
 
  const handleSubmitData = newPlant =>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(res=>res.json())
    .then(data => setPlants([...plants, data]))
  }

  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredPlants = plants.filter(plant=> plant.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <main>
      <NewPlantForm handleSubmitData={handleSubmitData}/>
      <Search search={search} handleChange={handleChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
