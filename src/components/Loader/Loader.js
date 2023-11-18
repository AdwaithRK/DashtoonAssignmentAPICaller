import FadeLoader from "react-spinners/FadeLoader";

const override = {
    display: "block",
    margin: "0 auto",
};


const Loader = () => {
    return (
        <FadeLoader
            loading
            cssOverride={override}
            height="3vh"
            width=".6vw"
            radius="0.3vw"
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Loader;