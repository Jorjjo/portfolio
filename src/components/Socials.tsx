import React from 'react';
import { Icon } from './icon/Icon';
import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { FlexWrapper } from './FlexWrapper';

type SocialsPropsType = {
    socialsItems: Array<string>;
};

export function Socials(props: SocialsPropsType) {
    return (
        <StyledSocials>
            <FlexWrapper as={'ul'} gap='24px'>
                {props.socialsItems.map((item, index) => {
                    return (
                        <SocialsItem  key={index}>
                            <a>
                                <Icon
                                    iconId={item}
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                />
                            </a>
                        </SocialsItem>
                    );
                })}
            </FlexWrapper>
        </StyledSocials>
    );
}

const StyledSocials = styled.nav`
    /* ul {
        display: flex;
        gap: 24px;
    } */
`;

const SocialsItem = styled.li`
    border: 2px solid;
    border-radius: 4px;
    width: 56px;
    height: 56px;
    padding: 16px 16px;
    background-color: #ffff;
    border-color: #000;

    &:hover {
        color: ${theme.colors.primary.primaryBg};
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
    }
`;

