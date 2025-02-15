import Column from "./column.js";

export default function Page() {
    const classes = [
        {name: "A", timeStart: 13, timeEnd: 14},
        {name: "B", timeStart: 15, timeEnd: 17}
    ];
    return (
        <Column day="01-01-1970" classes={classes} timeStart={8} timeEnd={20} height={600}/>
    );
}