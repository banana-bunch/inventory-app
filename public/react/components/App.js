import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { FormAdd } from './FormAdd';
import { Item } from './Item';
import { SingleView } from './SingleView';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	// if updateItem is true within the singleView component, Update component will render
	const [updateItem, setUpdateItem] = useState(false);

	// single item
	const [item, setItem] = useState(null);

	// to add item
	const [addItem, setAddItem] = useState(false);

	//Fetch one item 
	const fetchItem = async (item) =>{
		try {
			const response = await fetch(`${apiURL}/items/${item.id}`);
			const data = await response.json();
			setItem(data);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
  	}

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<>
			{
			<main>	
				{item ? (
					<div>
					<SingleView item={item} setItem={setItem} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
					</div>
					// Kadie's add item form code
				) :  addItem ? (
					< FormAdd addItem={addItem} setAddItem={setAddItem} items={items} setItems={setItems}/>
				) :
					<section>
						<h1>Item Store</h1>
						<h2>All things 🔥</h2>
						<button onClick={()=>setAddItem(true)} >Add Item</button>
						<br></br>
						<ItemList items={items} fetchItem={fetchItem}/>
						
					</section>
				}
			</main>
			}
		</>
	)
}