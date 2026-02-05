import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Socials } from '../../../components/Socials';
import { SectionTitle } from '../../../components/SectionTitle';

const socials = ['facebook', 'reddit', 'twitter', 'discord']

export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <MainContent>
                        <SectionTitle color='black'>
                            Hello I’am <b>Flora Sheen.</b>
                        </SectionTitle>
                        <MainTitle>
                            Frontend <span>Developer</span>
                        </MainTitle>
                        <SectionTitle color='black'>
                            Based In <b>India</b>.
                        </SectionTitle>
                        <p>
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to specimen book.
                        </p>
                        <Socials socialsItems={socials} />
                    </MainContent>
                    <Icon
                        iconId='banner'
                        width='630'
                        height='630'
                        viewBox='0 0 630 630'
                    />
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
    background-color: ${theme.colors.primary.primaryBg};
    height: 100vh;
    display: flex;
`;

const MainContent = styled.div`
    max-width: 586px;
    text-align: left;

    p {
        font-size: 16px;
        color: ${theme.colors.grey.hue500};
        margin: 32px 0 74px;
        line-height: 1.5;

    }
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.035em;

    /* span {
        color: #ffffff;
        text-shadow:
            -2px -2px 0 ${theme.colors.accent},
            2px -2px 0 ${theme.colors.accent},
            -2px 2px 0 ${theme.colors.accent},
            2px 2px 0 ${theme.colors.accent};
    } */

    span {
        color: ${theme.colors.primary.primaryBg};
        -webkit-text-stroke: 2px ${theme.colors.accent};
    }
`;
