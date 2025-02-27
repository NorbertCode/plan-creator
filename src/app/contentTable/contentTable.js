import { useState, useRef } from "react";
import ClassColumn from "./classColumn";
import TimeColumn from "./timeColumn";
import ModalPopup from "../modal/modalPopup";
import { formatDate, getFutureDate, getPreviousMonday } from "../utility/dateUtils";

import plan from "../config/planData.json";

export default function ContentTable({ date, mode }) {
    // Configure these as you like
    const height = 600; // Height of the table in pixels (without headers)
    const timeStart = 700; // format HHMM
    const timeEnd = 2100; 

    // Create as many columns as needed depending on mode
    const dayColumns = [];
    const totalDays = mode == "single" ? 1 : 5;
    const startDate = mode == "single" ? date : new Date(getPreviousMonday(date));
    for (let i = 0; i < totalDays; i++) {
        dayColumns.push((
            <ClassColumn key={i + formatDate(date)} weekday={startDate.getDay() + i} date={formatDate(getFutureDate(startDate, i))} plan={plan} timeStart={timeStart} timeEnd={timeEnd} height={height} onBlockClick={showModal}/>
        ));
    }

    const [modalData, setModalData] = useState({})
    const modalPopup = useRef(null);
    function showModal(data) {
        setModalData(data);
        modalPopup.current.showModal();
    }

    return (
        <div className="content">
            <TimeColumn timeStart={timeStart} timeEnd={timeEnd} height={height}/>
            {dayColumns}
            <ModalPopup ref={modalPopup} data={modalData}/>
        </div>
    );
}