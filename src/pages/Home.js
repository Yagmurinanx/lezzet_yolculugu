import React, { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  const recipeCollectionRef = collection(db, "yemek");

  useEffect(() => {
    const getRecipeList = async () => {
      try {
        const data = await getDocs(recipeCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipeList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getRecipeList();
  }, [recipeCollectionRef]);

  return (
    <div>
      {recipeList.map((yemek) => (
        <MainCard
          key={yemek.id}
          image={yemek.image}
          name={yemek.name}
          description={yemek.description}
          
        />
      ))}
      <p>test</p>
    </div>
  );
};

export default Home;

