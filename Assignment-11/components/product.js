import React from 'react'
import './Product.css'
export let Product =(props)=>{
    return(
        <div className='page'>
            <div className='product_container'>
                <div className='product_title'>{props.productName} </div>
                <div className='product_image'>
                    <img src={props.productImage}></img>
                </div>
                <div className='product_price'>{props.productPrice}</div>
                <div className='product_created_by'>{props.product_created_by}</div>
                <div className='btn_container'>
                    <button className='buy_now'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}