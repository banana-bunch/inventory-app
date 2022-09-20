import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	
		// if singleItem is true, singleView component will render 
		const [singleItem, setSingleItem] = useState(null);

		// if updateItem is true within the singleView component, Update component will render
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
		<>
		<main>
			{
				singleItem ? (
					<singleView singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
				) :  addItems ? (
					< Form addItems={addItems} setAddItems={setAddItems} items={items} setItems={setItems}/>
				) :
					 <section>
						<div >
							<ItemList items={items} fetchItemData={fetchItemData}/>
						</div>
					</section>
			}	
		</main>
		</>
	)
}