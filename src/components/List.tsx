interface Props {
    date: Date;
    title: string;
    bookings: boolean[];
}

function List(props: Props) {
    const handleClick = (e: any) => {
        e.target.setAttribute("disabled", true);
        console.log(props.date.toLocaleDateString());
    };

    return (
        <div>
            <h4>{props.title}</h4>
            {props.bookings[0] ? <button onClick={handleClick}>FM-passet</button> : null}
            {props.bookings[1] ? <button onClick={handleClick}>EM-passet</button> : null}
            {props.bookings[2] ? <button onClick={handleClick}>Kvälls-passet</button> : null}
        </div>
    );
}

export default List;
