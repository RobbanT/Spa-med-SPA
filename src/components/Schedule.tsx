import "./Schedule.css";

interface Props {
    date: Date;
}

function Schedule(props: Props) {
    return (
        <div id="inner-container">
            <h3>{props.date.toLocaleDateString()}</h3>
            <div id="inner-container-left">
                <h3>Varm</h3>
                <button
                    onClick={() => {
                        console.log("hej");
                    }}
                >
                    FM
                </button>
                <button>EM</button>
                <button>Kväll</button>
            </div>
            <div id="inner-container-right">
                <h3>Kall</h3>
                <button>FM</button>
                <button>EM</button>
                <button>Kväll</button>
            </div>
        </div>
    );
}

export default Schedule;
