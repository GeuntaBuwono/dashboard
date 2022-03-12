type IconSizeType = 'small' | 'medium' | 'large';
type IconType = 'dotsHorizontal';

interface IconProps {
  icon: IconType;
  color?: string;
  size?: IconSizeType;
}
