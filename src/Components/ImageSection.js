import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
 
let age = new Date().getFullYear() - 2002; 

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <p className="paragraph">
                    I'm a full-stack developer with experience in front-end and back-end development for web apps and services and am eager to explore more fields of interest.
                </p>
                <p>
                    I enjoy being challenged and doing projects requiring me to work outside my comfort zone and skillset. 
                    I am diligent and sincere in my work, and I am very well at carrying out my tasks.   
                </p>
            </div>
            <div className="right-content">
                
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages </p>
                        <p>Location</p>

                    </div>
                    <div className="info">
                        <p>: Vikalp Shishodia</p>
                        <p>: {age}</p>
                        <p>: English, Hindi </p>
                        <p>: Delhi, India</p>
                    </div>
                </div>
                <PrimaryButton title={'View Resume'} src={'https://drive.google.com/file/d/1ilgU4Ks0BP-JHbiX7qWnK2W0BoGxTYdm/view?usp=sharing'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        flex: 7;
        padding-right: 60px;
        .paragraph{
            padding-bottom: 30px;
        }
    }
    .right-content{
        flex: 5;
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
