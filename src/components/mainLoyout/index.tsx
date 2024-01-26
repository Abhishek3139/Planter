import { AllPlants } from "../allPlants";
import { Benefits } from "../benefits";
import { Blog } from "../blog";
import Banner from "../banner";
import { PlantCare } from "../plantCare";
import { Products } from "../products";
import SinglePlant from "../singlePlant";
import { TrendingPlants } from "../trendingPlants";
import { Footer } from "../footer";

function MainLayout() {
  return (
    <>
      <Banner />
      <TrendingPlants
        smallHeading="Free Shipping"
        heading="Top Trending Plants"
      >
        <SinglePlant />
      </TrendingPlants>
      <PlantCare />
      <TrendingPlants
        smallHeading="All kind of Plants"
        heading="Creating a Beautiful Balcony Garden"
      >
        <AllPlants />
      </TrendingPlants>
      <Products />
      <Benefits />
      <TrendingPlants
        smallHeading="Free Shipping"
        heading="Top Trending Plants"
      />
      <Blog />
      <Footer />
    </>
  );
}

export default MainLayout;
