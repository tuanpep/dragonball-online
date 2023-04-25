import background from '../assets/images/background.png';
import DepositForm from '../components/deposit/DepositForm';

type Props = {};

const Deposit = (props: Props) => {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen bg-black-300 pt-24 flex flex-col gap-10 items-center backdrop-brightness-50">
        <h1 className="text-3xl font-bold uppercase text-white">Nạp thẻ cào</h1>
        <p className="text-white">Nạp Thẻ Cào Tự động 24/7 - Nhập sai mệnh giá sẽ mất thẻ.</p>

        <div className="w-full max-w-3xl bg-gray-100 p-4 rounded-lg">
          <DepositForm />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
