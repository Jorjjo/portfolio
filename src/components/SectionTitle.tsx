import styled from 'styled-components';


type SectionTitlePropsType = {
    color: 'black' | 'white';
    align?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${(props) => props.color};
    font-size: 48px;
    letter-spacing: -0.035em;
    line-height: 1.4;
    margin: 20px 0;
    text-align: ${(props) => props.align || 'left'};
`;
