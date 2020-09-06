import React, { Component } from 'react';
import NavBar from '../widgets/NavBar';
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

class Index extends Component {
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
            <div style={{paddingTop: '200px', paddingBottom: '80px'}}>
                <main class="calendar-contain">
                    <div style={{height: '130px;'}}></div>

                    <section class="title-bar">
                        <span id="month-selector" class="title-bar__month" onclick="toggleSelector('selector-month')">
                            September
                            <div id="selector-month" class="popup-bar">
                                <ul>
                                    <li>January</li>
                                    <li>February</li>
                                    <li>March</li>
                                    <li>April</li>
                                    <li>May</li>
                                </ul>
                            </div>
                        </span>
                        <span id="year-selector" style={{marginLeft: '10px'}} class="title-bar__month" onclick="toggleSelector('selector-year')">
                            2020
                            <div id="selector-year" class="popup-bar">
                                <ul>
                                    <li>2020</li>
                                    <li>2021</li>
                                    <li>2022</li>
                                    <li>2023</li>
                                    <li>2024</li>
                                </ul>
                            </div>
                        </span>
                        <span id="city-selector" style={{marginLeft: '10px'}} class="title-bar__month" onclick="toggleSelector('selector-city')">
                            Rochester
                            <div id="selector-city" class="popup-bar">
                                <ul>
                                    <li>Rochester</li>
                                    <li>Buffalo</li>
                                    <li>Syracuse</li>
                                </ul>
                            </div>
                        </span>
                        <span id="vendor-selector" style={{marginLeft: '10px'}} class="title-bar__month" onclick="toggleSelector('selector-vendor')">
                            All
                            <div id="selector-vendor" class="popup-bar">
                                <ul>
                                    <li>Venue <i class="fa fa-circle green"></i></li>
                                    <li>DJ <i class="fa fa-circle yellow"></i></li>
                                    <li>Florist <i class="fa fa-circle purple"></i></li>
                                    <li>Caterer <i class="fa fa-circle orange"></i></li>
                                </ul>
                            </div>
                        </span>
                    </section>

                    <aside class="calendar__sidebar">
                        <h2 class="sidebar__heading">Tuesday<br/>September 2</h2>
                        <ul class="day-events">
                            <li><i class="fa fa-circle green"></i> Wintergarden</li>
                            <li><i class="fa fa-circle green"></i> Woodcliffe</li>
                            <li><i class="fa fa-circle yellow"></i> Marquee DJ</li>
                        </ul>
                    </aside>


                    <section class="calendar__days">
                        <section class="calendar__top-bar">
                        <span class="top-bar__days">Mon</span>
                        <span class="top-bar__days">Tue</span>
                        <span class="top-bar__days">Wed</span>
                        <span class="top-bar__days">Thu</span>
                        <span class="top-bar__days">Fri</span>
                        <span class="top-bar__days">Sat</span>
                        <span class="top-bar__days">Sun</span>
                        </section>

                        <section class="calendar__week">
                        <div class="calendar__day inactive">
                            <span class="calendar__date">30</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">31</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">1</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">2</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">3</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">4</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">5</span>
                        </div>
                        </section>

                        <section class="calendar__week">
                        <div class="calendar__day">
                            <span class="calendar__date">6</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">7</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">8</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">9</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">10</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">11</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">12</span>
                        </div>
                        </section>

                        <section class="calendar__week">
                        <div class="calendar__day">
                            <span class="calendar__date">13</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">14</span>
                        </div>
                        <div class="calendar__day today">
                            <span class="calendar__date">15</span>
                            <div class="available-vendors">
                                <i class="fa fa-circle green"></i>
                                <i class="fa fa-circle yellow"></i>
                            </div>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">16</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">17</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">18</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">19</span>
                        </div>
                        </section>

                        <section class="calendar__week">
                        <div class="calendar__day">
                            <span class="calendar__date">20</span>
                            <br/>
                            <div class="available-vendors">
                                <i class="fa fa-circle green"></i>
                                <i class="fa fa-circle yellow"></i>
                                <i class="fa fa-circle purple"></i>
                                <i class="fa fa-circle orange"></i>
                            </div>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">21</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">22</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">23</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">24</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">25</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">26</span>
                        </div>
                        </section>

                        <section class="calendar__week">
                        <div class="calendar__day">
                            <span class="calendar__date">27</span>
                        </div>
                        <div class="calendar__day">
                            <span class="calendar__date">28</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">1</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">2</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">3</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">4</span>
                        </div>
                        <div class="calendar__day inactive">
                            <span class="calendar__date">5</span>
                        </div>
                        </section>
                    </section>
                </main>
            </div>
        )
    }
}

export default Index