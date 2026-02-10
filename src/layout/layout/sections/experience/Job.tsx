import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type JobPropsType = {
    iconId: string;
    jobTitle: string;
    jobPeriod: string;
    jobDesc: string;
};

export function Job(props: JobPropsType) {
    return (
        <StyledJob>
            <FlexWrapper align='center' justify='space-between'>
                <FlexWrapper align='center' gap='30px'>
                    <Icon
                        iconId={props.iconId}
                        width='32'
                        height='32'
                    />
                    <JobTitle>{props.jobTitle}</JobTitle>
                </FlexWrapper>
                <JobPeriod>{props.jobPeriod}</JobPeriod>
            </FlexWrapper>
            <JobDesccription>{props.jobDesc}</JobDesccription>
        </StyledJob>
    );
}

const StyledJob = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    border: 1px solid ${theme.colors.grey.hue500};
    border-radius: 10px;
    padding: 29px 24px;
`;

const JobTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${() => theme.colors.primary.primaryBg};
`;

const JobDesccription = styled.p`
    color: ${theme.colors.grey.hue300};
`;

const JobPeriod = styled.span`
    color: ${theme.colors.grey.hue300};
    font-size: 16px;
    font-weight: 600;
`;
