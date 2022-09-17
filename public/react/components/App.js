import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { SingleItem } from "./SingleItem";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	// array of objects, each object is an item, initial seed data had 20 items (id 1-20)
	// console.log(items)

	// if singleItem is true, SingleItem component will render 
	const [singleItem, setSingleItem] = useState(null);

	// if addItems is true, Form component will render 
	const [addItems, setAddItems] = useState(false);

	// if updateItem is true within the SingleItem component, Update component will render
	const [updateItem, setUpdateItem] = useState(false);

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

	const fetchItemData = async (item) => {
		const res = await fetch (`${apiURL}/items/${item.id}`);
		const itemData = await res.json();
		setSingleItem(itemData);
	}

	return (
		<main>
			{
				singleItem ? (
					<SingleItem singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
				) :  addItems ? (
					< Form addItems={addItems} setAddItems={setAddItems} items={items} setItems={setItems}/>
				) : <section>
						<div className="store">
							<h1>Banana Bunch R Us</h1>
							<h2>Where the prices are totally 🍌s !</h2>
							<br></br>
							<button onClick={() => setAddItems(true)}>Add an Item</button>
						</div>
						<br></br>
						<div className="item-list">
							<ItemList items={items} fetchItemData={fetchItemData}/>
						</div>
					</section>
			}	
		</main>
	)
}