import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <>
      <div className="bg-primary-50">
        <Banner />
      </div>
      <div className="container-responsive mt-8">
        <Categories />
      </div>
    </>
  );
};

export default Home;
