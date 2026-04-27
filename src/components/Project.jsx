import "./Project.css";
import pdfLogo from "../assets/pdf-logo.svg";
import { useNavigate } from "react-router-dom";

function Project(props) {
    const navigate = useNavigate();

    const { title, description, paper_link, id, image } = props.data;

    return (
        <div>
            <div
                className="project-container"
                onClick={() => navigate(`/project/${id}`)}
            >
                <div className="proj-header">
                    <div className="proj-title-container">
                        <svg width={9} height={22}>
                            <rect width={9} height={22} fill={"#FF3E3E"} />
                        </svg>
                        <p className="proj-title">{title}</p>
                    </div>
                    <p className="proj-header-description">{description}</p>
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
