import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import "./timelineSection.scss"

export default function TimelineSection() {
    return (
        <div id="timelineContainer">
            <div className="timelineHeader">
                <h1>
                    Timeline
                </h1>
            </div>
            <div className="timeline">
                <Timeline position="alternate" className="timelineComponent">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>June 2021</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Secondary School Diploma in IT</span>
                                <span className="info">ITTS "O. Belluzzi - L. Da Vinci" grade 100/100</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>September 2021 - <span className="today">Today</span></span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: '#F43731' }} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Bachelor Degree in Computer Science and Engineering @ <a target="_blank" href="https://www.unibo.it">UNIBO</a></span>
                                <span className="info">Currently enrolled at Alma Mater Studiorum University of Bologna - Cesena’s Campus</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>December 2021 - January 2023</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Freelance Web Developer</span>
                                <span className="info">Started working as a freelance web developer for small businesses in my city</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>June 2022 - September 2022</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Web Developer - Web Master @ <a target="_blank" href="https://www.piazzahr.com">Piazza Hotels & Residences</a></span>
                                <span className="info">Design, development and maintenance of numerous websites for the Piazza Hotels & Residences group.</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>January 2023 - <span className="today">Today</span></span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: '#F43731' }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Junior Software Developer @ <a target="_blank" href="https://www.lunapartner.it">Luna Partner</a></span>
                                <span className="info"> I’m currently working as Software Developer for a software house based in Bologna.</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>September 2023 - January 2024</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Erasmus @ <a target="_blank" href="https://www.upc.edu">UPC</a> Barcelona</span>
                                <span className="info">Winner of Erasmus+ Scolarship at Universitat Politècnica de Catalunya - Facultad de Informática (FIB), Barcelona (Spain)</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>October 2024</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <span className="dottedLine"></span>
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Expected Graduation Date</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}