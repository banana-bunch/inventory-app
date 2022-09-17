import React from "react";

import apiURL from '../api';

export function SingleItem ({singleItem, setSingleItem}) {


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
            <button>Add to Cart</button>
        </div>
    </>
};