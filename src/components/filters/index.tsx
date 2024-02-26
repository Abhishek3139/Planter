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
          color option
        </h2>
        <div>
          <fieldset className="mt-4">
            <span className="flex items-center space-x-3">
              {/* <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        --> */}
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 ring ring-offset-1">
                <input
                  type="radio"
                  name="color-choice"
                  value="White"
                  className="sr-only"
                  aria-labelledby="color-choice-0-label"
                />
                <span id="color-choice-0-label" className="sr-only">
                  White
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-white rounded-full border border-black border-opacity-10"
                ></span>
              </label>
              {/* <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        --> */}
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 ring-2">
                <input
                  type="radio"
                  name="color-choice"
                  value="Gray"
                  className="sr-only"
                  aria-labelledby="color-choice-1-label"
                />
                <span id="color-choice-1-label" className="sr-only">
                  Red
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-red-600 rounded-full border border-black border-opacity-10"
                ></span>
              </label>
              {/* <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        --> */}
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                <input
                  type="radio"
                  name="color-choice"
                  value="Black"
                  className="sr-only"
                  aria-labelledby="color-choice-2-label"
                />
                <span id="color-choice-2-label" className="sr-only">
                  Black
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-gray-900 rounded-full border border-black border-opacity-10"
                ></span>
              </label>
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                <input
                  type="radio"
                  name="color-choice"
                  value="Black"
                  className="sr-only"
                  aria-labelledby="color-choice-2-label"
                />
                <span id="color-choice-2-label" className="sr-only">
                  Lime
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-lime-500 rounded-full border border-black border-opacity-10"
                ></span>
              </label>{" "}
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                <input
                  type="radio"
                  name="color-choice"
                  value="Black"
                  className="sr-only"
                  aria-labelledby="color-choice-2-label"
                />
                <span id="color-choice-2-label" className="sr-only">
                  Pink
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-pink-400 rounded-full border border-black border-opacity-10"
                ></span>
              </label>{" "}
              <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                <input
                  type="radio"
                  name="color-choice"
                  value="Black"
                  className="sr-only"
                  aria-labelledby="color-choice-2-label"
                />
                <span id="color-choice-2-label" className="sr-only">
                  Green
                </span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-green-900 rounded-full border border-black border-opacity-10"
                ></span>
              </label>
            </span>
          </fieldset>
        </div>

        {/* <ul className="flex">
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            <input type="checkbox" />
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            small
          </li>
          <li className="border border-solid border-[#b0b0b0] w-16 h-10 m-2">
            short
          </li>
        </ul> */}
      </div>
    </div>
  );
}
