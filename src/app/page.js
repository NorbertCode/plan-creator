'use client'
import { useState } from "react";

import Column from "./column.js";
import DateSwitch from "./dateSwitch.js";

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getYear() + 1900;
    return day + "/" + month + "/" + year;
}

const date = new Date(Date.now()); // Holds the date as a modifiable object
let weekday = date.getDay();
const dateIncrement = 1;

export default function Page() {
    const classes = [
        {name: "A", timeStart: 13, timeEnd: 14},
        {name: "B", timeStart: 15, timeEnd: 17}
    ];

    const [dateStr, setDate] = useState(formatDate(date));
    function moveDate(increment) {
        date.setDate(date.getDate() + increment);
        weekday = date.getDay();
        setDate(formatDate(date));
    }
    function incrementDate() { moveDate(dateIncrement); }
    function decrementDate() { moveDate(-dateIncrement); }
    
    return (
        <div>
            <DateSwitch onClick={decrementDate} text="<"/>
            <DateSwitch onClick={incrementDate} text=">"/>
            <Column day={weekday} date={dateStr} classes={classes} timeStart={8} timeEnd={20} height={600}/>
        </div>
    );
}