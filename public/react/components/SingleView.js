import React from 'react'
import apiURL from '../api';

export const SingleView = ({item,setItem}) => {

    const deleteItem = async (id) => {
      try {
          const response = await fetch(`${apiURL}/items/${id}`, {
              method: "DELETE"
          });
          const data = await response.json();
          setItem({});
      } catch (err) {
          console.log("error")
      }
    }


    return <>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <p>{item.category}</p>
        <img src={item.image} alt={item.title} />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
    </>
  } 