import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { StyledBtn } from '../../components/Button.styled';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

const items = ['About Me', 'Skills', 'Projects', 'Contact Me']

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo />
                    <Menu menuItems={items}/>
                    <StyledBtn as={'a'} btnSize='md'>
                        <FlexWrapper gap='8px'>
                            <span>Resume</span>
                            <Icon
                                iconId='download'
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                            />
                        </FlexWrapper>
                    </StyledBtn>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${() => theme.colors.primary.primaryBg};
    padding: 24px 0;
`;
