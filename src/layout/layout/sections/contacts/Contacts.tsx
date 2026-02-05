import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/Container';
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { StyledBtn } from '../../../../components/Button.styled';
import { Socials } from '../../../../components/Socials';
import { theme } from '../../../../styles/Theme';

const socials = ['facebook', 'reddit', 'twitter', 'discord'];

export function Contacts() {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <StyledForm>
                        <Field placeholder={'Your name*'} />
                        <Field placeholder={'Email*'} />
                        <Field placeholder={'Your website (If exists)'} />
                        <Field
                            placeholder={'How can I help?*'}
                            as={'textarea'}
                        />
                        <FlexWrapper gap='24px'>
                            <StyledBtn type='submite' btnSize='md'>
                                Get In Touch
                            </StyledBtn>
                            <Socials socialsItems={socials} />
                        </FlexWrapper>
                    </StyledForm>
                    <ContactText>
                        <FlexWrapper direction='column'>
                            <SectionTitle color='black'>
                                <b>
                                    Let’s talk for
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

                        <ContactInfo>
                            <a href='mailto:myemail@gmail.com'>
                                myemail@gmail.com
                            </a>
                            <a href='tel:+1234567890'>1234567890</a>
                        </ContactInfo>
                    </ContactText>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
}

const StyledContacts = styled.section``;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Field = styled.input`
    padding: 18px 24px;
    border-radius: 4px;
    max-width: 500px;
`;

const Slogan = styled.p`
    font-size: 16px;
    color: ${theme.colors.grey.hue500};
`;

const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 40px;
    text-align: left;

    ${SectionTitle} {
        margin: 0;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
        font-size: 28px;
        color: ${theme.colors.primary.secondaryBg};
        font-weight: 600;
    }
`;
