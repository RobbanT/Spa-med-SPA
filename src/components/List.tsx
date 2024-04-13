import { useState } from "react";
import { ScheduleData } from "./Schedule";

interface Props {
    title: string;
    scheduleData: ScheduleData;
    bookingType: string;
}

function List(props: Props) {
    const [render, rerender] = useState(false);
    const bookings: boolean[] = props.bookingType === "hot" ? props.scheduleData.hotBookings : props.scheduleData.coldBookings;

    const handleClick = (e: any) => {
        if (props.bookingType === "hot") {
            props.scheduleData.hotBookings[e.target.getAttribute("id") as number] = false;
        } else {
            props.scheduleData.coldBookings[e.target.getAttribute("id") as number] = false;
        }
        localStorage.setItem(props.scheduleData.date, JSON.stringify(props.scheduleData));
        rerender(!render);
    };

    return (
        <div>
            <h4>{props.title}</h4>
            <button id="0" onClick={handleClick} disabled={!bookings[0]}>
                {bookings[0] ? "FM-passet" : "(BOKAD)"}
            </button>
            <button id="1" onClick={handleClick} disabled={!bookings[1]}>
                {bookings[1] ? "EM-passet" : "(BOKAD)"}
            </button>
            <button id="2" onClick={handleClick} disabled={!bookings[2]}>
                {bookings[2] ? "Kvälls-passet" : "(BOKAD)"}
            </button>
        </div>
    );
}

export default List;
