import React from "react";

import apiURL from '../api';
import Navbar from "./NavBar";

import { Update } from "./Update";

export function SingleItem ({singleItem, setSingleItem, items, setItems, updateItem, setUpdateItem}) {

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

        return (
        <>
            {
                updateItem ? (
                    <Update singleItem={singleItem} setSingleItem={setSingleItem} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
                ) : 
                    <>
                        <Navbar setSingleItem={setSingleItem} singleItem={singleItem}/>
                        <br></br><br></br><br></br><br></br>
                        <div className="container py-5">
                            <div className="row py-4">
                                <div className="col-md-6">
                                    <img src={singleItem.image} alt={singleItem.title} style={{height: "400px", width: "400px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="text-uppercase text-black-50">
                                        {singleItem.category}
                                    </h4>
                                    <h1 className="display-5">{singleItem.title}</h1>
                                    <p className="lead "><strong className="fw-bolder">Rating</strong> {singleItem.rating}/5 <i className="fa fa-star"></i></p>
                                    <h3 className="display-6 fw-bold my-4">$ {singleItem.price}</h3>
                                    <p className="lead">{singleItem.description}</p>
                                    <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                                    <button className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</button>
                                    <div className="my-3">
                                        <button className="btn btn-dark px-4 py-2" onClick={() => setUpdateItem(true)}>Update Item</button>
                                        <button className="btn btn-dark px-4 py-2 ms-2" onClick={handleClick}>Delete Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
};