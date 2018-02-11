import React from 'react'
import './style.scss'

const LoadMoreButton = (props) => {
    const {loadMore}=props
    return <button onClick={loadMore} className='LoadMoreButton'>Load More</button>
}
export default LoadMoreButton