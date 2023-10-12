import { Children } from "react";

export default function BtnMain({ children }) {
  return (
    <button className="bg-bgSec py-2 px-6 border-[3px] rounded-lg shadow-md shadow-neutral-900 border-sec text-sec font-semibold hover:border-white active:border-white focus:border-white hover:text-white active:text-white focus:text-white">
      {children}
    </button>
  );
}
