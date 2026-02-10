import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    min-height: 100%;
    padding: 0 32px;
    margin: 0 auto;

    @media ${theme.media.md} {
        padding: 0 16px;
    }
`;
