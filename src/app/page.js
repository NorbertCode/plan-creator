'use client'
import { useState } from "react";

import Column from "./column.js";
import DateSwitch from "./dateSwitch.js";
import { formatDate } from "./utils.js";

const date = new Date(Date.now()); // Holds the date as a modifiable object
let weekday = date.getDay();
const dateIncrement = 1;

export default function Page() {
    const plan = [
        {
            day: 1,
            classes: [
                {
                    name: "A",
                    timeStart: 11,
                    timeEnd: 13,
                    dateStart: "17.2.2025",
                    dateEnd: "17.3.2025"
                }
            ]
        },
        {
            day: 2,
            classes: [
                {
                    name: "B",
                    timeStart: 15,
                    timeEnd: 16,
                    dateStart: "17.1.2025",
                    dateEnd: "17.2.2025"
                }
            ]
        }
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
            <Column day={weekday} date={dateStr} plan={plan} timeStart={8} timeEnd={20} height={600}/>
        </div>
    );
}