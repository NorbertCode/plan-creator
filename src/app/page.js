'use client'
import { useState } from "react";

import ClassColumn from "./classColumn.js";
import DateSwitch from "./dateSwitch.js";
import { formatDate, getFutureDate } from "./utils.js";
import TimeColumn from "./timeColumn.js";

import plan from "./planData.json";

let date = new Date(Date.now()); // Holds the date as a modifiable object
let weekday = date.getDay();

export default function Page() {
    const dateIncrement = 1;
    const height = 600;
    const timeStart = 700;
    const timeEnd = 2100;

    const [dateStr, setDate] = useState(formatDate(date));
    function moveDate(increment) {
        date = getFutureDate(date, increment);
        weekday = date.getDay();
        setDate(formatDate(date));
    }
    function incrementDate() { moveDate(dateIncrement); }
    function decrementDate() { moveDate(-dateIncrement); }
    
    return (
        <main>
            <div className="content">
                <TimeColumn timeStart={timeStart} timeEnd={timeEnd} height={height}/>
                <ClassColumn day={weekday} date={dateStr} plan={plan} timeStart={timeStart} timeEnd={timeEnd} height={height}/>
            </div>
            <div className="controls">
                <DateSwitch onClick={decrementDate} text="<"/>
                <DateSwitch onClick={incrementDate} text=">"/>
            </div>
        </main>
    );
}