import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {
        deadline: 'Dec, 16, 2018',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor((time/1000)%60);
        }
        //console.log(time);
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline),1000)
    }

    render() {
        return (
            <Slide left delay={1000}>
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