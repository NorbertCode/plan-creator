export default function DateSwitch({ onClick, text }) {
    return (
        <button className="dateSwitch" onClick={onClick}>{text}</button>
    );
}