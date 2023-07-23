import React from "react"
// @ts-ignore
import * as styles from "../styles/cv.module.css"
import BigTitle from "../components/BigTitle/BigTitle"
import headFactory from "../components/Head"
import AppInner from "../components/AppInner/AppInner"
import TopMargin from "../components/TopMargin"

const cv_json = {
    "education": [
        {
            "institution": "Minerva University",
            "degree": "BS",
            "major": "Data Science and Statistics",
            "start_date": "August 2019",
            "end_date": "May 2023",
            "gpa": 3.8,
            "location": "San Francisco, CA",
            "notes": [
                "The most selective undergraduate degree program in the world (<2% admit)",
                "Students spend each semester in a different global city, working with local institutions to solve real-world problems.",
                "Curriculum based on the science of learning, emphasizing computational approaches & project-based learning"
            ]
        }
    ],
    "experience": [
        {
            "company": "Carnegie Mellon University",
            "position": "Research Intern",
            "start_date": "June 2022",
            "end_date": "August 2022",
            "location": "Pittsburgh, PA",
            "notes": [
                "Designed and built a complex drag and drop, kanban-like interface for online sensemaking supporting real-time collaboration and text editing",
                "Collaborated with a data scientist on ML-based structured information extraction from web content, integrating intuitive AI-assisted online sensemaking into my interface",
                "My interface was chosen to demo to Firefox as my team sought a strategic partnership"
            ],
            "skills": ["TypeScript", "React.js", "Rapid Prototyping", "Firebase", "Web Development"]
        },
        {
            "company": "SoftBank Masason AI Incubator",
            "position": "Software Engineering Intern",
            "start_date": "June 2021",
            "end_date": "August 2021",
            "location": "San Francisco, CA",
            "notes": [
                "Cut render times by 90% on an important interface by developing a memoization scheme employing persistent data structures",
                "Designed and implemented an extensible data structure for rich text and annotations; developed a novel linear-time rendering algorithm using two parallel heaps",
                "Presented to the CEO of Deepcore and VP of SoftBank"
            ],
            "skills": ["TypeScript", "React.js", "User Interviews", "Algorithms", "Functional Programming"]
        },
        {
            "company": "Minerva Institute",
            "position": "Software Engineering Intern",
            "start_date": "June 2020",
            "end_date": "December 2020",
            "location": "London, UK",
            "notes": [
                "Full stack web development with React/Mongo/Flask",
                "Took the product from concept through two early iterations as the sole developer on a student team",
                "An internal startup for Minerva Institute"
            ],
            "skills": ["Python", "React.js", "Rapid Prototyping", "Web Development", "Flask"]
        }
    ],
    "awards": [
        {
            "name": "National Merit Finalist",
            "date": "March 2019",
            "institution": "National Merit Scholarship Corporation"
        },
        {
            "name": "Eagle Scout",
            "date": "October 2018",
            "institution": "Boy Scouts of America"
        }
    ]
}

const edToJob = (ed: typeof cv_json.education[0]): JobType => {
    return {
        company: ed.institution,
        location: ed.location,
        position: ed.degree + ", " + ed.major,
        start_date: ed.start_date,
        end_date: ed.end_date,
        notes: ed.notes
    }
}

type JobType = {
    company: string,
    location: string,
    position: string,
    start_date: string,
    end_date: string,
    notes: string[]
}

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className={styles.sectionHeaderContainer}>
            {title}
        </div>
    )
}

const JobWidget: React.FC<{ job: JobType }> = ({ job }) => {
    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <td className={styles.company}>{job.company}</td>
                    <td className={styles.location + " " + styles.right}>{job.location}</td>
                </tr>
                <tr>
                    <td className={styles.position}>{job.position}</td>
                    <td className={styles.date + " " + styles.right}>{job.start_date + " - " + job.end_date}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <ul>
                        {job.notes.map((note) => (
                            <li>{note}</li>
                        ))}
                    </ul>
                    </td>
                    
                </tr>
            </table>
        </div>
    )
}

const AwardWidget: React.FC<{award: typeof cv_json.awards[0]}> = ({award}) => {
    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <td className={styles.company}>{award.name}</td>
                    <td className={styles.date + " " + styles.right}>{award.date}</td>
                </tr>
                <tr>
                    <td className={styles.position}>{award.institution}</td>
                </tr>
                <tr style={{height: 15}}/>
            </table>
        </div>
    )
}

const CV: React.FC = () => {
    return (
        <AppInner>
            <TopMargin>
                <div className={styles.main}>
                    <BigTitle>
                        Resume
                    </BigTitle>
                    <SectionHeader title="Education" />
                    {cv_json.education.map((education) => (
                        <JobWidget job={edToJob(education)} />
                    ))}

                    <SectionHeader title="Experience" />
                    {cv_json.experience.map((experience) => (
                        <JobWidget job={experience} />
                    ))}

                    <SectionHeader title="Awards" />
                    {cv_json.awards.map((award) => (
                        <AwardWidget award={award} />
                    ))}
                </div>
            </TopMargin>
        </AppInner>
    )
}

export const Head = headFactory({title: "Resume - Leo Ware"})

export default CV
