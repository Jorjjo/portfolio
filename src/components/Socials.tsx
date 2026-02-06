import { Icon } from './icon/Icon';
import styled from 'styled-components';
import { StyledBtn } from './Button.styled';

type SocialsPropsType = {
    socialsItems: Array<string>;
};

export function Socials(props: SocialsPropsType) {
    return (
        <StyledSocials>
            <ul>
                {props.socialsItems.map((item, index) => {
                    return (
                        <StyledBtn as={'li'} btnSize='square'  key={index}>
                            <a>
                                <Icon
                                    iconId={item}
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                />
                            </a>
                        </StyledBtn>
                    );
                })}
            </ul>
        </StyledSocials>
    );
}

const StyledSocials = styled.nav`
    ul {
        display: flex;
        gap: 24px;
    }
`;

