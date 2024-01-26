import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const recipeCollectionRef = collection(db, "yemek")

  useEffect(() => {
    const getRecipeList = async() => {
    try {
      const data = await getDocs(recipeCollectionRef);
      const filteredData = data.docs.map((doc) =>({
        ...doc.data(),
         id: doc.id, 
     }));
      setRecipeList(filteredData);
    }catch(err){
      console.error(err);
    }
    
    };
    getRecipeList();
  }, [])
  

  return (
    <div className="App">
  {recipeList.map((yemek) => (
    <div key={yemek.id}>
      <h1 >{yemek.soup ? "🍲" : "🍽️"} {yemek.name}</h1>
      {yemek.image}
     
      
    </div>
  ))}
</div>
  );
}

export default App;
