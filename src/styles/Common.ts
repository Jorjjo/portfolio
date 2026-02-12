type FontProps = {
    weight?: number;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
};

export const font = ({ weight, lineHeight, Fmin, Fmax }: FontProps) => `
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.2};
    font-size: clamp( ${Fmin}px, calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px ), ${Fmax}px);
`;
