import React from 'react'

const OneTypeProductList = (props) => {
    const { showFilterProductList } = props
    console.log(props)
    return (
        <div className='ProductList'>
            {showFilterProductList}
        </div>
    )
}
export default OneTypeProductList