import "./Navbar.css";

function Navbar(props) {
    const { logo } = props;
    return (
        <div>
            <img id="logo-image" src={logo}></img>
        </div>
    );
}

export default Navbar;
