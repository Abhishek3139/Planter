// import * as React from 'react';

// export interface IAppProps {
// }

export function Filters() {
  return (
    <div className="hidden lg:block w-1/4 py-6 px-8">
      <div className="my-2 mb-5">
        <h2 className="uppercase font-semibold text-sm  border-[#e7e7e7] border-b  pb-4 text-left mb-3">
          size option
        </h2>
        <ul className="flex">
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2 cursor-pointer">
            tall
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2 cursor-pointer">
            small
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2 cursor-pointer">
            short
          </li>
        </ul>
      </div>
      <div className="my-2 mb-5">
        <h2 className="uppercase font-semibold text-sm  border-[#e7e7e7] border-b  pb-4 text-left mb-3">
          price filter
        </h2>
        <ul className="text-left">
          <li className="m-2 cursor-pointer">$0-$100</li>
          <li className="m-2 cursor-pointer">$100-$200</li>
          <li className="m-2 cursor-pointer">$200-$300</li>
          <li className="m-2 cursor-pointer">$300-$400</li>
        </ul>
      </div>
      <div className="my-2 mb-5">
        <h2 className="uppercase font-semibold text-sm  border-[#e7e7e7] border-b  pb-4 text-left mb-3">
          size option
        </h2>
        <ul className="flex">
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            tall
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            small
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            short
          </li>
        </ul>
      </div>
    </div>
  );
}
