export interface IAppProps {
  smallHeading: string;
  heading: string;
}

export function TrendingPlants({ smallHeading, heading }: IAppProps) {
  return (
    <section>
      <div className="my-10 mx-4">
        <h3 className="text-lg sm:text-xl">{smallHeading}</h3>
        <h4 className="text-2xl sm:text-3xl font-bold">{heading}</h4>
      </div>
    </section>
  );
}
