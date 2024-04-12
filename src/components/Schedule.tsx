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
                <List date={props.date} title={"Varma spa-paketet"} bookings={[true, true, true]} />
            </div>
            <div id="right-inner-container">
                <List title={"Kalla spa-paketet"} bookings={[true, true, true]} />
            </div>
        </div>
    );
}

export default Schedule;
