import Column from "./column.js";

export default function Page() {
    const classes = [
        {name: "A", timeStart: 1, timeEnd: 3},
        {name: "B", timeStart: 6, timeEnd: 9}
    ];
    return (
        <Column day="01-01-1970" classes={classes} timeStart={0} timeEnd={10} height={500}/>
    );
}