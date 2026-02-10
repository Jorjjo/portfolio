import React from 'react';
import { Container } from '../../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export function AboutMe() {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper justify='space-between' gap='32px'>
                    <Icon
                        iconId='aboutMe'
                        width='523'
                        height='593'
                    />
                    <article>
                        <SectionTitle color='black'>
                            About <b>Me</b>
                        </SectionTitle>
                        <AboutMeDescription>
                            I'm a passionate, self-proclaimed designer who
                            specializes in full stack development (React.js &
                            Node.js). I am very enthusiastic about bringing the
                            technical and visual aspects of digital products to
                            life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code
                            matters to me.
                            <br />
                            <br />
                            I began my journey as a web developer in 2015, and
                            since then, I've continued to grow and evolve as a
                            developer, taking on new challenges and learning the
                            latest technologies along the way. Now, in my early
                            thirties, 7 years after starting my web development
                            journey, I'm building cutting-edge web applications
                            using modern technologies such as Next.js,
                            TypeScript, Nestjs, Tailwindcss, Supabase and much
                            more.
                            <br />
                            <br />
                            When I'm not in full-on developer mode, you can find
                            me hovering around on twitter or on indie hacker,
                            witnessing the journey of early startups or enjoying
                            some free time. You can follow me on Twitter where I
                            share tech-related bites and build in public, or you
                            can follow me on GitHub.
                        </AboutMeDescription>
                    </article>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
}

const StyledAboutMe = styled.section`
    background-color: ${() => theme.colors.primary.primaryBg};
`;

const AboutMeDescription = styled.p`
    color: ${theme.colors.grey.hue500};
    max-width: 610px;
`;
