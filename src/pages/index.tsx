import { CardDriver } from '@components/Card';
import { Text } from '@components/Text';
import { Color } from '@styles/colors';
import type { NextPage } from 'next';
import Head from 'next/head';

const driverData: CardDriverProps = {
  id: '2815465RY',
  firstName: 'first',
  lastName: 'last',
  birthDate: new Date(),
  email: 'email@email.com',
  telpNumber: '+6212345678'
};

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="flex flex-col flex-1 h-screen p-6"
        style={{ backgroundColor: Color.GrayBase }}
      >
        <div className="flex flex-col rounded-lg p-5 mb-5 bg-white ">
          <Text color={Color.Orange} size="large" weight="bold">
            Driver Management
          </Text>
          <Text color={Color.Gray} size="small">
            Data driver yang berkerja dengan Anda
          </Text>
        </div>
        <div className="flex flex-col lg:flex-row">
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
