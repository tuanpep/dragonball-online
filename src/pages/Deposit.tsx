import background from '../assets/images/background.png';
import DepositForm from '../components/deposit/DepositForm';

type Props = {};

const Deposit = (props: Props) => {
  return (
    <div className="w-full  bg-gray-500" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full min-h-screen pt-24 flex flex-col gap-10 items-center backdrop-brightness-50">
        <h1 className="text-5xl font-bold uppercase text-white">Nạp tiền</h1>

        <div className="w-full max-w-2xl bg-gray-100 p-4 rounded-lg">
          <DepositForm />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
