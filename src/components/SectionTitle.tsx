import styled from "styled-components";

type SectionTitlePropsType = {
    color: 'black' | 'white'
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${(props) => (props.color)};
    font-size: 48px;
    letter-spacing: -0.035em;
`