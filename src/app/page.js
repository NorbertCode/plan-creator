'use client'
import { useState } from "react";

import DateSwitch from "./dateSwitch.js";
import ContentTable from "./contentTable.js";
import { getFutureDate } from "./utils.js";


export default function Page() {
    const dateIncrement = 1;

    const [date, setDate] = useState(new Date(Date.now()));
    function moveDate(increment) {
        const newDate = getFutureDate(date, increment);
        setDate(newDate);
    }
    function incrementDate() { moveDate(dateIncrement); }
    function decrementDate() { moveDate(-dateIncrement); }

    return (
        <main>
            <ContentTable weekday={date.getDay()} date={date}/>
            <div className="controls">
                <DateSwitch onClick={decrementDate} text="<"/>
                <DateSwitch onClick={incrementDate} text=">"/>
            </div>
        </main>
    );
}