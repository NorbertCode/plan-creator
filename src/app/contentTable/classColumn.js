import ClassBlock from "./classBlock";
import ColumnHeader from "./columnHeader";
import { isDateBetween } from "../utility/dateUtils";
import { timeToFloat } from "../utility/timeUtils";

export default function ClassColumn({ weekday, date, plan, timeStart, timeEnd, height, onBlockClick }) {
    const hourGap = height / timeToFloat(timeEnd - timeStart); // Pixels per hour
    const background = "repeating-linear-gradient(0deg, #231F20, #231F20 " + hourGap + "px, #292626 " + hourGap + "px, #292626 " + hourGap * 2 + "px)"
    // Background is generated here, because the height an hour is represented by may change

    const currentDateClasses = []; // Classes specific to today's date
    const currentWeekdayClasses = plan.find((day) => day.day == weekday); // Classes which happen on today's weekday
    if (currentWeekdayClasses != null) {
        currentWeekdayClasses.classes.forEach((dayClass) => {
            if (isDateBetween(date, dayClass.dateStart, dayClass.dateEnd)) {
                currentDateClasses.push(dayClass);
            }
        });
    }

    function mapToClassBlock(classData, index) {
        const key = index.toString() + weekday + date;
        return (
            <ClassBlock key={key} data={classData} columnTimeStart={timeStart} columnTimeEnd={timeEnd} columnHeight={height} onClick={onBlockClick}/>
        );
    }

    return (
        <div className="classColumn">
            <ColumnHeader day={weekday} date={date}/>
            <div className="columnContent" style={{height: height, background: background}}>
                {currentDateClasses.map((item, index) => mapToClassBlock(item, index))}
            </div>
        </div>
    );
}