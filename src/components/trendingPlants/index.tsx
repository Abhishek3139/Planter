import React from "react";

export interface IAppProps {
  smallHeading: string;
  heading: string;
  children?: React.ReactNode;
}

export function TrendingPlants({ smallHeading, heading, children }: IAppProps) {
  return (
    <section>
      <div className="my-10 mx-4 ">
        <h3 className="text-lg sm:text-xl m-4">{smallHeading}</h3>
        <h4 className="text-2xl sm:text-3xl font-bold">{heading}</h4>
        {children}
      </div>
    </section>
  );
}
