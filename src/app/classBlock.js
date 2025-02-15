export default function ClassBlock({ name, timeStart, timeEnd, columnTimeStart, columnTimeEnd, columnHeight}) {
    const position = (timeStart - columnTimeStart) / (columnTimeEnd - columnTimeStart) * columnHeight;
    const height = ((timeEnd - timeStart) / (columnTimeEnd - columnTimeStart)) * columnHeight;

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <p>{name}</p>
            <p>{timeStart}-{timeEnd}</p>
        </div>
    );
}