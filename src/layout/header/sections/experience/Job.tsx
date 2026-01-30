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
            <FlexWrapper justify='space-between'>
                <div>
                    <Icon
                        iconId={props.iconId}
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                    />
                    <JobTitle>{props.jobTitle}</JobTitle>
                </div>
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
    border: 1px solid ${() => theme.colors.grey.hue4};
    border-radius: 10px;
    padding: 29px 24px;

    div {
        display: flex;
        align-items: center;
        gap: 30px;
    }
`;

const JobTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${() => theme.colors.primary.primaryBg};
`;

const JobDesccription = styled.p`
    color: ${() => theme.colors.grey.hue3};
    font-size: 16px;
    line-height: 1.5;
`;

const JobPeriod = styled.span`
    color: ${() => theme.colors.grey.hue3};
    font-size: 16px;
    font-weight: 600;
`;
