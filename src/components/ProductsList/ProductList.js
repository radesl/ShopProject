import React from 'react'
import './style.scss'

const ProductList = props => {
    const { showProductList } = props
    return (
        <div className='ProductList'>
            {showProductList}
        </div>
    )
}
export default ProductList