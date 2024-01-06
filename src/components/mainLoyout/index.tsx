import { AllPlants } from "../allPlants";
// import Banner from "../banner";
import { PlantCare } from "../plantCare";
import SinglePlant from "../singlePlant";
import { TrendingPlants } from "../trendingPlants";

function MainLayout() {
  return (
    <>
      {/* <Banner /> */}
      <TrendingPlants
        smallHeading="Free Shipping"
        heading="Top Trending Plants"
      />
      <SinglePlant />
      <PlantCare />
      <TrendingPlants
        smallHeading="All kind of Plants"
        heading="Creating a Beautiful Balcony Garden"
      />
      <AllPlants />
    </>
  );
}

export default MainLayout;
