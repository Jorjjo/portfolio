import styled, { css } from 'styled-components';

type StyledBtnPropsType = {
    btnSize: 'sm' | 'md' | 'square';
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: 2px solid;
    border-radius: 4px;
    line-height: 1.2;

    ${(props) =>
        props.btnSize === 'md' &&
        css<StyledBtnPropsType>`
            font-size: 20px;
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
`;
