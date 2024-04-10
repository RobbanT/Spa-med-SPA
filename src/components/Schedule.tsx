import "./Schedule.css";
import List from "./List";

interface Props {
    date: Date;
}

function Schedule(props: Props) {
    return (
        <div className="inner-container">
            <h3>{props.date.toLocaleDateString()}</h3>
            <div id="left-inner-container">
                <List title={"Varm"} />
            </div>
            <div id="right-inner-container">
                <List title={"Kall"} />
            </div>
        </div>
    );
}

export default Schedule;
