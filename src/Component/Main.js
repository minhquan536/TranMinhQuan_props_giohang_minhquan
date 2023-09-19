import React, { Component } from 'react'
import ProductList from './ProductList'
import AddCart from './AddCart'

export default class Main extends Component {
    danhSachSanPham = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]

    state = {
        sanPham: []
    }

    themVaoGio = (product) => {
        console.log(product);

        let { id, name, price, image } = product

        let spGH = {
            id: id,
            name: name,
            price: price,
            image: image,
            soLuong: 1
        }

        console.log(spGH);

        let danhSachSanPhamMoi = [...this.state.sanPham]

        let congSPDaCo = this.state.sanPham.find((product) => {
            return product.id === spGH.id;
        })

        //   console.log(congSPDaCo)

        if (congSPDaCo) {
            //tìm thấy => tăng số lượng của sản phẩm đã có trong giỏ hàng
            // spFind.soLuong = spFind.soLuong + 1;
            congSPDaCo.soLuong += 1
        } else {
            //let phạm vi block scope 
            // let productCartUpdate = [...this.state.productCart, spGH];

            //thêm phần tử mới vào mảng
            danhSachSanPhamMoi.push(spGH);
            // console.log(danhSachSanPhamMoi);
        }

        this.setState({
            sanPham: danhSachSanPhamMoi
        })
    }

    updateSoLuong = (id, sl) => {

        let thayDoi = this.state.sanPham.find((sp) => {
            return sp.id === id;
        })

        if (thayDoi) {
            thayDoi.soLuong += sl
            if (thayDoi.soLuong < 1) {
                alert("số lượng không hợp lệ")
                thayDoi.soLuong = 1;
            }
        }

        this.setState({
            sanPham: this.state.sanPham
        });
    }

    deleteSP = (idSP) => {
        // console.log(idSP);
        let sanPhamUpdate = [...this.state.sanPham]

        let index = sanPhamUpdate.findIndex(proCart => proCart.id === idSP)
        // console.log(index)
        if (index > -1) {
            sanPhamUpdate.splice(index, 1)
        }

        this.setState({
            sanPham: sanPhamUpdate
        })
    }

    sumProCart = () => {
        let tongSL = 0;
        //duyệt mảng giỏ hàng
        let sanPhamUpdate = [...this.state.sanPham]

        for (const a of sanPhamUpdate) {
            tongSL++;
        }
        return tongSL;
    }
    allprice = () => {
        let all = 0;
        //duyệt mảng giỏ hàng
        let sanPhamUpdate = [...this.state.sanPham]

        for (const a of sanPhamUpdate) {
            all = all + a.price*a.soLuong;
        }
        return all;
    }



    render() {
        return (
            <div className='container w-80'>

                <nav className="navbar navbar-light bg-light">
                    <h1 classname="navbar-brand" href="#">
                        Bootstrap
                    </h1>

                    <button type="button" className="btn btn-primary ml-auto" data-toggle="modal" data-target="#staticBackdrop">
                        Cart({this.sumProCart()})
                    </button>

                </nav>

                <ProductList danhSachSanPham={this.danhSachSanPham} themVaoGio={this.themVaoGio} />
                <AddCart allprice={this.allprice} deleteSP={this.deleteSP} updateSoLuong={this.updateSoLuong} sanPham={this.state.sanPham} />
            </div>
        )
    }
}
