import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/Container';
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { StyledBtn } from '../../../../components/Button.styled';
import { Socials } from '../../../../components/Socials';
import { theme } from '../../../../styles/Theme';
import { TextDecoration } from '../../../../components/TextDecoration';
import { font } from '../../../../styles/Common';

const socials = ['facebook', 'reddit', 'twitter', 'discord'];

export function Contacts() {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper
                    justify='space-around'
                    align='center'
                    gap='32px'
                    wrap='wrap'
                >
                    <StyledForm>
                        <Field placeholder={'Your name*'} />
                        <Field placeholder={'Email*'} />
                        <Field placeholder={'Your website (If exists)'} />
                        <Field
                            placeholder={'How can I help?*'}
                            as={'textarea'}
                        />
                        <FlexWrapper gap='24px' wrap='wrap'>
                            <StyledBtn type={'submite'} btnSize='md'>
                                get in touch
                            </StyledBtn>
                            <Socials socialsItems={socials} />
                        </FlexWrapper>
                    </StyledForm>
                    <ContactText>
                        <FlexWrapper direction='column'>
                            <SectionTitle color='black'>
                                <b>
                                    Let’s <TextDecoration>talk</TextDecoration>{' '}
                                    for
                                    <br />
                                    Something special
                                </b>
                            </SectionTitle>
                            <Slogan>
                                I seek to push the limits of creativity to
                                create high-engaging, user-friendly, and
                                memorable interactive experiences.
                            </Slogan>
                        </FlexWrapper>
                        <Link href='mailto:myemail@gmail.com'>
                            myemail@gmail.com
                        </Link>
                        <Link href='tel:+1234567890'>1234567890</Link>
                    </ContactText>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
}

const StyledContacts = styled.section``;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    textarea {
        height: 140px;
    }
`;

const Field = styled.input`
    width: 100%;
    line-height: 1.2;
    padding: 16px 24px;
    border: 1.5px solid ${theme.colors.primary.secondaryBg};
    border-radius: 4px;

    &::placeholder {
        font-size: 16px;
        color: ${theme.colors.grey.hue500};
    }

    &:focus {
        border: 1.5px solid ${theme.colors.accent};
    }

    &:hover {
        background-color: ${theme.colors.grey.hue100};

        &::placeholder {
            color: ${theme.colors.primary.neutral};
        }
    }
`;

const Slogan = styled.p`
    color: ${theme.colors.grey.hue500};
    margin-bottom: 40px;
`;

const ContactText = styled.div`
    max-width: 600px;
    width: 300px;
    flex-grow: 1;
    text-align: left;

    ${SectionTitle} {
        margin: 0;
        white-space: normal;
    }

    @media ${theme.media.md} {
        max-width: 500px;
    }
`;

const Link = styled.a`
    ${font({ Fmax: 28, Fmin: 20, weight: 600 })}
    display: block;
    color: ${theme.colors.primary.secondaryBg};

    & + a {
        margin-top: 16px;
    }

    &:hover {
        color: ${theme.colors.accent};
    }
`;
