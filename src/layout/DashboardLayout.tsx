import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { Color } from '@styles/colors';
import Image from 'next/image';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const handleOpenMenu = () => undefined;
  return (
    <>
      <div className="flex flex-1 p-5 bg-white">
        <div className="flex flex-1">
          <div className="mr-2 md:hidden" onClick={handleOpenMenu}>
            <Icon icon="menu" size="medium" color={Color.Gray} />
          </div>
          <Image layout="intrinsic" src="/vercel.svg" alt="User Image" width={50} height={50} />
        </div>
        <div className="flex-row items-center mr-2 hidden md:flex">
          <Text>Hello</Text>
          <Text color={Color.Orange}>, Shipper User</Text>
        </div>
        <Image layout="intrinsic" src="/avatar.png" alt="User Image" width={50} height={50} />
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
