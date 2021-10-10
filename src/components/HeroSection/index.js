import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroBtnWrapper, HeroH1, ArrowForward, ArrowRight } from './HeroSectionElements';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive 250$ in credit towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    dark="true"
                    primary="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
