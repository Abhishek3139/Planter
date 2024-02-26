import * as React from "react";

// export interface IAppProps {}

export function Cart() {
  return (
    <section>
      <div className="bg-[#f2f2f2] h-screen">
        <h2 className="text-3xl p-5">Your Cart</h2>
        <div className="flex uppercase m-10 text-xl bg-white h-[70%] p-4 rounded-xl">
          <div className="w-[65%] overflow-y-auto">
            {/* cart header */}
            <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
              <div className="w-[50%] text-left">product</div>
              <div className="w-[50%]">
                <ul className="flex justify-evenly">
                  <li>price</li>
                  <li>quantity</li>
                  <li>total</li>
                </ul>
              </div>
              <div className="w-5"></div>
            </div>
            {/* cart items */}
            <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
              <div className="w-[50%] text-left flex justify-start my-4 items-center">
                <img src="public\p1.jpg" className="h-32" alt=".." />
                <div className="ml-4">Italian Stone Pine</div>
              </div>
              <div className="w-[50%] flex justify-evenly items-center">
                <div>$200</div>
                <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
                  <button className="">-</button>1<button>+</button>
                </div>
                <div className="">$200</div>
              </div>
              <div className="w-5 pt-[68px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
              <div className="w-[50%] text-left flex justify-start my-4 items-center">
                <img src="public\p1.jpg" className="h-32" alt=".." />
                <div className="ml-4">Italian Stone Pine</div>
              </div>
              <div className="w-[50%] flex justify-evenly items-center">
                <div>$200</div>
                <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
                  <button className="">-</button>1<button>+</button>
                </div>
                <div className="">$200</div>
              </div>
              <div className="w-5 pt-[68px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
              <div className="w-[50%] text-left flex justify-start my-4 items-center">
                <img src="public\p1.jpg" className="h-32" alt=".." />
                <div className="ml-4">Italian Stone Pine</div>
              </div>
              <div className="w-[50%] flex justify-evenly items-center">
                <div>$200</div>
                <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
                  <button className="">-</button>1<button>+</button>
                </div>
                <div className="">$200</div>
              </div>
              <div className="w-5 pt-[68px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* order summary */}
          <div className=" w-[35%]">
            <div className="bg-[#f2f2f2] w-80  m-10 p-6 mb-2">
              <div className="border-[#e7e7e7] border-b  text-left pb-4">
                order summary
              </div>
              <div className="border-[#e7e7e7] border-b py-6 text-xs">
                <div className="text-left flex  justify-between py-1">
                  <div>subtotal</div>
                  <div>$500</div>
                </div>
                <div className="text-left flex  justify-between py-1">
                  <div>shipping</div>
                  <div>free</div>
                </div>
              </div>
              <div className="text-left flex  justify-between  pt-4">
                <div>total</div>
                <div>$500</div>
              </div>
            </div>
            <div className="bg-[#145333] text-white font-semibold w-80 mx-10 py-3">
              <button className="text-lg">CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
