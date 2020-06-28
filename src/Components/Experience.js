import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class WorkIcon extends Component {
    render() {
        return(
            <span class="vertical-timeline-element-icon bounce-in" style={{background: "rgb(33, 150, 243)", color: "rgb(255, 255, 255)"}}>
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
            </span>
        );
    }
}

class SchoolIcon extends Component {
    render() {
        return(
            <span class="vertical-timeline-element-icon bounce-in" style={{background: "rgb(233, 30, 99)", color: "rgb(255, 255, 255)"}}>
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                </svg>
            </span>
        );
    }
}

class Experience extends Component {
  render() {
    var experience = null;

    if(this.props.data)
    {
        experience = this.props.data.map(data => {
            const workelementContentStyle = data.status ? { background: 'rgb(33, 150, 243)' } : null;
            const workelementContentArrowStyle = data.status ? { borderRight: '7px solid  rgb(33, 150, 243)' } : null;
            const educationelementContentStyle = data.status ? { background: 'rgb(233, 30, 99)' } : null;
            const educationelementContentArrowStyle = data.status ? { borderRight: '7px solid  rgb(233, 30, 99)' } : null;
    
            if(data.type == "work")
            {
                return <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={workelementContentStyle}
                        contentArrowStyle={workelementContentArrowStyle}
                        date={data.time}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{data.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                            <p>
                                {data.description}
                            </p>
                        </VerticalTimelineElement>
            }
            else if(data.type == "education")
            {
                return <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={educationelementContentStyle}
                        contentArrowStyle={educationelementContentArrowStyle}
                        date={data.time}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{data.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                            <p>
                                {data.description}
                            </p>
                        </VerticalTimelineElement>
            }
        })
    }

    return(
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">

                    <h1>My experiences</h1>

                    <VerticalTimeline>
                        {experience}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
  }
}

export default Experience;