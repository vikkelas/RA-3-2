import React from 'react';
import PropTypes from 'prop-types';


const Item = ({element}) => {
    let quantity =null;
    if(element.quantity<=10){
        quantity = 'level-low';
    }
    if(element.quantity>10 && element.quantity<20){
        quantity = 'level-medium';
    }
    if(element.quantity>=20){
        quantity = 'level-high';
    }
    return (
        <div className="item">
            <div className="item-image">
                <a href={element.url}>
                    <img src={element.srcImg} alt={'item_img'}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{element.title.length<50?element.title:element.title.slice(0,50)+'...'}</p>
                <p className="item-price">{
                    (element.code==='USD' && '$'+ element.price) ||
                    (element.code==='EUR' && '€' + element.price)||
                    element.price+element.code
                }</p>
                <p className={'item-quantity '+ quantity}>{element.quantity+' left'}</p>
            </div>
        </div>

    );
};

Item.propTypes = {
    element: PropTypes.object.isRequired
};

export default Item;