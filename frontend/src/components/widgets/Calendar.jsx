import React from 'react'
import { Component } from 'react'
var axios = require('axios')

function getEntries() {
    return new Promise((resolve, reject) => {
        axios.get(`http://104.248.237.108:1337/calendar-entries`)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
    
}



class Calendar extends Component {
    state = {
        events: [],
        filters: {
            date: new Date(),
            city: 'Rochester',
            vendor: 'all'
        },
        days: [
            [

            ]
        ]
    }

    setDays() {
        let day_index = this.date.getDay()
        let date = this.date.getDate()

        let week_index = date / 7;

        let first_index = new Date(this.date)
        

        this.days[week_index][day_index] = date;
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
        console.log(this.state)
        return (
            <div style={{paddingTop: '200px', paddingBottom: '80px'}}>
                <main class="calendar-contain">
                    <div style={{height: '130px;'}}></div>

                    <section class="title-bar">
                        <span id="month-selector" class="title-bar__month">
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
                        <span id="year-selector" style={{marginLeft: '10px'}} class="title-bar__month">
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
                        <span id="city-selector" style={{marginLeft: '10px'}} class="title-bar__month">
                            Rochester
                            <div id="selector-city" class="popup-bar">
                                <ul>
                                    <li>Rochester</li>
                                    <li>Buffalo</li>
                                    <li>Syracuse</li>
                                </ul>
                            </div>
                        </span>
                        <span id="vendor-selector" style={{marginLeft: '10px'}} class="title-bar__month">
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

export default Calendar