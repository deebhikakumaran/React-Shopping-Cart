import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Card({count,setCount,data}) {
    let [toggle,setToggle] = useState(true)
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
      }
  return (
    <>
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={data.image} alt="..." height={250} width={200}/>
                <div className="card-body p-3">
                    <div className="text-center">
                        <h5 className="mb-1">{data.name}</h5>
                        <p className='text-muted mb-1'>{data.company}</p>
                        ${data.price[0]}.00 - ${data.price[1]}.00
                        <Rating onClick={handleRating} initialValue={rating} size={25}/>
                    </div>
                </div>
                <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    {
                        toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                        onClick={()=>{
                            setCount(count+1)
                            setToggle(!toggle)
                        }}>Add To Cart</button></div> :

                        <div className="text-center"><button className="btn btn-outline-dark mt-auto"
                        onClick={()=>{
                            setCount(count-1)
                            setToggle(!toggle)
                        }}>Remove From Cart</button></div>
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
