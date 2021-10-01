import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { selectAction } from '../redux/actions/BookingTicketAction';
import ticketStyle from '../styles/BookingTicketStyle.module.css';
class ChairList extends Component {
    renderChair = () => {
        let content = [];
        let {lineChairs, selectingChairs} = this.props;

        //Duyệt từng hàng ghế trong mảng
        lineChairs.map((lineChair, key) => {
            //Nếu key=0 xuất ra số dãy ghế
            if(lineChair.line==="") {
                content.push(
                    <div key={key} className="row">
                        <div className="col-2">{lineChair.line}</div>
                        <div className="col-10 d-flex justify-content-around">
                            {lineChair.chairList.map((chair, index) => {
                                return (
                                    <div key={index} className={`${ticketStyle.firstChair}`}>
                                        {chair.number}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            } else {
                //Ngược lại, hiển thị ghế theo hàng
                content.push(
                    <div key={key} className="row">
                        <div className={`${ticketStyle.rowNumber} col-2`}>{lineChair.line}</div>
                        <div className="col-10 d-flex justify-content-around">
                            {lineChair.chairList.map((chair, index) => {
                                // Ghế đã được chọn
                                if(chair.selected) {
                                    return (
                                        <div key={index} className={`${ticketStyle.chair} ${ticketStyle.selectedChair}`} onClick={()=>{
                                            this.props.selectChair(chair);
                                        }}>
                                            {chair.number}
                                        </div>
                                    )
                                }
                                //Ghế đang được chọn
                                for (let selectingChair of selectingChairs) {
                                    if(selectingChair.number === chair.number) {
                                        return (
                                            <div key={index} className={`${ticketStyle.chair} ${ticketStyle.selectingChair}`} onClick={()=>{
                                                this.props.selectChair(chair);
                                            }}>
                                                {chair.number}
                                            </div>
                                        )
                                    }
                                }
                                // Ghế chưa được chọn
                                return (
                                    <div key={index} className={`${ticketStyle.chair}`}
                                    onClick={()=>{
                                                this.props.selectChair(chair);
                                            }}
                                    >
                                        {chair.number}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )

            }
            return content;
        })
       
        // console.log(content);
        return <Fragment>{content}</Fragment>
    }
    render() {
        return (
            <section className="text-center text-light">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                        <h3 className="text-warning">ĐẶT VÉ XEM PHIM</h3>
                        <p className={`${ticketStyle.screen}`}>Màn hình</p>
                    </div>
                </div>
                
                {this.renderChair()}
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    lineChairs: state.BookingTicketReducer.lineChairs,
    selectingChairs: state.BookingTicketReducer.selectingChairs,
})

const mapDispatchToProps = (dispatch) => ({
    selectChair: (chair) => {
        dispatch(selectAction(chair));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChairList);
