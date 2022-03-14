import { CardDriver } from '@components/Card';
import { Icon } from '@components/Icon';
import { CardPlaceholder } from '@components/Placeholder';
import { Text } from '@components/Text';
import DashboardLayout from '@layout/DashboardLayout';
import { Color } from '@styles/colors';
import { useFormik } from 'formik';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getUsers } from 'services/users';

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  return {
    props: {
      users
    }
  };
};

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const queryClient = useQueryClient();

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
        queryClient.setQueryData(['users', values.page], () => found);
      } else {
        refetch();
      }
    }
  });

  const { data, isSuccess, isLoading, isFetching, refetch } = useQuery<Array<UserInterface>>(
    ['users', formik.values.page],
    getUsers,
    {
      initialData: props.users,
      refetchOnWindowFocus: false
    }
  );

  useEffect(() => {
    formik.setFieldValue('hasPrev', formik.values.page !== 0);
    formik.setFieldValue('hasNext', formik.values.page !== 5);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.page]);

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
      <div className="flex flex-1 flex-col h-full p-6">
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
        <div className="flex flex-1">
          {isLoading || isFetching ? (
            <div className="flex flex-1 flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-5 lg:overflow-auto">
              {Array.from('12345679', Number).map((index) => (
                <CardPlaceholder key={index} />
              ))}
            </div>
          ) : isSuccess && data.length > 0 ? (
            <div className="flex flex-1 flex-col overflow-auto">
              <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-5 lg:flex-row overflow-auto">
                {data?.map((item, index) => {
                  const id =
                    item.id.value || item.id.name ? item.id.value + item.id.name : String(index);

                  if (index < 5) {
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
                  }
                  return null;
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
