import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

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
    }
`;

const TabItem = styled.li`
    &:hover {
        transform: translateY(-2px);
    }
`;

const Link = styled.a`
    color: ${theme.colors.primary.primaryBg};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    z-index: 1;

    position: relative;

    &::before {
        position: absolute;

        content: '';
        display: inline-block;
        height: 10px;
        bottom: 8px;
        left: 0;
        right: 0;
        background-color: ${theme.colors.accent};
        z-index: -1;
    }

    &:hover {
        color: ${theme.colors.accent};
    }
`;
