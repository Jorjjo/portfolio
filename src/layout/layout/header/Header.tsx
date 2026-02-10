import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { Icon } from '../../../components/icon/Icon';
import { StyledBtn } from '../../../components/Button.styled';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';

const items = ['About Me', 'Skills', 'Projects', 'Contact Me'];

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo color={theme.colors.primary.secondaryBg} />
                    <HeaderMenu menuItems={items} />
                    <MobileMenu menuItems={items} />
                    <DesktopResumeBtn btnSize='md'>
                        Resume
                        <Icon
                            iconId='download'
                            width='20'
                            height='20'
                        />
                    </DesktopResumeBtn>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    /* outline: 1px solid red; */
    background-color: ${theme.colors.primary.primaryBg};
    padding: 24px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const DesktopResumeBtn = styled(StyledBtn)`
    display: flex;
    gap: 8px;
    @media ${theme.media.md} {
        display: none;
    }
`;
