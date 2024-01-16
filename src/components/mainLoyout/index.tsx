import { AllPlants } from "../allPlants";
import { Benefits } from "../benefits";
// import Banner from "../banner";
import { PlantCare } from "../plantCare";
import { Products } from "../products";
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
      <Products />
      <Benefits />
    </>
  );
}

export default MainLayout;
