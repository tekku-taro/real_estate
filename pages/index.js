import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageIds="/houseline1.svg"
          smallImageIds="/social-media-logo.svg"
          mediumImageIds="/social-media-logo1.svg"
          smallImageIds2="/social-media-logo2.svg"
          smallImageIds3="/social-media-logo3.svg"
          largeImageIds="/social-media-logo4.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
