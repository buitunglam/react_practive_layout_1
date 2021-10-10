import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow, Column1,
    Column2, TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

import { Button } from '../ButtonElements';

const InfoSection = ({
    lightBg,
    topLine,
    imgStart,
    lightText,
    darkText,
    headLine,
    description,
    img,
    alt,
    buttonLabel,
    id,
    primary,
    dark,
    dark2,
 }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to="home"
                                    smooth
                                    duration={500}
                                    spy
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}

                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />
                        </ImgWrap>
                    </Column2>

                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
