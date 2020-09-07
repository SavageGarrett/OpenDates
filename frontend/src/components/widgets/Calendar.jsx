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

// Circle Html (after span)
{/* <div class="available-vendors">
    <i class="fa fa-circle green"></i>
    <i class="fa fa-circle yellow"></i>
</div> */}

// Week of Calendar Component
function Week(props) {
    let week = []
    
    for (let i of props.days) {
        console.log(i.date, props.date)
        if (i.date.getDate() == props.date.getDate() && i.date.getMonth() == props.date.getMonth()) {
            week.push(
                <div class="calendar__day today">
                    <span class="calendar__date">{i.number}</span>
                </div>
            )
        } else if (i.active) {
            week.push(
                <div class="calendar__day">
                    <span class="calendar__date">{i.number}</span>
                </div>
            )
        } else {
            week.push(
                <div class="calendar__day inactive">
                    <span class="calendar__date">{i.number}</span>
                </div>
            )
        }
    }

    return week
}

// All Weeks on Calendar Component
function Weeks(props) {
    // Declare Weeks Array
    let weeks = []

    // Loop through Week and add to display
    for (let i of props.days) {
        weeks.push(
            <section class="calendar__week">
                <Week days={i} date={props.date} />
            </section>
        )
    }

    // Return Weeks
    return weeks
}

// Calendar Component
class Calendar extends Component {

    set_state(state) {
        if (state.hasOwnProperty('date')) this.state.date = state.date
        if (state.hasOwnProperty('events')) this.state.events = state.events
        if (state.hasOwnProperty('filters')) this.state.filters = state.filters
        if (state.hasOwnProperty('days')) this.state.days = state.days
    }

    get_state() {
        return this.state
    }

    // Create a 5 x 7 array
    createDays() {
        // Create array of 5 elements
        let days = new Array(5)

        // Add 5 Arrays of 7
        for (let i = 0; i < 5; i++) {
            days[i] = new Array(7)
        }

        // Return Array
        return days
    }

    state = {
        date: new Date(),
        events: [],
        filters: {
            date: new Date(),
            city: 'Rochester',
            vendor: 'all'
        },
        days: this.createDays()
    }

    setDays() {
        // Set Start Calendar Day
        let firstDayCalendar = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 0)
        firstDayCalendar.setDate(firstDayCalendar.getDate() - firstDayCalendar.getDay())

        // Loop through all days in calendar
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 7; j++) {
                // If Past Month
                if (firstDayCalendar.getDate() > 7 && i < 1) {
                    this.state.days[i][j] = { active: false, number: firstDayCalendar.getDate(), date: new Date(firstDayCalendar) }
                } else if (firstDayCalendar.getDate() < 7 && i > 3) {
                    this.state.days[i][j] = { active: false, number: firstDayCalendar.getDate(), date: new Date(firstDayCalendar) }
                } else {
                    this.state.days[i][j] = { active: true, number: firstDayCalendar.getDate(), date: new Date(firstDayCalendar) }
                }

                // Increment Day
                firstDayCalendar.setDate(firstDayCalendar.getDate() + 1)
            }
        }
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
        this.setDays()
        console.log(this.state)
        return (
            <div style={{paddingTop: '200px', paddingBottom: '80px'}}>
                <main class="calendar-contain">

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

                        <Weeks days={this.state.days} date={this.state.date} />
                    </section>
                </main>
            </div>
        )
    }
}

export default Calendar