import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

type JobPropsType = {
    iconId: string;
    jobTitle: string;
    jobPeriod: string;
    jobDesc: string;
};

export function Job(props: JobPropsType) {
    return (
        <StyledJob>
            <FlexWrapper
                align='center'
                justify='space-between'
                wrap='wrap'
                gap='30px'
            >
                <FlexWrapper align='center' gap='30px' wrap='wrap'>
                    <Icon iconId={props.iconId} width='32' height='32' />
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
    padding: 30px 24px;
`;

const JobTitle = styled.h3`
    ${font({ Fmax: 24, Fmin: 20, weight: 600 })}
    color: ${() => theme.colors.primary.primaryBg};
    text-align: left;
    letter-spacing: -0.035em;
`;

const JobDesccription = styled.p`
    color: ${theme.colors.grey.hue300};
`;

const JobPeriod = styled.span`
    color: ${theme.colors.grey.hue300};
    font-size: 16px;
    font-weight: 600;
`;
