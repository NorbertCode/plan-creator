import ClassBlock from "./classBlock.js";
import ColumnHeader from "./columnHeader.js";
import { isDateBetween, timeToFloat } from "./utils.js";

export default function Column({ day, date, plan, timeStart, timeEnd, height }) {
    function mapToClassBlock(classData, index) {
        return (
            <ClassBlock key={index} data={classData} columnTimeStart={timeStart} columnTimeEnd={timeEnd} columnHeight={height}/>
        );
    }

    const hourGap = height / timeToFloat(timeEnd - timeStart);
    const background = "repeating-linear-gradient(0deg, #231F20, #231F20 " + hourGap + "px, #292626 " + hourGap + "px, #292626 " + hourGap * 2 + "px)"

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