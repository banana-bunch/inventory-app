import React from 'react'
import apiURL from '../api';
import { Update } from './Update'

export const SingleView = ({item, setItem, updateItem, setUpdateItem}) => {

    const deleteItem = async () => {
        window.location.reload(false);
      try {
          const response = await fetch(`${apiURL}/items/${item.id}`, {
              method: "DELETE"
          });
          const data = await response.json();
          setItem({});
      } catch (err) {
          console.log("error")
      }

      setItem(false)
    }

    // add conditional rendering - if updateItem is true, render Update Component ; update Item is true when I press a button
    return <>
{        updateItem ? (
        <Update updateItem={updateItem} setUpdateItem={setUpdateItem} item={item} setItem={setItem}/>
        ): 
        <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <img src={item.image} alt={item.title} />
            {/* delete button */}
            <button onClick={() => deleteItem()}>Delete</button>
            {/* update button */}
            <button onClick={() => setUpdateItem(true)}>Update Item</button>
            {/* Back to Item button */}
            <button onClick={() => setItem(false)}>Back to List</button>
        </div>
    }
    </>
  } 
