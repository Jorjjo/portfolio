import styled from 'styled-components';
import { font } from '../styles/Common';

type SectionTitlePropsType = {
    color: 'black' | 'white';
    align?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({ Fmax: 48, Fmin: 28 })}
    color: ${(props) => props.color};
    letter-spacing: -0.035em;
    padding: 20px 0;
    margin-bottom: 20px;
    text-align: ${(props) => props.align || 'left'};
    white-space: nowrap;
`;
