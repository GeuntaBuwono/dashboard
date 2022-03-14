import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { Color } from '@styles/colors';
import Image from 'next/image';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="flex flex-1 p-5 bg-white">
      <div className="flex flex-1">
        <div className="mr-2 md:hidden">
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
    <div className="flex overflow-hidden bg-white">
      <div className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
        <ul className="hidden md:flex flex-col px-6 mt-6 space-y-5">
          <li className="flex space-x-3">
            <Icon icon="home" size="small" />
            <Text>Beranda</Text>
          </li>
          <li className="flex space-x-3">
            <Icon icon="user-circle" size="small" />
            <Text>Driver Management</Text>
          </li>
          <li className="flex space-x-3">
            <Icon icon="calendar" size="small" />
            <Text>Pickup</Text>
          </li>
        </ul>
      </div>
      <div
        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        style={{ backgroundColor: Color.GrayBase }}
      >
        {children}
      </div>
    </div>
  </>
);

export default DashboardLayout;
