import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Feb-Mar 2021'} 
                        title={'Web Development Intern'}
                        subTitle={'The Sparks Foundation'}
                        text={'Designed a responsive, front end website to integrate payment gateway option for Charity Donation. They motivate and encourage the interns to learn, create, and build new ways of thinking, innovate, and solve problems independently.'} 
                    />
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Microsoft Student Learn Ambassador'}
                        text={'Seek out new technologies, explore them, and share that experience and knowledge gained with fellow students through effective communication and organising workshops. I took sessions on Web Development and SQL Server.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem className="resume"
                        year={'2019 - 2023'} 
                        title={'Bachelor of Technology (B.Tech.)'}
                        subTitle={'Delhi Technology University'}
                        textb={'GPA (till 4th Sem): 8.33/10'}
                        
                        text2={'⦿ Head for PR & Publicity in International Organization of Software Developers (Coding Society): Organized Hackathons and SIGs for students.'} 
                        text3={'⦿ Head for PR in INNOVA (Techno-Management fest of DTU): Organized and managed events in the virtual fest - INNOVA’21'} 
                    />
                    <ResumeItem className="resume"
                        year={'2017 - 2019'} 
                        title={'Higher Secondary School Certificate (Class XII)'}
                        subTitle={'DAV Sreshtha Vihar, Delhi'}
                        textb={'Percentage: 94.3%'} 
                    />
                    <ResumeItem className="resume"
                        year={'2007 - 2017'} 
                        title={'Secondary School Certificate (Class X)'}
                        subTitle={'Air Force School Hindon, Ghaziabad'}
                        textb={'CGPA: 10/10'} 
                        text2={'⦿ Won gold medals in Maths and Science Olympiads'} 
                        text3={'⦿ Member of School Basketball team. Won bronze medal and got selected for Western Air Command Team.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
    .resume{
        align-items: left;
    }
`;
export default Resume
