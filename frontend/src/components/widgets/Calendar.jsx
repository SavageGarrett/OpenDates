import React from 'react'
import { Component } from 'react'
import {MonthSelector, YearSelector, CitySelector, VendorSelector} from './CalendarSelectors'
var axios = require('axios')

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

// Circle Html (after span)
{/* <div class="available-vendors">
    <i class="fa fa-circle green"></i>
    <i class="fa fa-circle yellow"></i>
</div> */}

function DayDots(props) {

}

// Week of Calendar Component
class Week extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (this.props.days != prevProps.days) {
            this.setState({
                days: this.props.days
            })
        }
    }

    render() {
        let week = []
    
        for (let i of this.props.days) {
            if (i.date.getDate() == this.props.state.date.getDate() && i.date.getMonth() == this.props.state.date.getMonth()) {
                week.push(
                    <div class="calendar__day today" onClick={() => {this.props.setDay(i.date); this.setState({})}}>
                        <span class="calendar__date">{i.number}</span>
                    </div>
                )
            } else if (i.active) {
                week.push(
                    <div class="calendar__day" onClick={() => {this.props.setDay(i.date); this.setState({})}}>
                        <span class="calendar__date">{i.number}</span>
                    </div>
                )
            } else {
                week.push(
                    <div class="calendar__day inactive" onClick={() => {this.props.setDay(i.date); this.setState({})}}>
                        <span class="calendar__date">{i.number}</span>
                    </div>
                )
            }
        }

        return week
    }
}

// All Weeks on Calendar Component
class Weeks extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // Declare Weeks Array
        let weeks = []

        // Loop through Week and add to display
        for (let i of this.props.days) {
            weeks.push(
                <section class="calendar__week">
                    <Week state={this.props.state} setDay={this.props.setDay} days={i} date={this.props.date} />
                </section>
            )
        }

        // Return Weeks
        return weeks
    }
}

// Calendar Component
class Calendar extends Component {
    constructor(props) {
        super(props)
        this.changeDate = this.changeDate.bind(this)
        this.changeDateMonth = this.changeDateMonth.bind(this)
        this.changeDateYear = this.changeDateYear.bind(this)
    }

    // State Data
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

    setDays1() {
        let new_days = []

        let firstDayCalendar = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 0)
        let month1 = firstDayCalendar.getMonth();
        firstDayCalendar.setDate(firstDayCalendar.getDate() - firstDayCalendar.getDay())
    
        // Create calendar day for last day to add
        let lastDayCalendar = new Date()
        lastDayCalendar.setDate(firstDayCalendar.getDate() + 34)

        // Add another week if still not out of original month
        if(!lastDayCalendar.getMonth() > month1) {
            lastDayCalendar.setDate(lastDayCalendar.getDate() + 7)
        }

        let counter = 0;
        while(firstDayCalendar < lastDayCalendar) {
            if (counter % 7 == 0) {
            }
            
            firstDayCalendar.setDate(firstDayCalendar.getDate() + 1)
            counter++;
        }
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
    
    changeDate(date) {
        this.setState({'date': date})
        this.setDays()
    }

    changeDateMonth(month) {
        var date = this.state.date;
        date.setMonth(month)
        this.setState({'date': date})
        this.setDays()
    }

    changeDateYear(year) {
        var date = this.state.date;
        date.setFullYear(year)
        this.setState({'date': date})
        this.setDays()
    }
    
    getEntries() {
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

    componentDidMount() {
        Promise.all([this.getEntries()])
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
        console.log(this.state.events)
        return (
            <div style={{paddingTop: '200px', paddingBottom: '80px'}}>
                <main class="calendar-contain">

                        <section class="title-bar">
                            <MonthSelector setMonth={this.changeDateMonth} date={this.state.date}></MonthSelector>

                            <YearSelector setYear={this.changeDateYear} date={this.state.date}></YearSelector>

                            <CitySelector></CitySelector>

                            <VendorSelector></VendorSelector>
                        </section>

                        {/* Selected Date */}
                        <aside class="calendar__sidebar">
                            <h2 class="sidebar__heading">{weekdays[this.state.date.getDay()]}<br/>{months[this.state.date.getMonth()]} {this.state.date.getDate()}</h2>
                            <ul class="day-events">
                                <li><i class="fa fa-circle green"></i> Wintergarden</li>
                                <li><i class="fa fa-circle green"></i> Woodcliffe</li>
                                <li><i class="fa fa-circle yellow"></i> Marquee DJ</li>
                            </ul>
                        </aside>


                        <section class="calendar__days">
                            <section class="calendar__top-bar">
                            <span class="top-bar__days">Sun</span>
                            <span class="top-bar__days">Mon</span>
                            <span class="top-bar__days">Tue</span>
                            <span class="top-bar__days">Wed</span>
                            <span class="top-bar__days">Thu</span>
                            <span class="top-bar__days">Fri</span>
                            <span class="top-bar__days">Sat</span>
                        </section>

                        <Weeks state={this.state} setDay={this.changeDate} days={this.state.days} date={this.state.date} />
                    </section>
                </main>
            </div>
        )
    }
}

export default Calendar