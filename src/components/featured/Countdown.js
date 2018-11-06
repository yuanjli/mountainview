import React, { Component } from 'react';

class Countdown extends Component {

    state = {

    }

    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    event starts in 
                </div>
                <div className="countdown_bottom">
                    days 
                    hours 
                    minutes 
                    seconds Countdown
                </div>
            </div>
        );
    }
}

export default Countdown;