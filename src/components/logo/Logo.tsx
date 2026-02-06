import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type LogoProps = {
    color: string
}

export function Logo(props: LogoProps) {
    return (
        <StyledLogo color={props.color} href='#'>
            <Icon
                iconId={'logo'}
                width='40'
                height='40'
                viewBox='0 0 40 40'
            />
            <span>Personal</span>
        </StyledLogo>
    );
}

const StyledLogo = styled.a<{color: string}>`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    color: ${props => props.color};

    span {
        font-size: 20px;
    }
`