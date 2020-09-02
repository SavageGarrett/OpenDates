import React, { Component } from 'react';
let axios = require('axios')

function getEntries() {
    return new Promise((resolve, reject) => {
        axios.get(`http://104.248.237.108:1337/calendar-entries?_limit=5`)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
    
}

function Events(props) {
    let elements = []

    if (props.hasOwnProperty('events')) {
        for (let event of props.events) {
            elements.push(
                <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                    <div class="single-schedule-tumb-info d-flex align-items-center">
                        
                        <div class="single-schedule-tumb">
                            <img src={`http://104.248.237.108:1337${event.Images[0].url || ''}`} alt=""/>
                        </div>
                        
                        <div class="single-schedule-info">
                            <h6>{event.user.BusinessName}</h6>
                            <p>by <span>{`${event.user.PublicName}`}</span></p>
                        </div>
                    </div>
                    
                    <div class="schedule-time-place">
                        <p><i class="zmdi zmdi-time"></i>{event.DateTime}</p>
                        <p><i class="zmdi zmdi-map"></i>{event.location.Location}</p>
                    </div>
                    
                    <a href="#" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                </div>
            )
        }
        
    } else {
        elements = null
    }
    
    return elements
}

class Vendor extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        Promise.all([getEntries()])
            .then(values => {
                this.setState({
                    events: values[0]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            null
        )
    }
}

export default Vendor