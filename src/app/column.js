import ClassBlock from "./classBlock.js";

export default function Column({ day, classes, timeStart, timeEnd, height }) {;
    function mapToClassBlock(classData) {;
        return (<ClassBlock name={classData.name} timeStart={classData.timeStart} timeEnd={classData.timeEnd} columnTimeStart={timeStart} columnTimeEnd={timeEnd} columnHeight={height}/>);
    }

    return (
        <div className="column" style={{height: height}}>
            <div className="columnHeader">
                <p>{day}</p>
            </div>
            <div className="columnContent">
                {classes.map(mapToClassBlock)}
            </div>
        </div>
    );
}