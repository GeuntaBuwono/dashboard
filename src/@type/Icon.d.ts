type IconSizeType = 'small' | 'medium' | 'large';
type IconType = 'dotsHorizontal' | 'search' | 'plus' | 'chevron-left' | 'chevron-right' | 'menu';

interface IconProps {
  icon: IconType;
  color?: string;
  size?: IconSizeType;
}
