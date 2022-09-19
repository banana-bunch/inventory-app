import React, { useState } from "react";
import apiURL from "../api";

export const Form = ({setItems}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(number);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    async function handler(event) {
        const response = await fetch(`${apiURL}/items/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {title, price, description, category}
        )
      });
  
      const data = await response.json();
      setItems({});
    }
  
    return (
      <>
        <h2>Add an Item</h2>
        <form>
          <p>
            <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
          </p>
          <p>
            <input type="number" value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)}/>
          </p>
          <p>
            <input type="text" value={description} placeholder="Item Description" onChange={(event) => setDescription(event.target.value)}/>
          </p>
          <p>
            <input type="text" value={category} placeholder="Item Category" onChange={(event) => setCategory(event.target.value)}/>
          </p>
          <p>
            <input type="image" value={image} placeholder="Item Image" onChange={(event) => setImage(event.target.value)}/>
          </p>
          <p>
            <button onClick={handler}>Create Page</button>
          </p>
        </form>
      </>
    );
  };