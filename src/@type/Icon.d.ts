type IconSizeType = 'small' | 'medium' | 'large';
type IconType = 'dotsHorizontal' | 'search' | 'plus';

interface IconProps {
  icon: IconType;
  color?: string;
  size?: IconSizeType;
}
