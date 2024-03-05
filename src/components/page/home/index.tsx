import Banner from '../../banner';
import { TrendingPlants } from '../../trendingPlants';
import SinglePlant from '../../singlePlant';
import { PlantCare } from '../../plantCare';
import { AllPlants } from '../../allPlants';
import { Products } from '../products';
import { Benefits } from '../../benefits';
import { Footer } from '../../footer';
// import { Blog } from "../../blog";
export function Home() {
  return (
    <>
      <Banner />
      <TrendingPlants smallHeading='Free Shipping' heading='Top Trending Plants'>
        <SinglePlant />
      </TrendingPlants>
      <PlantCare />
      <TrendingPlants
        smallHeading='All kind of Plants'
        heading='Creating a Beautiful Balcony Garden'
      >
        <AllPlants />
      </TrendingPlants>
      <Products />
      <Benefits />
      <TrendingPlants smallHeading='Free Shipping' heading='Top Trending Plants' />
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
