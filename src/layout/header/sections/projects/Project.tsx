import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type ProjectPropsType = {
    number: string;
    flexDirection?: string;
    src: string;
    title: string;
    desc: string;
};

export function Project(props: ProjectPropsType) {
    return (
        <StyledProject as={'a'} href={'#'}>
            <FlexWrapper
                direction={props.flexDirection || 'row'}
                justify='space-between'
                align='center'
            >
                <Image src={props.src} />
                <ProjectText>
                    <ProjectNumber>{props.number}</ProjectNumber>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <ProjectDescription>{props.desc}</ProjectDescription>
                    <Icon
                        iconId='readMore'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                    />
                </ProjectText>
            </FlexWrapper>
        </StyledProject>
    );
}

const StyledProject = styled.div`
    padding: 59px 0;
`;

const ProjectNumber = styled.span`
    color: ${() => theme.colors.primary.primaryBg};
    font-size: 48px;
    font-weight: 800;
`;

const Image = styled.img`
    max-width: 530px;
    min-height: 398px;
    border-radius: 18px;
    object-fit: cover;
`;

const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    max-width: 582px;
    text-align: left;
`;

const ProjectTitle = styled.h3`
    color: ${() => theme.colors.primary.primaryBg};
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.035em;
`;

const ProjectDescription = styled.p`
    font-size: 16px;
    color: ${() => theme.colors.grey.hue4};
    line-height: 1.5;
`;
