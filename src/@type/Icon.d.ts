type IconSizeType = 'small' | 'medium' | 'large';
type IconType =
  | 'calendar'
  | 'chevron-left'
  | 'chevron-right'
  | 'dotsHorizontal'
  | 'home'
  | 'menu'
  | 'plus'
  | 'search'
  | 'user-circle';

interface IconProps {
  icon: IconType;
  color?: string;
  size?: IconSizeType;
}
