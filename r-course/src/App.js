import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { apiUrl,filterData } from './data';
import {toast} from "react-toastify";


function App() {
  const [courses,setCoures]=useState(null);
  const [loading,setLoading]=useState(true);
  async function fetchData(){
    setLoading(true); 
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCoures(output);
    }
    catch(error){
      toast.error("Network main koi dikkat hain");
    }
    setLoading(false);
  }

  useEffect(()=>{
   fetchData(); 
  },[]);
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}/>
      </div>
      <div>  
        {loading ? (<Spinner/>) : (<Cards courses={courses}/>) }
      </div>
    </div>
  );
}

export default App;
