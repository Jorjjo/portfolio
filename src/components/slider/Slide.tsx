import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';
import { Icon } from '../icon/Icon';

type SlideProps = {
    userIcon?: string;
    text: string;
    name: string;
};

export function Slide(props: SlideProps) {
    return (
        <StyledSlide>
            <FlexWrapper direction='column' align='center'>
                <IconWrapper>
                    <div>
                        <Icon
                            iconId='quote'
                            width='13'
                            height='10'
                            viewBox='0 0 13 10'
                        />
                    </div>
                    <UserIcon src={props.userIcon} />
                </IconWrapper>
                <SlideText>{props.text}</SlideText>
                <UserName>{props.name}</UserName>
            </FlexWrapper>
        </StyledSlide>
    );
}



const IconWrapper = styled.div`
    width: 96px;
    height: 96px;
    background-color: grey;
    border-radius: 50%;
    position: relative;

    div {
        position: absolute;
        bottom: 3px;
        right: 8px;

        color: ${theme.colors.primary.primaryBg};
    }

    &::before {
        position: absolute;

        content: '';
        display: inline-block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        background-color: ${theme.colors.primary.secondaryBg};
        transition: 0.2s;
    }
`;

const UserIcon = styled.img`
    object-fit: contain;
`;

const SlideText = styled.p`
    line-height: 1.25;
    margin: 24px 0;
    color: ${theme.colors.primary.neutral};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    transition: 0.2s;
`;

const UserName = styled.span`
    font-weight: 600;
    color: ${theme.colors.primary.neutral};
    padding-top: 24px;
    transition: 0.2s;

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.primary.secondaryBg};
        transition: 0.2s;

        position: absolute;
        top: 0;
        left: 0px;
        right: 0px;
    }
`;

const StyledSlide = styled.div`
    max-width: 370px;
    padding: 40px;
    border-radius: 20px;
    box-shadow:
        0 6px 8px 0 rgba(24, 39, 75, 12%),
        0 8px 16px -6px rgba(24, 39, 75, 10%);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${theme.colors.accent};

        ${SlideText}, ${UserName} {
            color: ${theme.colors.primary.primaryBg};
        }

        div {
            color: ${theme.colors.primary.secondaryBg};
        }

        :before {
            background-color: ${theme.colors.primary.primaryBg};
        }
    }

    &::selection {
        color: ${theme.colors.primary.primaryBg};
        background-color: ${theme.colors.primary.neutral};
    }
`;