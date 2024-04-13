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
        console.log(this);
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
    let scheduleData: ScheduleData;

    if (localStorage.getItem(props.date.toLocaleDateString()) === null) {
        scheduleData = new ScheduleData(props.date.toLocaleDateString());
        scheduleData.save();
    } else {
        scheduleData = ScheduleData.load(props.date.toLocaleDateString());
    }

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
