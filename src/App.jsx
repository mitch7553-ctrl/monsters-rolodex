import  { useState, useEffect } from 'react'
'react' ;
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/searchbox/searchbox.component';
import './App.css'

  const App = () => {
    console.log('rendereing app');
     const[monsters, setMonsters ]= useState([]);
     const [filteredMonsters, setFilteredMonsters] = useState([]);
     console.log(monsters)

     useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => { 
        setMonsters(data);
       setFilteredMonsters(data);
      }
    );
     }, []);


    const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFilteredMonsters);
  };


  return ( 
      <div className='app-container'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
  


export default App
