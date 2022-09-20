import React from 'react'
import { Update } from './Update'

export const SingleView = ({item, setItem, updateItem, setUpdateItem}) => {

    // add conditional rendering - if updateItem is true, render Update Component ; update Item is true when I press a button
    return <>
{        updateItem ? (
        <Update updateItem={updateItem} setUpdateItem={setUpdateItem}/>
        ): 
        <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <img src={item.image} alt={item.title} />
            {/* delete button */}
            
            {/* update button */}
            <button onClick={() => setUpdateItem(true)}>Update Item</button>
        </div>
    }
    </>
  } 