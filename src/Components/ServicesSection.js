import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'A website should be made for the people who would use it. The primary goal of every website is to have a user-friendly design that is easy to navigate, which I always keep in mind while working on a project.'}
                    />
                    <ServiceCard 
                        image={intelligence} 
                        title={'Responsive Design'} 
                        paragraph={'Responsive Design automatically adjusts for different screen sizes and viewports, which look good on all devices.'}
                    />
                    <ServiceCard 
                        image={gamedev} 
                        title={'Software Development'} 
                        paragraph={'I can assist you in developing high-quality software solutions and products, as well as a variety of associated professional services.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
