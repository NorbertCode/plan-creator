'use client'
import { useState } from "react";

import Column from "./column.js";
import DateSwitch from "./dateSwitch.js";
import { formatDate } from "./utils.js";
import TimeColumn from "./timeColumn.js";

const date = new Date(Date.now()); // Holds the date as a modifiable object
let weekday = date.getDay();

export default function Page() {
    const dateIncrement = 1;
    const height = 600;
    const timeStart = 800;
    const timeEnd = 2000;
    const plan = [
        {
            day: 1,
            classes: [
                {
                    name: "A",
                    timeStart: 1130,
                    timeEnd: 1315,
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
                    timeStart: 1500,
                    timeEnd: 1600,
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
        <main>
            <div className="content">
                <TimeColumn timeStart={timeStart} timeEnd={timeEnd} height={height}/>
                <Column day={weekday} date={dateStr} plan={plan} timeStart={timeStart} timeEnd={timeEnd} height={height}/>
            </div>
            <div className="controls">
                <DateSwitch onClick={decrementDate} text="<"/>
                <DateSwitch onClick={incrementDate} text=">"/>
            </div>
        </main>
    );
}