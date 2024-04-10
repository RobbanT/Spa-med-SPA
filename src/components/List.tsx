interface Props {
    title: string;
}

function List(props: Props) {
    function SaveCart() {
        localStorage.setItem("cart", JSON.stringify(this.#cart));
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <button>FM</button>
            <button>EM</button>
            <button>Kväll</button>
        </div>
    );
}

export default List;
