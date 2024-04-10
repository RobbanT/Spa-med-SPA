interface Props {
    title: string;
    states: boolean[];
}

function List(props: Props) {
    console.log(props.states);
    return (
        <div>
            <h3>{props.title}</h3>
            {props.states[0] ? <button>FM</button> : null}
            {props.states[1] ? <button>EM</button> : null}
            {props.states[2] ? <button>Kväll</button> : null}
        </div>
    );
}

export default List;
