import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {

    }

    render() {
        return (
            <Slide left>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time"> 23
                            </div>
                            <div className="countdown_tag"> days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time"> 2
                            </div>
                            <div className="countdown_tag"> hrs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time"> 20
                            </div>
                            <div className="countdown_tag"> minutes
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time"> 40
                            </div>
                            <div className="countdown_tag"> Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

        );
    }
}

export default Countdown;