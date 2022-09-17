import React from "react";

import apiURL from '../api';

export function SingleItem ({singleItem, setSingleItem, items, setItems}) {

    const handleClick = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
            method: "DELETE"
       });
       const data = await response.json();

       // re-fetch the new list of items - does not include deleted item
       const res = await fetch(`${apiURL}/items`);
       const itemsData = await res.json();
       setItems(itemsData);
    //    Once delete button is clicked, default component (App) will render
       setSingleItem(null)
    }

    return <>
        <div className="single-view">
            <h2>{singleItem.title}</h2>
            <img src={singleItem.image}/>
            <br></br>
            <p>Category: {singleItem.category}</p>
            <br></br>
            <h4>${singleItem.price}</h4>
            <div>
                <p>{singleItem.description}</p>
            </div>
            <br></br>
            <button onClick={() => setSingleItem(false)}>Back to List!</button>
            <br></br>
            <button onClick={handleClick}>Delete Item</button>
        </div>
    </>
};