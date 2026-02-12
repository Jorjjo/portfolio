import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

type TabsPropsType = {
    menuItems: Array<string>;
};

export function ProjectsTabs(props: TabsPropsType) {
    return (
        <StyledTabs>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <TabItem key={index}>
                            <Link href=''>{item}</Link>
                        </TabItem>
                    );
                })}
            </ul>
        </StyledTabs>
    );
}

const StyledTabs = styled.nav`
    margin-bottom: 20px;
    ul {
        display: flex;
        gap: 23px;
        justify-content: center;

        @media ${theme.media.sm} {
            gap: 13px;
        }
    }
`;

const TabItem = styled.li`
    &:hover {
        transform: translateY(-2px);
    }
`;

const Link = styled.a`
    color: ${theme.colors.primary.primaryBg};
    ${font({ Fmax: 16, Fmin: 14, weight: 600 })}
    text-transform: uppercase;
    z-index: 1;
    white-space: nowrap;

    position: relative;

    &::before {
        position: absolute;

        content: '';
        display: inline-block;
        height: 10px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        background-color: ${theme.colors.accent};
        z-index: -1;
    }

    &:hover {
        color: ${theme.colors.accent};
    }
`;
