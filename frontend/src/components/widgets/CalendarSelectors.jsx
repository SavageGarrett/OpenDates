import React, {Component} from 'react';

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

class MonthSelector extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <span id="month-selector" class="title-bar__month">
                {months[this.props.date.getMonth()]}
                <div id="selector-month" class="popup-bar">
                    <ul>
                        <li onClick={() => this.props.setMonth(0)}>January</li>
                        <li onClick={() => this.props.setMonth(1)}>February</li>
                        <li onClick={() => this.props.setMonth(2)}>March</li>
                        <li onClick={() => this.props.setMonth(3)}>April</li>
                        <li onClick={() => this.props.setMonth(4)}>May</li>
                        <li onClick={() => this.props.setMonth(5)}>June</li>
                        <li onClick={() => this.props.setMonth(6)}>July</li>
                        <li onClick={() => this.props.setMonth(7)}>August</li>
                        <li onClick={() => this.props.setMonth(8)}>September</li>
                        <li onClick={() => this.props.setMonth(9)}>October</li>
                        <li onClick={() => this.props.setMonth(10)}>November</li>
                        <li onClick={() => this.props.setMonth(11)}>December</li>
                    </ul>
                </div>
            </span>
        )
    }
}

class YearSelector extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span id="year-selector" style={{marginLeft: '10px'}} class="title-bar__month">
                {this.props.date.getFullYear()}
                <div id="selector-year" class="popup-bar">
                    <ul>
                        <li onClick={() => this.props.setYear(2020)}>2020</li>
                        <li onClick={() => this.props.setYear(2021)}>2021</li>
                        <li onClick={() => this.props.setYear(2022)}>2022</li>
                        <li onClick={() => this.props.setYear(2023)}>2023</li>
                        <li onClick={() => this.props.setYear(2024)}>2024</li>
                    </ul>
                </div>
            </span>
        )
    }
}

class CitySelector extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
        )
    }
}

class VendorSelector extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
        )
    }
}

export {MonthSelector, YearSelector, CitySelector, VendorSelector}