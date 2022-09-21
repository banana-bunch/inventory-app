import React from 'react'
import apiURL from '../api';
import { Update } from './Update'

export const SingleView = ({item, setItem, updateItem, setUpdateItem}) => {

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

    // add conditional rendering - if updateItem is true, render Update Component ; update Item is true when I press a button
    return <>
{        updateItem ? (
        <Update updateItem={updateItem} setUpdateItem={setUpdateItem} item={item}/>
        ): 
        <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <img src={item.image} alt={item.title} />
            {/* delete button */}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            {/* update button */}
            <button onClick={() => setUpdateItem(true)}>Update Item</button>
        </div>
    }
    </>
  } 
