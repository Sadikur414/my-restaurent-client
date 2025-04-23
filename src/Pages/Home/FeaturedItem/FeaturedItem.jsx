import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const FeaturedItem = () => {
  return (
    <div className="featured text-white pt-10 my-10">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-6">
          <h1 className="text-2xl">April 2025 </h1>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p>
            {" "}
            Our reataurent are opened 10 am to 10 pm. Here you will get verities
            foods . The food qualities are so good. For more details visite our
            whole website, you can order foods from home .{" "}
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
