import Footer from "../../Shered/Footer/Footer";

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
    
      <Footer></Footer>
    </div>
  );
};

export default Home;
