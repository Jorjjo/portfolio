import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Socials } from '../../../components/Socials';
import { SectionTitle } from '../../../components/SectionTitle';
import { TextDecoration } from '../../../components/TextDecoration';
import { font } from '../../../styles/Common';
import { IconWrapper } from '../../../components/icon/IconWrapper';

const socials = ['facebook', 'reddit', 'twitter', 'discord'];

export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper
                    justify='center'
                    align='center'
                    md={{ wrap: 'wrap-reverse' }}
                >
                    <MainContent>
                        <MainSectionTitle color='black'>
                            Hello I’am <b>Flora Sheen.</b>
                        </MainSectionTitle>
                        <MainTitle>
                            Frontend <TextDecoration>Developer</TextDecoration>
                        </MainTitle>
                        <MainSectionTitle color='black'>
                            Based In <b>India</b>.
                        </MainSectionTitle>
                        <p>
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to specimen book.
                        </p>
                        <Socials socialsItems={socials} />
                    </MainContent>
                    <IconWrapper
                        width='630'
                        height='630'
                        md={{ width: '500', height: '500' }}
                        sm={{ width: '332', height: '332' }}
                    >
                        <Icon iconId='banner' width='100%' height='100%' />
                    </IconWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
    background-color: ${theme.colors.primary.primaryBg};
    /* height: 100vh;
    display: flex; */
    /* outline: 1px solid red; */

    /* @media ${theme.media.md} {
        height: fit-content;
    } */
`;

const MainContent = styled.div`
    width: 50%;
    max-width: 586px;
    text-align: left;

    p {
        color: ${theme.colors.grey.hue500};
        margin: 32px 0 74px;

        @media ${theme.media.md} {
            margin: 32px 0;
        }
    }

    ${SectionTitle} {
        margin: 0;
    }

    @media ${theme.media.md} {
        width: 100%;
    }
`;

const MainTitle = styled.h1`
    ${font({ Fmax: 48, Fmin: 28, weight: 800 })}
    letter-spacing: -0.02em;
    margin: 20px 0;

    @media ${theme.media.sm} {
        margin: 12px 0;
    }
`;

const MainSectionTitle = styled(SectionTitle)`
    padding: 0;

`;
