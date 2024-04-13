import "./Schedule.css";
import List from "./List";

class ScheduleData {
    public date: Date;
    public hotBookings: boolean[];
    public coldBookings: boolean[];

    constructor(date: Date, hotBookings: boolean[] = [true, true, true], coldBookings: boolean[] = [true, true, true]) {
        this.date = date;
        this.hotBookings = hotBookings;
        this.coldBookings = coldBookings;
    }

    public save(): void {
        localStorage.setItem(this.date.toLocaleDateString(), JSON.stringify(this));
    }

    public static load(date: Date): ScheduleData {
        return JSON.parse(localStorage.getItem(date.toLocaleDateString()) as string);
    }
}

interface Props {
    date: Date;
}

function Schedule(props: Props) {
    let scheduleData: ScheduleData;

    if (localStorage.getItem(props.date.toLocaleDateString()) === null) {
        scheduleData = new ScheduleData(props.date);
        scheduleData.save();
        console.log("hej1");
    } else {
        console.log("hej2");
        scheduleData = ScheduleData.load(props.date);
    }
    return (
        <div className="inner-container">
            <h3>{props.date.toLocaleDateString()}</h3>
            <div id="left-inner-container">
                <List title={"Varma spa-paketet"} bookings={scheduleData.hotBookings} />
            </div>
            <div id="right-inner-container">
                <List title={"Kalla spa-paketet"} bookings={scheduleData.coldBookings} />
            </div>
        </div>
    );
}

export default Schedule;
