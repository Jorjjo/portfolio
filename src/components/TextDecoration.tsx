import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const TextDecoration = styled.span`
    color: ${theme.colors.primary.primaryBg};
    -webkit-text-stroke: 2px ${theme.colors.accent};

    /* color: ${theme.colors.primary.primaryBg};
    text-shadow:
        -2px -2px 0 ${theme.colors.accent},
        2px -2px 0 ${theme.colors.accent},
        -2px 2px 0 ${theme.colors.accent},
        2px 2px 0 ${theme.colors.accent}; */
`;
