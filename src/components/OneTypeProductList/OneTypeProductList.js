import React from 'react'

const OneTypeProductList = (props) => {
    const { showFilterProductList } = props
    return (
        <div className='OneTypeProductList'>
            {showFilterProductList}
        </div>
    )
}
export default OneTypeProductList