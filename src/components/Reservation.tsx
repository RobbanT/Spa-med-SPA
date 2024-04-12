import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Schedule from "./Schedule";
import "./Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
let closedDays: Date[];
fetch("http://sholiday.faboul.se/dagar/v2.1/2024")
    .then((res) => res.json())
    .then((data) => {
        closedDays = data.dagar.filter((day: any) => day.hasOwnProperty("helgdag") || day.veckodag === "Måndag").map((day: any) => new Date(day.datum));
    });

function Reservation() {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div>
            <h2>Bokning</h2>
            <Calendar
                onChange={onChange}
                showNeighboringMonth={false}
                prev2Label={null}
                next2Label={null}
                minDate={new Date()}
                maxDate={new Date(2025, 0, 0)}
                minDetail={"month"}
                tileDisabled={({ date }) =>
                    closedDays.some((closedDay: Date) => date.getFullYear() === closedDay.getFullYear() && date.getMonth() === closedDay.getMonth() && date.getDate() === closedDay.getDate())
                }
                value={value}
            />
            <Schedule date={value as Date} />
        </div>
    );
}

export default Reservation;
