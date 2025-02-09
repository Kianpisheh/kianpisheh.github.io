import "./App.css";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import SAHARA from "./assets/SAHARA.svg";
import exHAR from "./assets/exHAR.svg";
import FaceRec from "./assets/FaceRec.svg";
import VidRet from "./assets/VidRet.svg";
import nameLogo from "./assets/Name.svg";

import profile_pic from "./assets/profile.png";

function App() {
    const images = [SAHARA, exHAR, FaceRec, VidRet];
    const projects = [
        {
            title: "SAHARA",
            description:
                "Self-supervised Approach for Human Activity Recognition based on Everyday Audio Events",
            paper_link: "",
        },
        {
            title: "exHAR",
            description:
                "An Interface for Helping Non-Experts Develop and Debug Knowledge-based Human Activity Recognition Systems",
            paper_link: "https://dl.acm.org/doi/10.1145/3643500",
        },
        {
            title: "FACE RECOGNITION ASSISTANT",
            description:
                "Face Recognition Assistant for People with Visual Impairments",
            paper_link: "https://dl.acm.org/doi/abs/10.1145/3351248",
        },
        {
            title: "CONTENT-BASED VIDEO RETRIEVAL",
            description:
                "Content-based Video Retrieval in Traffic Videos using Latent Dirichlet Allocation Topic Model",
            paper_link: "https://dl.acm.org/doi/abs/10.1145/3351248",
        },
    ];

    const currentYear = new Date().getFullYear();
    return (
        <div className="container">
            <div className="navbar-container">
                <Navbar logo={nameLogo}></Navbar>
            </div>
            <div className="about-section">
                <p className="section-title">ABOUT</p>
                <div className="about-content">
                    <p className="about-description">
                        I am a PhD candidate in Computer Science at the
                        <span className="about-emph">
                            {" "}
                            <a
                                className="about-text-link"
                                href="https://web.cs.toronto.edu/"
                            >
                                University of Toronto
                            </a>
                        </span>
                        , working under the supervision of Prof.{" "}
                        <span className="about-emph">
                            <a
                                className="about-text-link"
                                href="https://www.cs.toronto.edu/~khai/"
                            >
                                Khai Truong
                            </a>
                        </span>{" "}
                        in the{" "}
                        <span className="about-emph">
                            <a
                                className="about-text-link"
                                href="https://www.dgp.toronto.edu/"
                            >
                                Dynamic Graphics Project (DGP)
                            </a>
                        </span>{" "}
                        lab. My research lies at the intersection of ubiquitous
                        computing and applied machine learning , focusing on the
                        development of personalized and customizable smart
                        assistants for real-world applications. I design and
                        develop intelligent systems that empower end-users to
                        customize the system behaviour based on their individual
                        habits, preferences, and environment.
                    </p>
                    <div className="about-profile-image">
                        <img id="profile-pic" src={profile_pic}></img>
                        <div className="contact-icons-container">
                            <img
                                className="contact-icon"
                                src="src/assets/linkedin.svg"
                            ></img>
                            <img
                                className="contact-icon"
                                src="src/assets/CV.svg"
                            ></img>
                            <img
                                className="contact-icon"
                                src="src/assets/scholar.svg"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-section">
                <p className="section-title">PROJECTS AND PUBLICATIONS</p>
                <div className="projects">
                    {projects.map((proj, idx) => (
                        <Project
                            key={idx}
                            image={images[idx]}
                            data={projects[idx]}
                        ></Project>
                    ))}
                </div>
            </div>
            <div id="footer">
                <div>{currentYear}. Kian Kianpisheh.</div>
            </div>
        </div>
    );
}

export default App;
