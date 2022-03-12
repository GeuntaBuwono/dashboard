import { DotsHorizontalIcon } from '@heroicons/react/solid';

const Icon = ({ icon, color, size }: IconProps) => {
  const sizeMapper: Record<IconSizeType, string> = {
    small: 'h-6',
    medium: 'h-12',
    large: 'h-18'
  };

  const iconMapper: Record<IconType, JSX.Element> = {
    dotsHorizontal: <DotsHorizontalIcon color={color} className={sizeMapper[size || 'large']} />
  };

  return iconMapper[icon];
};

export default Icon;
