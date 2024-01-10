import React from 'react';
import './index.css';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from '@mui/lab';

const ExperienceTimeline = () => {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <div className="timeline-bubble">
              <p>Senior Product Analyst</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default ExperienceTimeline;
