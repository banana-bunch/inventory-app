import React, { useState } from "react";
import { items } from "../../../server/seedData";
import apiURL from "../api";

export const FormAdd = ({setItems}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    async function handler(event) {
        event.preventDefault();
        const response = await fetch(`${apiURL}/items/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {title:title, price:price, description:description, category:category, image:image}
        )
      });
  
      const data = await response.json();
      setItems([...items, data]);
      setTitle('');
      setPrice(0);
      setDescription('');
      setCategory('');
      setImage('');
    }
  
    return (
      <>
        <h2>Add an Item</h2>
        <form>
          <p>
            <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
          </p>
          <p>
            <input type="number" min="0" step="any" value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)}/>
          </p>
          <p>
            <input type="text" value={description} placeholder="Item Description" onChange={(event) => setDescription(event.target.value)}/>
          </p>
          <p>
            <input type="text" value={category} placeholder="Item Category" onChange={(event) => setCategory(event.target.value)}/>
          </p>
          <p>
            <input type="text" value={image} placeholder="Item Image url" onChange={(event) => setImage(event.target.value)}/>
          </p>
          <p>
            <button onClick={handler}>Add Item</button>
          </p>
        </form>
      </>
    );
  };