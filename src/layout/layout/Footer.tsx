import React from 'react';
import { Container } from '../../components/Container';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Logo } from '../../components/logo/Logo';
import { FlexWrapper } from '../../components/FlexWrapper';
import { font } from '../../styles/Common';

export function Footer() {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper align='center' justify='space-between'>
                    <Logo color={theme.colors.primary.primaryBg} />
                    <small>@ 2019-2023 Personal</small>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primary.secondaryBg};
    padding: 24px 0;

    small {
        ${font({ Fmax: 16, Fmin: 12, weight: 600 })}
        color: ${theme.colors.primary.primaryBg};
    }

    @media ${theme.media.sm} {
        padding: 20px 0;
    }
`;
