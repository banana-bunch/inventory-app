import React, {useState} from "react";

import apiURL from '../api';

export function Update ({singleItem, setSingleItem, updateItem, setUpdateItem}) {

    const [title, setTitle] = useState(singleItem.title);
    const [price, setPrice] = useState(singleItem.price);

    const [description, setDescription] = useState(singleItem.description);
    const [category, setCategory] = useState(singleItem.category);

    const [image, setImage] = useState(singleItem.image);

    const handleUpdate = async (event) => {
        window.location.reload(false)
        try{
        event.preventDefault();
            const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
            // our NEW/UPDATED data here
                title: title,
                price: price,
                description: description,
                category: category,
                image: image
            })
        })
            const data = await response.json();

            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
            setImage("");

            setUpdateItem(false);
            setSingleItem(false);

        } catch (err) {
            console.log("update error", err)
        }
    }

    return (
        <>
            <h1>BB R Us</h1>
            <h2>Update an Item</h2>
            <form onSubmit={handleUpdate}>
                <div>
                <input placeholder="Title" type="text" aria-label="title" value={title} onChange={event => setTitle(event.target.value)}/>
                </div>
                <div>
                <input placeholder="Item Price" type="number" min="0" step="any" aria-label="item-price" value={price} onChange={event => setPrice(event.target.value)} />
                </div>
                <div>
                <input placeholder="Item Description" type="text" aria-label="item-description" value={description} onChange={event => setDescription(event.target.value)} />
                </div>
                <div>
                <input placeholder="Item Category" type="text" aria-label="item-category" value={category} onChange={event => setCategory(event.target.value)} />
                </div>
                <div>
                <input placeholder="Image" type="text" aria-label="item-image" value={image} onChange={event => setImage(event.target.value)} />
                </div>
                <br></br>
                <button type="submit" >Update Item!</button>
                <button onClick={() => setUpdateItem(false)}>Back to Item</button>
            </form>
        </>
    )
};