import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type IconPropsType = {
    width: string;
    height: string;

    md?: {
        width: string;
        height: string;
    };

    sm?: {
        width: string;
        height: string;
    };
};

export const IconWrapper = styled.div<IconPropsType>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    @media ${theme.media.md} {
        width: ${(props) => props.md?.width}px;
        height: ${(props) => props.md?.height}px;
    }

    @media ${theme.media.sm} {
        width: ${(props) => props.sm?.width}px;
        height: ${(props) => props.sm?.height}px;
    }
`;
