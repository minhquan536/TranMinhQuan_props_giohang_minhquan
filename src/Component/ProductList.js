import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    hienDanhSachSP = () => {
      let {danhSachSanPham,themVaoGio} = this.props;

      return danhSachSanPham.map((sanPham) => {
            return <div class="col-3" key={`giay_`+sanPham.id}>
                <ProductItem sanPham={sanPham} themVaoGio={themVaoGio}/>
          </div>
        
      })
    }
    

  render() {
    return (
      <div>
            <div className="row">
                {this.hienDanhSachSP()}
            </div>
      </div>
    )
  }
}
