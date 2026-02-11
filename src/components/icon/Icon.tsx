import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
};

export function Icon(props: IconPropsType) {
    return (
        <svg
            width={props.width}
            height={props.height}
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
        
    );
}
