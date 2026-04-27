import "./ProjectDetail.css";
import PDF_BTN from "../assets/pdf-btn.svg";

function ProjectDetail(props) {
    const { title, summary, description, paper_link, proj_sections } =
        props.data;

    return (
        <div className="proj-detail-container">
            <div className="proj-detail-inner">
                <div className="proj-section-container" key={126352176}>
                    <div className="proj-detail-title-container">
                        <p className="proj-detail-title">{title}</p>
                    </div>
                    <div className="proj-detail-preview">
                        <img
                            className="proj-detail-image"
                            src={props?.image}
                            alt="SAHARA Project"
                        ></img>
                    </div>
                    <div id="paper-link-container">
                        <a href={paper_link}>
                            <img id="pdf-btn" src={PDF_BTN}></img>
                        </a>
                        {paper_link === "under_review" && (
                            <p className="paper-link-text">(under review)</p>
                        )}
                    </div>
                    <p className="proj-detail-summary">{summary}</p>
                </div>
                {proj_sections.map((data, idx) => (
                    <div className="proj-section-container" key={idx}>
                        <p className="proj-section-title">{data["title"]}</p>
                        <div className="proj-detail-preview">
                            <img
                                className="proj-detail-image"
                                src={data["img"]}
                                alt="SAHARA Project"
                            ></img>
                        </div>
                        <p className="proj-detail-summary">{data["text"]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;
