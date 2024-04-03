import { useEffect } from 'react';
import { AllPlants } from '../../components/allPlants';
import Banner from '../../components/banner';
import { Benefits } from '../../components/benefits';
import { Footer } from '../../components/footer';
import { PlantCare } from '../../components/plantCare';
import { TopProducts } from '../../components/products';
import SinglePlant from '../../components/singlePlant';
import { TrendingPlants } from '../../components/trendingPlants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { GetAllPlants } from '../../store/thunkApi/plantsApi';
import { selectAllPlants } from '../../store/reducers/plantSlice';
import Blog from '../../components/blog';
import OurBlog from '../../components/ourBlog';

export function Home() {
  const dispatch = useAppDispatch();
  const allPlants = useAppSelector(selectAllPlants);
  useEffect(() => {
    dispatch(GetAllPlants({ limit: 9 }));
  }, []);

  return (
    <>
      <Banner />
      <TrendingPlants smallHeading='Free Shipping' heading='Top Trending Plants'>
        <SinglePlant allPlants={allPlants} />
      </TrendingPlants>
      <TrendingPlants smallHeading='' heading='Our Blog'>
        <OurBlog />
      </TrendingPlants>
      <PlantCare />
      <TrendingPlants
        smallHeading='All kind of Plants'
        heading='Creating a Beautiful Balcony Garden'
      >
        <AllPlants />
      </TrendingPlants>
      <TrendingPlants smallHeading='Free Shipping' heading='Top Cheapest Plants'>
        <TopProducts />
      </TrendingPlants>
      <Benefits />
      <TrendingPlants smallHeading='Free Shipping' heading='Top Trending Plants' />
      <Blog />
      <Footer />
    </>
  );
}
