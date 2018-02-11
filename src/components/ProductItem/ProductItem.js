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
            <img className='ProductItem__image' src={`${imageUrl}`} />
            <div className='ProductItem__description'>
                <div className='ProductItem__description__name'>{name}</div>
                <div className='ProductItem__description__price' >{price}</div>
            </div>
        </div>
    )
}
export default ProductItem