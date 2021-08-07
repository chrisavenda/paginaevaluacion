import React from 'react'

const Card = () => {
    return (
        <div className="card p-2 m-2" >
            <img src="https://i.ibb.co/QnmsJMk/CBC7-LJJBJJGVNHJDYI4-ZEPWTYU.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PC GAMER</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}

export default Card