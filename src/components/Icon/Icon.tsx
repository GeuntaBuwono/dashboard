import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon
} from '@heroicons/react/solid';

const Icon = ({ icon, color, size }: IconProps) => {
  const sizeMapper: Record<IconSizeType, string> = {
    small: 'h-6',
    medium: 'h-12',
    large: 'h-18'
  };

  const iconMapper: Record<IconType, JSX.Element> = {
    dotsHorizontal: <DotsHorizontalIcon color={color} className={sizeMapper[size || 'large']} />,
    search: <SearchIcon color={color} className={sizeMapper[size || 'large']} />,
    plus: <PlusIcon color={color} className={sizeMapper[size || 'large']} />,
    'chevron-left': <ChevronLeftIcon color={color} className={sizeMapper[size || 'large']} />,
    'chevron-right': <ChevronRightIcon color={color} className={sizeMapper[size || 'large']} />,
    menu: <MenuIcon color={color} className={sizeMapper[size || 'large']} />
  };

  return iconMapper[icon];
};

export default Icon;
