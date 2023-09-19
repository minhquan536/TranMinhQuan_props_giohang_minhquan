import React, { Component } from 'react'

export default class AddCart extends Component {
    showCart = () => {
        let { sanPham, updateSoLuong, deleteSP} = this.props

        return sanPham.map((sp) => {
            let { id, name, price, soLuong, image } = sp;
            return <tr key={`cart${id}`}>
                <td>{id}</td>
                <td>
                    <img style={{ width: "50px" }} src={image} alt="" />
                </td>
                <td>
                    {name}
                </td>
                <td>
                    <button onClick={() => {
                        updateSoLuong(id, 1);
                    }}
                        className='btn btn-success'>+</button>
                    <span style={{ padding: "10px" }}>{soLuong}</span>
                    <button onClick={() => {
                        updateSoLuong(id, -1);
                    }}
                        className='btn btn-success'>-</button>
                </td>
                <td>
                    {price}
                </td>
                {/* các data có thể tính toán từ data có sẵn không cần lưu trữ vào đối tượng */}
                <td>
                    {price * soLuong}
                </td>
                <td>
                    <button onClick={() => {
                        deleteSP(id);

                    }} className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }


    render() {
        return (
            <div>

                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">CART</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mã</th>
                                            <th scope="col">Hình</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary mr-auto" data-dismiss="modal">Close</button>
                                <span className='text-success' >TỔNG TIỀN: ${this.props.allprice()}</span>
                                <button type="button" className="btn btn-primary text-warning">BUY</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
