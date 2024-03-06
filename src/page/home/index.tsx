import { AllPlants } from '../../components/allPlants';
import Banner from '../../components/banner';
import { Benefits } from '../../components/benefits';
import { Footer } from '../../components/footer';
import { PlantCare } from '../../components/plantCare';
import { TopProducts } from '../../components/products';
import SinglePlant from '../../components/singlePlant';
import { TrendingPlants } from '../../components/trendingPlants';

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
      <TopProducts />
      <Benefits />
      <TrendingPlants smallHeading='Free Shipping' heading='Top Trending Plants' />
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
