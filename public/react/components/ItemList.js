import React from 'react';
import { Item } from './Item';

<<<<<<< HEAD
export const ItemList = ({items, fetchItemData}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} fetchItemData={fetchItemData} />
=======
export const ItemList = ({items, fetchItem}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} fetchItem={fetchItem} key={idx} />
>>>>>>> cceac32511d2f7172e6ec9f12078818c7b16f833
			})
		}
	</>
} 