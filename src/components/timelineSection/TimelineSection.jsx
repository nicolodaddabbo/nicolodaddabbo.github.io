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
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <span>September 2021</span>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                                <TimelineDot sx={{ bgcolor: 'white' }}>
                                    <img src="assets/logo_itts.png" alt="Unibo" />
                                </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="timelineContent">
                                <span className="description">Secondary School Diploma in IT</span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    
                </Timeline>
            </div>
        </div>
    )
}