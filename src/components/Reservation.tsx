import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Schedule from "./Schedule";
import "./Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const holidays: string[] = fetchClosedDays("2024");
let closedDays: Date[] = [];

async function fetchClosedDays(year: string): string[] {
    const days: object[] = [];
    const holidays: string[] = [];

    await fetch(`http://sholiday.faboul.se/dagar/v2.1/${year}`)
        .then((res) => res.json())
        .then((data) => {
            const test = data.dagar.filter((dag) => dag.hasOwnProperty("helgdag") || dag.veckodag === "Måndag" || dag.veckodag === "Lördag" || dag.veckodag === "Söndag").map((dag) => dag.datum);
            console.log(test);
            days.push(data.dagar);
        });

    days[0].filter((dag) => {
        if (dag.hasOwnProperty("helgdag") || dag.veckodag === "Måndag" || dag.veckodag === "Lördag" || dag.veckodag === "Söndag") {
            holidays.push(dag.datum);
            closedDays.push(new Date(dag.datum));
        }
    });
    return holidays;
}

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
                navigationAriaLabel={"Go up"}
                minDetail={"month"}
                tileDisabled={({ date }) =>
                    closedDays.some((closedDay) => date.getFullYear() === closedDay.getFullYear() && date.getMonth() === closedDay.getMonth() && date.getDate() === closedDay.getDate())
                }
                value={value}
            />
            <Schedule date={value as Date} />
        </div>
    );
}

export default Reservation;
