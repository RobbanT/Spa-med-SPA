import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Schedule from "./Schedule";
import "./Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Reservation() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <h2>Bokning</h2>
            <Calendar
                onChange={onChange}
                onClickDay={(value) => console.log(value)}
                showNeighboringMonth={false}
                prev2Label={null}
                next2Label={null}
                minDate={new Date()}
                maxDate={new Date(2026, 0, 0)}
                onDrillUp={() => {
                    console.log("Hej");
                }}
                navigationAriaLabel={"Go up"}
                minDetail={"month"}
                value={value}
            />
            <Schedule date={value as Date} />
        </div>
    );
}

export default Reservation;
