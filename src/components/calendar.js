import React from 'react'
import moment from 'moment'
import { Calendar, Alert } from 'antd';

export default class myCalendar extends React.Component {
    state = {
        value : moment('2017-06-20'),
        selectedValue : moment('2017-06-20'),
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue:value,
        })
    }
    
    onPanelChange  = (value) => {
        this.setState({value})
    }

    render() {
        const {value,selectedValue} = this.state;   
        return (
            <div>  
                <Alert message={`You choose date : ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}></Alert>
                <Calendar 
                    value = {value}  onSelect={this.onSelect} onPanelChange={this.onPanelChange}/>
            </div>
        )
    }
}