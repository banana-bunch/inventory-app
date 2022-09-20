import React, {useState} from "react";

import apiURL from '../api';

export function Update ({item, setItem, updateItem, setUpdateItem}) {

    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(item.price);

    const [description, setDescription] = useState(item.description);
    const [category, setCategory] = useState(item.category);

    const [image, setImage] = useState(item.image);


    const handleUpdate = async (event) => {
        // window.location.reload(false)
        try{
        event.preventDefault();
            const response = await fetch(`${apiURL}/items/${item.id}`, {
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
            setItem(false);

        } catch (err) {
            console.log("update error", err)
        }
    }

    return (
        <>
            <div>
                <h2 >Update an Item</h2>

                <form  onSubmit={handleUpdate}>
                    <div >
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} required/>
                    </div>
                    <div >
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <input type="number" min="0" step="any" className="form-control" id="inputPrice" placeholder="Price" value={price} onChange={event => setPrice(event.target.value)} required/>
                    </div>
                    <div >
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="inputDescription" placeholder="Item Description" value={description} onChange={event => setDescription(event.target.value)} required/>
                    </div>
                    <div >
                        <label htmlFor="inputCategory" className="form-label">Category</label>
                        <input type="text" className="form-control" id="inputCategory" placeholder="Category" value={category} onChange={event => setCategory(event.target.value)} required/>
                    </div>
                    <div >
                        <label htmlFor="inputImage" className="form-label">Image</label>
                        <input type="text" className="form-control" id="inputImage" placeholder="Item Image" value={image} onChange={event => setImage(event.target.value)} required/>
                    </div>
                    <div >
                        <button type="submit">Update Item!</button>
                        <button  onClick={() => setUpdateItem(false)}>Back to Item</button>
                    </div>
                </form>
            </div>
        </>
    )
};