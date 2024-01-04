export interface IAppProps {
  smallHeading: string;
  heading: string;
}

export function TrendingPlants({ smallHeading, heading }: IAppProps) {
  return (
    <section>
      <div className="my-10 ">
        <h3 className="text-xl">{smallHeading}</h3>
        <h4 className=" text-3xl font-bold">{heading}</h4>
      </div>
    </section>
  );
}
