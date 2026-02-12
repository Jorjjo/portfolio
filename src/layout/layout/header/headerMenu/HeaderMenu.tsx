import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type MenuPropsType = {
    menuItems: Array<string>;
};

export function HeaderMenu(props: MenuPropsType) {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    );
}

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }

    @media ${theme.media.md} {
        display: none;
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
