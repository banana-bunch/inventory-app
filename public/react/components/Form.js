import React, {useState} from "react";

import apiURL from '../api';

export function Form ({addItems, setAddItems}) {


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.00);

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [image, setImage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
            //   articleData // our data TO CREATE here
            {
                title: title,
                price: content,
                description: description,
                category: category,
                image: image
            }
            )
          });
          const data = await response.json();

        //   console.log(data.title)
        //   I need lines 49-51 if not I have to manually refresh to see the new submitted page
        //   setPages([...pages,
        //         data
        //     ]);

            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
            setImage("");
        } catch (err) {
            console.log("form error", err)
        }  

        setAddItems(false)
	  }

    return (
        <>
            <h1>BB R Us</h1>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" >Add Item to List!</button>
                <button onClick={() => setAddItems(false)}>Back to Item List!</button>
            </form>
        </>
    ) 
};