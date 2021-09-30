import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class ChairList extends Component {
    renderChair = () => {
        let content = [];
        let {lineChairs} = this.props;

        //Duyệt từng hàng ghế trong mảng
        lineChairs.map((lineChair, key) => {
            //Nếu key=0 xuất ra số dãy ghế
            if(lineChair.line==="") {
                content.push(
                    <div key={key} className="row">
                        <div className="col-2">{lineChair.line}</div>
                        <div className="col-10 d-flex">
                            {lineChair.chairList.map((chair, index) => {
                                return (
                                    <div key={index}>
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
                        <div className="col-2">{lineChair.line}</div>
                        <div className="col-10 d-flex">
                            {lineChair.chairList.map((chair, index) => {
                                return (
                                    <div key={index}>
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
                <h3 className="text-warning">ĐẶT VÉ XEM PHIM</h3>
                <p>Màn hình</p>
                {this.renderChair()}
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    lineChairs: state.BookingTicketReducer.lineChairs,
    selectedChairs: state.BookingTicketReducer.selectedChairs,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ChairList);
