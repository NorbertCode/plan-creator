'use client'
import { useEffect, useState } from "react";

import DateSwitch from "./controls/dateSwitch";
import ContentTable from "./contentTable/contentTable";
import { getFutureDate } from "./utility/dateUtils";

export default function Page() {
    const [mode, setMode] = useState(typeof window === "undefined" || window.innerHeight > window.innerWidth ? "single" : "multiple");
    let dateIncrement = mode == "single" ? 1 : 7;
    function refreshMode() {
        if (window.innerHeight > window.innerWidth) {
            setMode("single");
            dateIncrement = 1;
        }
        else {
            setMode("week");
            dateIncrement = 7;
        }
    }
    useEffect(() => {
        window.addEventListener("resize", refreshMode);
    });

    const [date, setDate] = useState(new Date(Date.now()));
    function moveDate(increment) {
        const newDate = getFutureDate(date, increment);
        setDate(newDate);
    }
    function incrementDate() { moveDate(dateIncrement); }
    function decrementDate() { moveDate(-dateIncrement); }

    return (
        <main>
            <ContentTable date={date} mode={mode}/>
            <div className="controls">
                <DateSwitch onClick={decrementDate} text="<"/>
                <DateSwitch onClick={incrementDate} text=">"/>
            </div>
        </main>
    );
}