import React from 'react'
import './style.scss'

const ProductItem = props => {
    const { product: {
        name,
        price,
        imageUrl
        } } = props
    return (
        <div className='ProductItem'>
            <img className='ProductItem__image' src='' />
            <div className='ProductItem__name'>{name}</div>
            <div className='ProductItem__price' ></div>
        </div>
    )
}
export default ProductItem