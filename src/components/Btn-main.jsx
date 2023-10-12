import { Children } from "react";

export default function BtnMain({ children }) {
  return (
    <button className="bg-bgSec py-2 px-6 border-[3px] rounded-lg shadow-md shadow-neutral-900 border-sec text-sec font-semibold hover:shadow-none  hover:border-sec active:border-sec focus:border-sec hover:bg-sec active:bg-sec focus:bg-sec hover:text-white active:text-white focus:text-white">
      {children}
    </button>
  );
}
