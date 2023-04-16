import React from 'react';
import background5 from '../assets/images/background5.jpg';
import { BsAndroid, BsAndroid2, BsApple, BsDownload, BsWindows } from 'react-icons/bs';

type Props = {};

const Download = (props: Props) => {
  return (
    <div className="bg-center bg-cover" style={{ backgroundImage: `url(${background5})` }}>
      <div className="backdrop-brightness-50 text-white w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold uppercase">Tải về</h1>

        <div className="flex flex-col gap-4 mt-10">
          <button className="flex gap-4 item-center justify-between bg-green-500 py-3 px-6 rounded-sm">
            <BsWindows size={24} />
            <p className="text-lg font-semibold">Mod PC - Windows</p>
            <BsDownload size={20} />
          </button>

          <button className="flex gap-4 item-center justify-between bg-green-500 py-3 px-6 rounded-sm">
            <BsAndroid2 size={24} />
            <p className="text-lg font-semibold">Mod Android - APK</p>
            <BsDownload size={20} />
          </button>

          <button className="flex gap-4 item-center justify-between bg-green-500 py-3 px-6 rounded-sm">
            <BsApple size={24} />
            <p className="text-lg font-semibold">Mod IOS (Cài trực tiếp)</p>
            <BsDownload size={20} />
          </button>
          <button className="flex gap-4 item-center justify-between bg-green-500 py-3 px-6 rounded-sm">
            <BsApple size={24} />
            <p className="text-lg font-semibold">File ipa Mod - IOS</p>
            <BsDownload size={20} />
          </button>
          <button className="flex gap-4 item-center justify-between bg-green-500 py-3 px-6 rounded-sm">
            <BsApple size={24} />
            <p className="text-lg font-semibold">Scarlet - IOS</p>
            <BsDownload size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
