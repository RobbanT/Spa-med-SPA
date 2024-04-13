import ScheduleData from "./Schedule";

interface Props {
    title: string;
    bookings: boolean[];
}

const handleClick = (e: any) => {
    e.target.setAttribute("disabled", true);
};

function List(props: Props) {
    props.bookings[0] = false;
    props.bookings[1] = false;
    props.bookings[2] = false;
    return (
        <div>
            <h4>{props.title}</h4>
            <button onClick={handleClick}>{props.bookings[0] ? "FM-passet" : "(BOKAD)"}</button>
            <button onClick={handleClick}>{props.bookings[1] ? "EM-passet" : "(BOKAD)"}</button>
            <button onClick={handleClick}>{props.bookings[2] ? "Kvälls-passet" : "(BOKAD)"}</button>
        </div>
    );
}

export default List;
