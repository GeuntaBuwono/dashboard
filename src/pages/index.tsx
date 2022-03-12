import { CardDriver } from '@components/Card';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { Color } from '@styles/colors';
import { useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      searchQuery: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleNavigation = ({}: { type: 'prev' | 'next' }) => {};

  return (
    <div className="h-full md:h-screen">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col flex-1 h-full p-6" style={{ backgroundColor: Color.GrayBase }}>
        <div className="flex flex-col md:flex-row rounded-lg p-5 mb-5 bg-white ">
          <div className="flex flex-1 flex-col mb-4 md:mb-0">
            <Text color={Color.Orange} size="large" weight="bold" transform="uppercase">
              Driver Management
            </Text>
            <Text color={Color.Gray} size="small">
              Data driver yang berkerja dengan Anda
            </Text>
          </div>
          <form className="flex flex-col md:flex-row md:justify-end" onSubmit={formik.handleSubmit}>
            <div className="flex border-2 rounded-sm px-2 py-4 md:mr-2">
              <div className="flex self-center mr-2">
                <Icon icon="search" size="small" color={Color.Orange} />
              </div>
              <input
                className="flex flex-1 border-none focus:outline-0"
                placeholder="Cari Driver"
                type="text"
                value={formik.values.searchQuery}
                onChange={formik.handleChange}
                name="searchQuery"
                id="searchQuery"
              />
            </div>
            <button
              className="flex flex-1 px-2 py-4 mt-4 rounded-sm md:mt-0 md:items-center"
              style={{ backgroundColor: Color.Orange }}
              type="submit"
              disabled={!formik.values.searchQuery}
            >
              <div className="mr-2">
                <Text color="white" weight="bold" transform="uppercase">
                  Tambah Driver
                </Text>
              </div>
              <Icon icon="plus" size="small" color="white" />
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row">
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
          <CardDriver {...driverData} />
        </div>
        <div className="flex py-5 justify-evenly w-1/2 self-center">
          <div className="flex cursor-pointer" onClick={() => handleNavigation({ type: 'prev' })}>
            <Icon icon="chevron-left" size="small" />
            <Text>Previous Page</Text>
          </div>
          <div className="flex cursor-pointer" onClick={() => handleNavigation({ type: 'next' })}>
            <Text>Next Page</Text>
            <Icon icon="chevron-right" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
