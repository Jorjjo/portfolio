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
    text-transform: capitalize;
    border-color: ${theme.colors.primary.secondaryBg};
    font-weight: 600;
    transition: 0.2s;

    ${(props) =>
        props.btnSize === 'md' &&
        css<StyledBtnPropsType>`
            font-size: 20px;
            padding: 14px 18px;
            color: #fff;
            background-color: ${theme.colors.primary.secondaryBg};
        `}

    ${(props) =>
        props.btnSize === 'sm' &&
        css<StyledBtnPropsType>`
            font-size: 16px;
            padding: 12px 14px;
            color: #fff;
            background-color: ${theme.colors.primary.secondaryBg};
        `}

    ${(props) =>
        props.btnSize === 'square' &&
        css<StyledBtnPropsType>`
            width: 56px;
            height: 56px;
            padding: 16px 16px;
            background-color: ${theme.colors.primary.primaryBg};
        `}

    &:hover {
        color: ${theme.colors.primary.primaryBg};
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        /* transition: 0.2s; */
    }

    &:active {
        background-color: ${theme.colors.primary.primaryBg};
        color: ${theme.colors.primary.secondaryBg};
        border-color: ${theme.colors.primary.secondaryBg};
    }
`;
