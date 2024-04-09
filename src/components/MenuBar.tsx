interface Props {
    setPage: (page: string) => void;
}

function MenuBar(props: Props) {
    return (
        <nav>
            <a onClick={() => props.setPage("home")}>Hem</a>
            <a onClick={() => props.setPage("reservation")}>Bokning</a>
            <a onClick={() => props.setPage("staff")}>Personal</a>
            <a onClick={() => props.setPage("about")}>Om oss</a>
        </nav>
    );
}

export default MenuBar;
