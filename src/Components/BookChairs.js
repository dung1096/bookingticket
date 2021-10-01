import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookAction, cancelAction } from '../redux/actions/BookingTicketAction';
import ticketStyle from '../styles/BookingTicketStyle.module.css';

class BookChairs extends Component {
    renderMenu = () => {
        let { selectingChairs } = this.props;

        return selectingChairs.map((chair, index) => {
            return (
                <tr key={index} className="text-warning ">
                <td>{chair.number}</td>
                <td>{chair.price}</td>
                <td>
                    <button
                    onClick={() => {
                        this.props.cancelChair(chair);
                    }}
                    className="btn text-danger"
                    >
                    X
                    </button>
                </td>
                </tr>
            );
        });
    };

    render() {
        let {total} = this.props;
        return (
            <section className="text-light">
                <h4 className="text-center text-info">DANH SÁCH GHẾ BẠN CHỌN</h4>
                <div className="d-flex align-items-center">
                    <div className={`m-2 ${ticketStyle.chair} ${ticketStyle.selectedChair}`}></div>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex align-items-center">
                    <div className={`m-2 ${ticketStyle.chair} ${ticketStyle.selectingChair}`}></div>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="d-flex align-items-center">
                    <div className={`m-2 ${ticketStyle.chair}`}></div>
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
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Tổng tiền: </td>
                            <td className="text-success">{total}</td>
                            <td>
                                <button type="button" className="btn btn-info" onClick={()=>{
                                    this.props.bookChair();
                                }}>
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

const mapStateToProps = (state) => ({
    total: state.BookingTicketReducer.total,
    selectingChairs: state.BookingTicketReducer.selectingChairs,
})

const mapDispatchToProps = (dispatch) => ({
    cancelChair: (chair) => {
        dispatch(cancelAction(chair));
    },
    bookChair: () => {
        dispatch(bookAction());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BookChairs);
