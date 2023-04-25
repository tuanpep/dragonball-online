import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import viettelLogo from '../../assets/images/viettel.png';
import vinaphoneLogo from '../../assets/images/vinaphone.svg';
import mobifoneLogo from '../../assets/images/mobifone.webp';

const cardTypes = [
  {
    name: 'Viettel',
    logo: viettelLogo,
    value: 'viettel',
  },
  {
    name: 'Vinaphone',
    logo: vinaphoneLogo,
    value: 'vinaphone',
  },
  {
    name: 'Mobifone',
    logo: mobifoneLogo,
    value: 'mobifone',
  },
];
export default function DepositForm() {
  return (
    <form>
      <div>
        <h3 className="mb-5 text-lg font-medium text-gray-900">Chọn nhà mạng</h3>
        <p className="mb-4 mt-2">Nhà mạng (Ưu tiên Viettel, Vinaphone)</p>

        <ul className="grid w-full gap-6 md:grid-cols-4">
          {cardTypes.map(cardType => (
            <li>
              <input
                type="radio"
                id={cardType.value}
                name="hosting"
                value={cardType.value}
                className="hidden peer"
                required
              />
              <label
                htmlFor={cardType.value}
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer "
              >
                <div className="h-6 w-full flex justify-center items-center">
                  <img className="w-full h-full" src={cardType.logo} />
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <FormControl>
        <FormLabel htmlFor="name">Tài khoản</FormLabel>
        <Input autoComplete="off" id="name" placeholder="Tên tài khoản" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
