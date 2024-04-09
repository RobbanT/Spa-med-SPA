import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Reservation() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <>
            <h2>Bokning</h2>
            <Calendar
                onChange={onChange}
                onClickDay={(value) => console.log(value)}
                showNeighboringMonth={false}
                prev2Label={null}
                next2Label={null}
                minDate={new Date()}
                maxDate={new Date(2026, 0, 0)}
                value={value}
            />
        </>
    );
}

export default Reservation;
