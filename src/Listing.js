import React from 'react';
import Item from "./Item";


function Listing({items}) {
    return (
        <div className='item-list'>
            {items.map(item=><Item key={item.id} element={item}/>)}
        </div>
    );
}

export default Listing;