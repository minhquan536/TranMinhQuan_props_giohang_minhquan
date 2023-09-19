import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { themVaoGio, sanPham } = this.props;
        let { name, price, image } = this.props.sanPham;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-text">${price}</h5>
                        <button data-toggle="modal" data-target="#staticBackdrop" onClick={() => {
                           themVaoGio(sanPham);
                        }
                        }>ADD CART</button>

                    </div>
                </div>
            </div>
        )
    }
}
