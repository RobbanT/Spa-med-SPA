import "./Main.css";
import About from "./About";
import Home from "./Home";
import Reservation from "./Reservation";
import Staff from "./Staff";

interface Props {
    page: string;
}

function Main(props: Props) {
    return (
        <main>
            <div className="container">
                {{
                    home: <Home />,
                    reservation: <Reservation />,
                    staff: <Staff />,
                    about: <About />,
                }[props.page] || <Home />}
            </div>
        </main>
    );
}

export default Main;
