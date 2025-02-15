export default function ClassBlock({ name, timeStart, timeEnd, columnTimeStart, columnTimeEnd, columnHeight}) {
    let position = (timeStart - columnTimeStart) / (columnTimeEnd - columnTimeStart) * columnHeight;
    let height = (timeEnd - timeStart) / (columnTimeEnd - columnTimeStart) * columnHeight;
    console.log(timeStart);
    console.log(timeEnd);
    console.log(columnTimeStart);
    console.log(columnTimeEnd);
    console.log(columnHeight);

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <p>{name}</p>
            <p>{timeStart}-{timeEnd}</p>
        </div>
    );
}