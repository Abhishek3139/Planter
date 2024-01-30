export interface IAppProps {
  handleViewSidebar: (open: boolean) => void;
  isOpen: boolean;
}

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, handleViewSidebar }: IAppProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleViewSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => handleViewSidebar(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            <Link to={"/"}>
                              <li
                                className="flex py-6"
                                onClick={() => handleViewSidebar(false)}
                              >
                                HOME
                              </li>
                            </Link>
                            <li className="flex py-6">SHOP</li>
                            <Link to={"/products"}>
                              <li
                                className="flex py-6"
                                onClick={() => handleViewSidebar(false)}
                              >
                                PRODUCTS
                              </li>
                            </Link>
                            <li className="flex py-6">BLOG</li>
                            <li className="flex py-6">PAGE</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
("use client");

// import { Sidebar } from "flowbite-react";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiViewBoards,
// } from "react-icons/hi";
// import { RxCross1 } from "react-icons/rx";

// export const SideBar = ({ isOpen, handleViewSidebar }: IAppProps) => {
//   return (
//     <>
//       {isOpen ? (
//         <Sidebar
//           aria-label="Default sidebar example"
//           className="absolute bg-white top-0 left-0 transition-left duration-1000 ease-in-out hover:left-10"
//         >
//           <div className="flex  justify-end p-8">
//             <button onClick={() => handleViewSidebar(false)}>
//               <RxCross1 />
//             </button>
//           </div>
//           <Sidebar.Items>
//             <Sidebar.ItemGroup>
//               {/* <button > */}
//               <Sidebar.Item href="#" icon={HiChartPie}>
//                 Dashboard
//               </Sidebar.Item>
//               {/* </button> */}
//               <Sidebar.Item
//                 href="#"
//                 icon={HiViewBoards}
//                 label="Pro"
//                 labelColor="dark"
//               >
//                 Kanban
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiInbox} label="3">
//                 Inbox
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiUser}>
//                 Users
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiShoppingBag}>
//                 Products
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiArrowSmRight}>
//                 Sign In
//               </Sidebar.Item>
//               <Sidebar.Item href="#" icon={HiTable}>
//                 Sign Up
//               </Sidebar.Item>
//             </Sidebar.ItemGroup>
//           </Sidebar.Items>
//         </Sidebar>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };
