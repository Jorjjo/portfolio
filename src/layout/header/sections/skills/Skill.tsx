import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
    iconId: string;
    skillTitle: string;
};

export function Skill(props: SkillPropsType) {
    return (
        <StyledSkill>
            <Icon
                iconId={props.iconId}
                width='56'
                height='56'
                viewBox='0 0 56 56'
            />
            <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
}

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    max-width: 186px;
    width: 100%;
    min-height: 186px;
    border: 2px solid ${theme.colors.primary.secondaryBg};
    border-radius: 4px;
`;

const SkillTitle = styled.h3`
    color: ${theme.colors.primary.secondaryBg};
    font-size: 20px;
    font-weight: 700;
`;
