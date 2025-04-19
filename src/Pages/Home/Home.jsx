import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonal from "./Testimonial/Testimonal";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonal></Testimonal>
    </div>
  );
};

export default Home;
