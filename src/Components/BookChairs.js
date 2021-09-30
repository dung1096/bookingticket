import React, { Component } from 'react';

class BookChairs extends Component {
    render() {
        return (
            <section className="text-light">
                <h4 className="text-center">DANH SÁCH GHẾ BẠN CHỌN</h4>
                <div className="d-flex align-items-center">
                <div></div>
                <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex align-items-center">
                <div></div>
                <p>Ghế đang chọn</p>
                </div>
                <div className="d-flex align-items-center">
                <div></div>
                <p>Ghế chưa đặt</p>
                </div>

                <table className="table text-light">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Tổng tiền: </td>
                            <td className="text-success"></td>
                            <td>
                                <button type="button">
                                    Đặt
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </section>
        );
    }
}

export default BookChairs;
