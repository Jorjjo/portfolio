import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';
import { StyledBtn } from '../../../../components/Button.styled';

type ProjectPropsType = {
    number: string;
    src: string;
    title: string;
    desc: string;
};

export function Project(props: ProjectPropsType) {
    return (
        <StyledProject href={'#'}>
            <ImageWrapper>
                <Image src={props.src} alt='project-image' />
                <StyledBtn btnSize='sm'>view project</StyledBtn>
            </ImageWrapper>

            <ProjectText>
                <ProjectNumber>{props.number}</ProjectNumber>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.desc}</ProjectDescription>
                <Icon iconId='readMore' width='20' height='20' />
            </ProjectText>
        </StyledProject>
    );
}

const ProjectNumber = styled.span`
    color: ${theme.colors.primary.primaryBg};
    ${font({ Fmax: 48, Fmin: 24, weight: 800 })}
    transition: 0.3s;
`;

const ImageWrapper = styled.div`
    position: relative;

    ${StyledBtn} {
        display: none;
    }

    @media ${theme.media.md} {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${StyledBtn} {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const Image = styled.img`
    max-width: 530px;
    min-height: 400px;
    width: 100%;
    border-radius: 18px;
    object-fit: cover;
    transition: transform 0.5s;
`;

const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 580px;
    width: 280px;
    text-align: left;
    flex-grow: 1;

    @media ${theme.media.md} {
        gap: 28px;
        max-width: 530px;
    }
`;

const ProjectTitle = styled.h3`
    color: ${theme.colors.primary.primaryBg};
    ${font({ Fmax: 32, Fmin: 20, weight: 700 })}
    letter-spacing: -0.02em;
    transition: 0.3s;
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.grey.hue500};
    transition: 0.3s;
`;

const StyledProject = styled.a`
    display: flex;
    &:nth-last-of-type(even) {
        flex-direction: row-reverse;
    }
    align-items: center;
    gap: 28px;
    justify-content: space-between;
    flex-wrap: wrap;
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
    @media ${theme.media.md} {
        justify-content: center;
    }

    @media ${theme.media.sm} {
        padding: 0;
    }
`;
