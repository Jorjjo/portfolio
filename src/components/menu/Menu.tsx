import React from 'react';
import styled from 'styled-components';

export function Menu() {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href=''>About Me</a>
                </li>
                <li>
                    <a href=''>Skills</a>
                </li>
                <li>
                    <a href=''>Projects</a>
                </li>
                <li>
                    <a href=''>Contact Me</a>
                </li>
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`;
