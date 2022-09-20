import React, { useState } from "react";
import apiURL from '../api';



import { Update } from "./Update";

export function singleView ({singleItem, setSingleItem, items, setItems, updateItem, setUpdateItem}) {

        return (
        <>
            {
                updateItem ? (
                    <Update singleItem={singleItem} setSingleItem={setSingleItem} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
                ) :
                    <>
                        <div >
                            <div >
                                <div >
                                    <img src={singleItem.image} alt={singleItem.title} style={{height: "400px", width: "400px"}}/>
                                </div>
                                <div >
                                    <h4 >
                                        {singleItem.category}
                                    </h4>
                                    <h1 >{singleItem.title}</h1>
                                    <h3>$ {singleItem.price}</h3>
                                    <p >{singleItem.description}</p>
                                    <button  onClick={() => addProduct(singleItem)}>{cartBtn}</button>
                                    <button >Go to Cart</button>
                                    <div >
                                        <button onClick={() => setUpdateItem(true)}>Update Item</button>
                                        {/* <button onClick={handleClick}>Delete Item</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
};