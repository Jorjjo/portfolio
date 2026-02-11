import styled from 'styled-components';
import { theme } from '../styles/Theme';

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    md?: {
        direction?: string;
        justify?: string;
        align?: string;
        wrap?: string;
        gap?: string;
    };
    sm?: {
        direction?: string;
        justify?: string;
        align?: string;
        wrap?: string;
        gap?: string;
    };
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'stretch'};
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
    gap: ${(props) => props.gap || '0'};
    height: 100%;

    @media ${theme.media.md} {
        flex-direction: ${(props) => props.md?.direction};
        justify-content: ${(props) => props.md?.justify};
        align-items: ${(props) => props.md?.align};
        flex-wrap: ${(props) => props.md?.wrap};
        gap: ${(props) => props.md?.gap};
    }

    @media ${theme.media.sm} {
        flex-direction: ${(props) => props.sm?.direction};
        justify-content: ${(props) => props.sm?.justify};
        align-items: ${(props) => props.sm?.align};
        flex-wrap: ${(props) => props.sm?.wrap};
        gap: ${(props) => props.sm?.gap};
    }
`;
