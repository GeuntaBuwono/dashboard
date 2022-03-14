import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { Color } from '@styles/colors';
import Image from 'next/image';
import dateFormatter from 'utils/dateFormatter';

const CardDriver = ({
  firstName,
  lastName,
  telpNumber,
  email,
  birthDate,
  id,
  image
}: CardDriverProps) => (
  <div className="lg:w-60 rounded-lg lg:mb-0 bg-white border-b-2 py-2 px-4">
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-row">
        <div className="mr-2">
          <Text color={Color.Gray}>Driver ID</Text>
        </div>
        <Text color={Color.Orange}>{id}</Text>
        <div className="flex flex-1 justify-end">
          <Icon icon="dotsHorizontal" color={Color.Gray} size="small" />
        </div>
      </div>
      <div className="flex flex-row md:flex-col p-5">
        <div className="flex flex-1 justify-center md:justify-start md:mb-4">
          <Image
            className="rounded-full"
            layout="fixed"
            src={image.large}
            alt="Vercel Logo"
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={image.thumbnail}
          />
        </div>
        <div className="flex flex-1 ml-2 md:ml-0 flex-col justify-center">
          <div className="mt-2">
            <Text color={Color.Gray} size="small">
              Nama Driver
            </Text>
            <div className="flex flex-row">
              <Text transform="capitalize">{`${firstName}, ${lastName}`}</Text>
            </div>
          </div>
          <div className="mt-2">
            <Text color={Color.Gray} size="small">
              Telepon
            </Text>
            <Text transform="capitalize">{telpNumber}</Text>
          </div>
          <div className="hidden md:flex md:flex-col">
            <div className="mt-2">
              <Text color={Color.Gray} size="small">
                Email
              </Text>
              <Text>{email}</Text>
            </div>
            <div className="mt-2">
              <Text color={Color.Gray} size="small">
                Tanggal Lahir
              </Text>
              <Text>
                {dateFormatter({
                  rawDate: birthDate,
                  formatDate: 'dd-MM-yyyy'
                })}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardDriver;
