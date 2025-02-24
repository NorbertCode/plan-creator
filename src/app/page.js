'use client'
import { useEffect, useState } from "react";
import DateSwitch from "./controls/dateSwitch";
import ContentTable from "./contentTable/contentTable";
import { getFutureDate } from "./utility/dateUtils";

export default function Page() {
    // --- Display mode stuff ---
    // If this run on server-side (which has no window) force single mode
    // Otherwise decide depending on aspect ratio
    const [mode, setMode] = useState(typeof window === "undefined" || window.innerHeight > window.innerWidth ? "single" : "week");
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

    // --- Date stuff ---
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