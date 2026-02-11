import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPropsType = {
    iconId: string;
    skillTitle: string;
};

export function Skill(props: SkillPropsType) {
    return (
        <StyledSkill>
            <FlexWrapper
                direction='column'
                align='center'
                justify='center'
                gap='32px'
            >
                <Icon iconId={props.iconId} width='56' height='56' />
                <SkillTitle>{props.skillTitle}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
}

const StyledSkill = styled.div`
    max-width: 186px;
    width: 100%;
    min-height: 186px;
    border: 2px solid ${theme.colors.primary.secondaryBg};
    border-radius: 4px;

    /* @media ${theme.media.md} {
        max-width: 160px;
        min-height: 160px;
    } */

    @media ${theme.media.sm} {
        max-width: 160px;
        min-height: 160px;
    }
`;

const SkillTitle = styled.h3`
    color: ${theme.colors.primary.secondaryBg};
    font-size: 20px;
    font-weight: 700;
`;
