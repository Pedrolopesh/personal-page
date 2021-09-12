import { Container, BGCode, ContainerParticles} from './style'
import CodeAnimation from '../CodeAnimation';
import Particles from 'react-particles-js';
import CardInfos from '../CardInfos'

 const AboutBanner = () => {
    return (
        <>
            <Container>
                <BGCode>
                    <CardInfos />

                    <ContainerParticles>
                        <Particles params={{
                            fpsLimit: 60,
                            interactivity:{
                                detect_on: "window",
                                events: {
                                    onHover:{
                                        enable: false,
                                        mode: 'repulse'
                                    },
                                    resize: true
                                }
                            },
                            particles: {
                                color: {
                                    value: '#ffffff'
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 0.3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                    value: 40,
                                },
                                shape: {
                                    type: "circle",
                                  },
                                size: {
                                    random: true,
                                    value: 1,
                                },
                            }
                        }} />
                    </ContainerParticles>
                    
                    <CodeAnimation></CodeAnimation>
                </BGCode>
            </Container>
        </>
    )
};


export default AboutBanner;