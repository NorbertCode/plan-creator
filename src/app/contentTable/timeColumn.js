import ColumnHeader from "./columnHeader";
import TimeBlock from "./timeBlock";

export default function TimeColumn({ timeStart, timeEnd, height }) {
    // Create as many TimeBlocks as necessary
    const hourAmount = (timeEnd - timeStart) / 100;
    const blockHeight = height / hourAmount;
    const timeBlocks = [];
    for (let hour = timeStart; hour < timeEnd; hour += 100) {
        const nextHour = hour + 100;
        timeBlocks.push((
            <TimeBlock key={hour} timeStart={hour} timeEnd={nextHour} height={blockHeight}/>
        ));
    }

    return (
        <div className="timeColumn">
            <ColumnHeader/>
            <div className="timeColumnContent" style={{height: height}}>
                {timeBlocks}
            </div>
        </div>
    );
}