import ClassBlock from "./classBlock.js";
import ColumnHeader from "./columnHeader.js";

function convertToDate(dateStr) {
    const dateSplit = dateStr.split(".");
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
}

function isDateBetween(currentDateStr, startDateStr, endDateStr) {
    const currentDate = convertToDate(currentDateStr);
    return convertToDate(startDateStr) <= currentDate && currentDate <= convertToDate(endDateStr);
}

export default function Column({ day, date, plan, timeStart, timeEnd, height }) {;
    function mapToClassBlock(classData, index) {;
        return (
            <ClassBlock key={index} name={classData.name} timeStart={classData.timeStart}
            timeEnd={classData.timeEnd} columnTimeStart={timeStart} columnTimeEnd={timeEnd} columnHeight={height}/>
        );
    }

    const hourGap = height / (timeEnd - timeStart);
    const background = "repeating-linear-gradient(0deg, #fff, #fff " + hourGap + "px, #ccc " + hourGap + "px, #ccc " + hourGap * 2 + "px)"

    const currentDayClasses = [];
    for (let i = 0; i < plan.length; i++) {
        if (day == plan[i].day) {
            for (let j = 0; j < plan[i].classes.length; j++) {
                const thisClass = plan[i].classes[j]
                if (isDateBetween(date, thisClass.dateStart, thisClass.dateEnd)) {
                    currentDayClasses.push(thisClass)
                }
            }
        }
    }

    return (
        <div className="column">
            <ColumnHeader day={day} date={date}/>
            <div className="columnContent" style={{height: height, background: background}}>
                {currentDayClasses.map((item, index) => mapToClassBlock(item, index))}
            </div>
        </div>
    );
}