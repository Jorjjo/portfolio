import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { StyledBtn } from '../../../../components/Button.styled';
import { Icon } from '../../../../components/icon/Icon';

type MenuPropsType = {
    menuItems: Array<string>;
};

export function MobileMenu(props: MenuPropsType) {
    return (
        <StyleMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Link href=''>
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </Link>
                            </ListItem>
                        );
                    })}
                </ul>
                <StyledBtn btnSize='md'>
                    Resume
                    <Icon
                        iconId='download'
                        width='20'
                        height='20'
                    />
                </StyledBtn>
            </MobileMenuPopUp>
        </StyleMobileMenu>
    );
}

const StyleMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.md} {
        display: block;
    }
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: ${theme.colors.primary.primaryBg};
    display: none;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            display: flex;
            flex-direction: column;
            gap: 32px;
            justify-content: center;
            align-items: center;
        `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    ${StyledBtn} {
        @media ${theme.media.md} {
            display: flex;
            gap: 8px;
        }
    }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 32px;
    width: 32px;
    height: 32px;
    z-index: 99999;

    span {
        display: block;
        width: 32px;
        height: 3px;
        background-color: ${theme.colors.primary.secondaryBg};
        position: absolute;

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                background-color: transparent;
            `}

        &::before {
            content: '';
            display: block;
            width: 32px;
            height: 3px;
            background-color: ${theme.colors.primary.secondaryBg};
            position: absolute;
            transform: translateY(-10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(-45deg) translate(0);
                `}
        }
        &::after {
            content: '';
            display: block;
            width: 32px;
            height: 3px;
            background-color: ${theme.colors.primary.secondaryBg};
            position: absolute;
            transform: translateY(10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(45deg) translate(0);
                `}
        }
    }
`;

const Link = styled.a`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${theme.colors.primary.secondaryBg};
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.accent};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

        ${Link} {
            color: transparent;
        }
    }
`;
