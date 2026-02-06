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
        <StyledProject href={'#'}>
            <FlexWrapper
                direction={props.flexDirection}
                justify='space-between'
                align='center'
                gap='20px'
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

const ProjectNumber = styled.span`
    color: ${theme.colors.primary.primaryBg};
    font-size: 48px;
    font-weight: 800;
    transition: 0.3s;
`;

const Image = styled.img`
    max-width: 530px;
    min-height: 398px;
    border-radius: 18px;
    object-fit: cover;
    transition: transform 0.5s;
`;

const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    max-width: 582px;
    text-align: left;
`;

const ProjectTitle = styled.h3`
    color: ${theme.colors.primary.primaryBg};
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.035em;
    transition: 0.3s;
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.grey.hue500};
    transition: 0.3s;
`;

const StyledProject = styled.a`
    padding: 60px 0;
    color: ${theme.colors.primary.primaryBg};
    transition: 0.3s;

    &:hover {
        color: ${theme.colors.accent};

        ${ProjectNumber}, ${ProjectTitle} {
            color: ${theme.colors.accent};
        }

        ${ProjectDescription} {
            color: ${theme.colors.grey.hue300};
        }

        ${Image} {
            transform: scale(1.02);
        }
    }
`;
