import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Banner1 from "../Banners/Banner1";
import "./Home.css";
import Catagory from "../Catagory/Catagory";
const Home = () => {
  return (
    <div id="home">
      <div className="Home-page">
        <div className="home-bg-image">
          <div className="bg-transparent-color">
            <div className="container">
              <div className="row">
                <div className="col-md col-lg text-light">
                  <div className="my-5" data-aos="zoom-in">
                    <div className="py-5 text-center">
                      <div className="container py-5">
                        <h1 className="">Jewellery Shop</h1>
                        <q className="col-lg-8 mx-auto lead">
                          Step into a world of opulent charm and bespoke
                          brilliance. Our jewelry shop offers curated
                          collections that redefine luxury, making every moment
                          precious. Explore the artistry that adorns life's
                          milestones, creating memories that shimmer with
                          elegance. Find your signature style and embrace the
                          enchanting journey of adornment.
                        </q>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Hero />
      <Catagory />
      <Banner1 />
      <Contact />
      {/* <Address/> */}
    </div>
  );
};

export default Home;
