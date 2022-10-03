import React from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Vikalp Shishodia</span></h1>
                <h2>
                Student | Programmer | Web Developer  
                </h2>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/vikalpshishodia/" target="_blank" className="icon i-linkedin" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/VkRan" target="_blank" className="icon i-github" rel="noopener noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="https://twitter.com/ShishodiaVikalp" target="_blank" className="icon i-twitter" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <i></i>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h2{
            font-size: 28px;
        }
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
