import "./Schedule.css";
import List from "./List";

class ScheduleData {
    public date: string;
    public hotBookings: boolean[];
    public coldBookings: boolean[];

    constructor(date: string, hotBookings: boolean[] = [true, true, true], coldBookings: boolean[] = [true, true, true]) {
        this.date = date;
        this.hotBookings = hotBookings;
        this.coldBookings = coldBookings;
    }

    public save(): void {
        localStorage.setItem(this.date, JSON.stringify(this));
    }

    public static load(date: string): ScheduleData {
        return JSON.parse(localStorage.getItem(date) as string);
    }
}

interface Props {
    date: Date;
}

function Schedule(props: Props) {
    let scheduleData: ScheduleData = new ScheduleData(props.date.toLocaleDateString(), [true, true, true], [true, true, true]);

    fetch("http://localhost:8080/reservation/" + props.date.toLocaleDateString())
        .then((res) => res.json())
        .then((data) => {
            scheduleData = new ScheduleData(data.date, data.hotBookings, data.coldBookings);
        });

    return (
        <div className="inner-container">
            <h3>{props.date.toLocaleDateString()}</h3>
            <div id="left-inner-container">
                <List title={"Varma spa-paketet"} scheduleData={scheduleData} bookingType={"hot"} />
            </div>
            <div id="right-inner-container">
                <List title={"Kalla spa-paketet"} scheduleData={scheduleData} bookingType={"cold"} />
            </div>
        </div>
    );
}

export default Schedule;
export { ScheduleData };
