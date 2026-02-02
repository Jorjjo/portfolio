import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

type StyledBtnPropsType = {
    btnSize: 'sm' | 'md' | 'square';
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: 2px solid;
    border-radius: 4px;
    line-height: 1.2;
    letter-spacing: 0.035em;

    ${(props) =>
        props.btnSize === 'md' &&
        css<StyledBtnPropsType>`
            font-size: 20px;
            font-weight: 600;
            padding: 14px 18px;
            color: #fff;
            background-color: #000;
            border-color: #000;
        `}

    ${(props) =>
        props.btnSize === 'sm' &&
        css<StyledBtnPropsType>`
            font-size: 16px;
            padding: 12px 14px;
            color: #fff;
            background-color: #000;
            border-color: #000;
        `}

    ${(props) =>
        props.btnSize === 'square' &&
        css<StyledBtnPropsType>`
            width: 56px;
            height: 56px;
            padding: 16px 16px;
            background-color: #ffff;
            border-color: #000;
        `}

    &:hover {
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
    }

    &:active {
        background-color: ${theme.colors.primary.primaryBg};
        color: ${theme.colors.primary.secondaryBg};
        border-color: ${theme.colors.primary.secondaryBg};
    }
`;
