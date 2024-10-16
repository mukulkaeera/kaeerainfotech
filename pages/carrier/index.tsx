import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface Career {
    title: string;
    description: string;
    requirements: string[];
}

interface Data {
    company: string;
    tagline: string;
    careers: Career[];
}

const CareerPage: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '' });

    useEffect(() => {
        const careerData: Data = {
            company: "Kaeera Infotechnology",
            tagline: "Join Our Team",
            careers: [
                {
                    title: "PPC Expert",
                    description: "Looking for a skilled PPC Expert with 3 years of experience.",
                    requirements: ["3 years of experience in PPC management", "Strong analytical skills", "Experience with Google Ads and Facebook Ads"]
                },
                {
                    title: "BDM",
                    description: "We need a Business Development Manager with 3 years of experience.",
                    requirements: ["3 years in business development", "Excellent communication skills", "Proven track record in sales"]
                },
                {
                    title: "Lead Generation",
                    description: "Join us as a Lead Generation Specialist with 3 years of experience.",
                    requirements: ["3 years in lead generation", "Familiarity with CRM software", "Strong research skills"]
                },
                {
                    title: "SEO Internship",
                    description: "We offer an SEO internship for candidates with 0-6 months of experience.",
                    requirements: ["Basic knowledge of SEO", "Willingness to learn", "Familiarity with analytics tools is a plus"]
                },
                {
                    title: "Web Developer Internship",
                    description: "Looking for a Web Developer Intern with 2-6 months of experience.",
                    requirements: ["Basic knowledge of HTML, CSS, and JavaScript", "Eagerness to learn", "Familiarity with frameworks is a plus"]
                },
                {
                    title: "Video Editor",
                    description: "Hiring a Video Editor with 3 years of experience.",
                    requirements: ["3 years of video editing experience", "Proficiency in editing software", "Strong portfolio"]
                }
            ]
        };
        setData(careerData);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyClick = (career: Career) => {
        // Construct the Google Form URL with prefilled data
        const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf6doS0utde0kCzgQCzTXL_OvUhKpktP_6yLL5YzAyGBUqNhA/viewform?usp=sf_link&entry.2005620554=${encodeURIComponent(formData.name)}&entry.1045781291=${encodeURIComponent(formData.phone)}`;

        // Open the Google Form in a new tab
        window.open(googleFormUrl, '_blank');
    };

    if (!data) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.careerPage}>
            <h1>{data.company}</h1>
            <h2>{data.tagline}</h2>
            <div className={styles.careers}>
                {data.careers.map((career) => (
                    <div key={career.title} className={styles.careerCard}>
                        <h3>{career.title}</h3>
                        <p>{career.description}</p>
                        <h4>Requirements:</h4>
                        <ul>
                            {career.requirements.map((req) => (
                                <li key={req}>{req}</li>
                            ))}
                        </ul>
                        <button
                            className={styles.applyButton}
                            onClick={() => handleApplyClick(career)}
                        >
                            Apply
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerPage;
