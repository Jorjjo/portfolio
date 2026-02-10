import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Socials } from '../../../components/Socials';
import { SectionTitle } from '../../../components/SectionTitle';
import { TextDecoration } from '../../../components/TextDecoration';

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
                        <SectionTitle color='black'>
                            Hello I’am <b>Flora Sheen.</b>
                        </SectionTitle>
                        <MainTitle>
                            Frontend <TextDecoration>Developer</TextDecoration>
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
                    <Icon iconId='banner' width='630' height='630' />
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

    @media ${theme.media.md} {
        height: fit-content;
    }
`;

const MainContent = styled.div`
    width: 50%;
    max-width: 586px;
    text-align: left;
    @media ${theme.media.md} {
        width: 100%;
    }

    p {
        color: ${theme.colors.grey.hue500};
        margin: 32px 0 74px;
    }

    ${SectionTitle} {
        margin: 0;
    }
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.035em;
`;
