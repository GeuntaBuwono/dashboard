import { CardDriver } from '@components/Card';
import { Icon } from '@components/Icon';
import { CardPlaceholder } from '@components/Placeholder';
import { Text } from '@components/Text';
import useLocalStorage from '@hooks/useLocalStorage';
import { Color } from '@styles/colors';
import { useFormik } from 'formik';
import _ from 'lodash';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '@services/UserServices';
import DashboardLayout from '@layout/DashboardLayout';

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  return {
    props: {
      users
    }
  };
};

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [users, setUsers] = useState<Array<UserInterface>>([]);

  const [, setUserStorageData] = useLocalStorage({
    key: 'users',
    defaultValue: ''
  });

  const formik = useFormik({
    initialValues: {
      searchQuery: '',
      page: 0,
      hasPrev: false,
      hasNext: true
    },
    onSubmit: (values) => {
      if (formik.values.searchQuery) {
        const found: Array<UserInterface> | undefined = data?.filter((element) =>
          element.name.first.toLowerCase().includes(values.searchQuery.toLowerCase())
        );
        formik.setFieldValue('page', 0);
        setUsers(found || []);
      } else {
        formik.resetForm();
        data && setUsers(data);
      }
    }
  });

  const { isSuccess, isFetching, data } = useQuery<Array<UserInterface>>(
    ['users', formik.values.page],
    getUsers,
    {
      initialData: props.users,
      refetchOnWindowFocus: false,
      onSuccess: (value) => {
        if (users?.length === 0) {
          setUserStorageData(value);
          setUsers(value);
        }
      }
    }
  );

  useEffect(() => {
    formik.setFieldValue('hasPrev', formik.values.page !== 0);
    formik.setFieldValue('hasNext', formik.values.page !== _.chunk(users, 5).length - 1);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.page, users]);

  const handleNavigation = ({ type }: { type: 'prev' | 'next' }) => {
    if (type === 'prev') {
      formik.setFieldValue('page', formik.values.page - 1);
    } else {
      formik.setFieldValue('page', formik.values.page + 1);
    }
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-1 flex-col h-screen p-6">
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
              type="button"
              disabled
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
        <div className="flex">
          {isFetching ? (
            <div className="flex flex-1 flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-5 lg:overflow-auto">
              {Array.from('12345679', Number).map((index) => (
                <CardPlaceholder key={index} />
              ))}
            </div>
          ) : isSuccess && users.length > 0 ? (
            <div className="flex flex-1 flex-col lg:overflow-auto">
              <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-5 lg:flex-row">
                {_.chunk(users, 5)[formik.values.page]?.map((item, index) => {
                  const id =
                    item.id.value || item.id.name ? item.id.value + item.id.name : String(index);

                  return (
                    <CardDriver
                      id={id}
                      key={index}
                      firstName={item.name.first}
                      lastName={item.name.last}
                      telpNumber={item.phone}
                      email={item.email}
                      birthDate={new Date(item.dob.date)}
                      image={item.picture}
                    />
                  );
                })}
              </div>
              <div className="flex py-5 justify-evenly lg:w-1/2 lg:self-center">
                <div
                  className={`flex ${formik.values.hasPrev ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() =>
                    formik.values.hasPrev ? handleNavigation({ type: 'prev' }) : undefined
                  }
                >
                  <Icon
                    icon="chevron-left"
                    size="small"
                    color={formik.values.hasPrev ? Color.Black : Color.Gray}
                  />
                  <Text color={formik.values.hasPrev ? Color.Black : Color.Gray}>
                    Previous Page
                  </Text>
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() =>
                    formik.values.hasNext ? handleNavigation({ type: 'next' }) : undefined
                  }
                >
                  <Text color={formik.values.hasNext ? Color.Black : Color.Gray}>Next Page</Text>
                  <Icon
                    icon="chevron-right"
                    size="small"
                    color={formik.values.hasNext ? Color.Black : Color.Gray}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 justify-center items-center">
              <Text size="large" color={Color.Orange} transform="capitalize">
                Data tidak di Temukan
              </Text>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
