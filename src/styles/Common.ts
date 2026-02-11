import { theme } from './Theme';

type FontProps = {
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
};

export const font = ({ weight, color, lineHeight, Fmin, Fmax }: FontProps) => `
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primary.secondaryBg};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`;
