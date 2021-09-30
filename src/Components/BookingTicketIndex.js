import React, { Component } from 'react';
import BookChairs from './BookChairs';
import ChairList from './ChairList';
import ticketStyle from '../styles/BookingTicketStyle.module.css';

class BookingTicketIndex extends Component {
    render() {
        return (
            <section className={`${ticketStyle.bookingTicket} container-fluid bg-dark`} style={{background: `url("../img/bgmovie.jpg") no-repeat center center`}}>
                <div className={`${ticketStyle.overlay}`}></div>
                <div className="row" style={{position:'relative'}}>
                    <div className="col-12 col-lg-9">
                        <ChairList/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <BookChairs/>
                    </div>
                </div>
            </section>
        );
    }
}

export default BookingTicketIndex;
