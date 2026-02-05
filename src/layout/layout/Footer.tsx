import React from 'react'
import { Container } from '../../components/Container'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Logo } from '../../components/logo/Logo'

export function Footer() {
  return (
    <StyledFooter>
        <Container>
            <Logo fill={'white'}/>
        </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    background-color: ${() => (theme.colors.primary.secondaryBg)};
    padding: 24px 0;
    text-align: center;
`