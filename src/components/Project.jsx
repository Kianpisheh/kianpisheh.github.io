import "./Project.css";
import pdfLogo from "../assets/pdf-logo.svg";

function Project(props) {
    const { title, description, paper_link } = props.data;

    return (
        <div>
            <div className="project-container">
                <div className="proj-header">
                    <div className="proj-title-container">
                        <svg width={9} height={22}>
                            <rect width={9} height={22} fill={"#FF3E3E"} />
                        </svg>
                        <p className="proj-title">{title}</p>
                    </div>
                    <p className="proj-header-description">{description}</p>
                    <div id="paper-link-container">
                        <img id="pdf-logo" src={pdfLogo}></img>
                        <p id="paper-link-text">Paper</p>
                    </div>
                </div>
                <div className="proj-preview">
                    <img
                        className="proj-image"
                        src={props?.image}
                        alt="SAHARA Project"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Project;
