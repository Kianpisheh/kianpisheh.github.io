import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import SAHARA from "../assets/SAHARA.svg";
import SAHARA_1 from "../assets/SAHARA_1.svg";
import SAHARA_2 from "../assets/SAHARA_2.svg";
import exHAR from "../assets/exHAR.svg";
import FaceRec from "../assets/FaceRec.svg";
import VidRet from "../assets/VidRet.svg";

export default function ProjectPage() {
    const { id } = useParams();

    const images = [SAHARA, exHAR, FaceRec, VidRet];

    const projects = [
        {
            id: 0,
            title: "SAHARA: Self-supervised Audio-based Human Activity Recognition",
            description:
                "Self-supevised Human Activity Recognition System based on Everyday Audio Events",
            paper_link: "https://dl.acm.org/doi/10.1145/3715071.3750540",
            summary:
                "SAHARA is a self-supervised human activity recognition (HAR) system that models complex activities using everyday acoustic events, eliminating the need for dense labeled datasets. Instead of learning directly from labeled activity segments, the system discovers and clusters salient audio events, then maps these event patterns to activities through lightweight supervision. This design enables scalable personalization in real-world environments where activities are highly variable and labeled data is scarce, making it suitable for deployment in ubiquitous and edge-based intelligent systems.",
            proj_sections: [
                {
                    title: "Audio Variability in Real-World Activities",
                    img: SAHARA_1,
                    text: "The same activity can produce very different audio depending on context and user behavior. For example, reheating food may include a mix of microwave hum, container movement, or background noise. This variability makes activity-level modeling brittle and motivates learning from reusable event-level representations instead.",
                },
                {
                    title: "Representation Learning",
                    img: SAHARA_2,
                    text: "SAHARA learns audio event embeddings using a self-supervised Siamese framework, augmented with a custom regularization term to improve representation quality. In addition to standard similarity learning, we introduce a frequency-aware regularizer based on Earth Mover’s Distance (EMD) that pushes apart events with different spectral distributions. This prevents representation collapse across acoustically similar signals and produces a more discriminative embedding space, directly improving clustering and downstream activity recognition.",
                },
            ],
        },
        {
            id: 1,
            title: "exHAR",
            description:
                "An Interface for Helping Non-Experts Develop and Debug Knowledge-based Human Activity Recognition Systems",
            paper_link: "https://dl.acm.org/doi/10.1145/3643500",
            summary:
                "exHAR is an explainable Human Activity Recognition (HAR) system that empowers users to create and debug HAR systems using combinations of object interactions. Beyond giving people a convenient user interface to create and combine rules, exHAR helps users identify and debug system classification errors. Users can leverage this feature by soliciting explanations for exHAR's predictions (why and why not) and for how the user can correct faulty predictions (what if and how to).",
            proj_sections: [],
        },
        {
            id: 2,
            title: "FACE RECOGNITION ASSISTANT",
            description:
                "Face Recognition Assistant for People with Visual Impairments",
            paper_link: "https://dl.acm.org/doi/abs/10.1145/3351248",
            summary:
                "FaceRec is a face recognition system designed to assist visually impaired individuals by helping them recognize people they interact with throughout their day. The system leverages one-shot learning to process face image embeddings for real-time identification. Additionally, it captures contextual information, such as time and location, to aid users in retrospectively labeling faces.",
            proj_sections: [],
        },
        {
            id: 3,
            title: "CONTENT-BASED VIDEO RETRIEVAL",
            description:
                "Content-based Video Retrieval in Traffic Videos using Latent Dirichlet Allocation Topic Model",
            paper_link: "https://arxiv.org/abs/2502.05457",
            summary:
                "A content-based video retrieval system that utilizes Topic Models, specifically Latent Dirichlet Allocation (LDA), to identify and cluster traffic patterns in an unsupervised manner. The system enables users to search for specific traffic patterns by specifying vehicle trajectories, making it easier to retrieve relevant video content. By applying LDA, the system effectively extracts underlying topics from the video data, allowing for more accurate and efficient traffic pattern retrieval.",
            proj_sections: [],
        },
    ];

    const project = projects[id];

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
            <ProjectDetail image={images[id]} data={project} />
        </div>
    );
}
