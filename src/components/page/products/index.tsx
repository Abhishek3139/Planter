// import * as React from "react";

// import { Filters } from "../../filters";

// export interface IAppProps {}
const products = [
  {
    id: 1,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 2,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 3,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 4,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 1,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 2,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 3,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 4,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 1,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 2,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 3,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
  {
    id: 4,
    name: "Echeveria Succulent",
    href: "#",
    imageSrc: "public/singlePlant/pro-8.jpg",
    imageAlt: "Echeveria Succulent",
    price: "$100",
  },
];
export function Products() {
  return (
    <div className="bg-white">
      {/* <Filters /> */}
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products
        </h2>
        <div className="flex justify-between items-center my-2">
          <div className="flex font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            FILTERS
          </div>
          <div>
            <select className="px-3 py-2 border-solid border-2 border-[e0e0e0] max-w-full text-sm">
              <option>Best Selling</option>
              <option>Featured</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
            </select>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4  md:flex md:justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
