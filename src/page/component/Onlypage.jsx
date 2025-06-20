import React, { use } from 'react'
import mydata from '../../data/data'
import { useParams } from 'react-router-dom'
const Onlypage = () => {
    const { id } = useParams()
    const { title, image, description, price } = mydata.find(item => item.id == id)
    return (
        <>
            <div key={id}>
                <div>
                    <h1>{title}</h1>
                    <img src={image} alt="" />
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            </div>
        </>
    )
}

export default Onlypage
