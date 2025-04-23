import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offeredItems = menu.filter((item) => item.category === "offered");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");
  console.log(menu);
  return (
    <div>
      <Helmet>
        <title>SR Restaurent | Menu</title>
      </Helmet>

      {/* Main cover */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's offers"}
      ></SectionTitle>

      {/* Offered section */}
      <MenuCategory items={offeredItems}></MenuCategory>
      {/* Dessert Section */}
      <MenuCategory
        title={"dessert"}
        img={dessertImg}
        items={dessertItems}
      ></MenuCategory>

      {/* Pizza section */}
      <MenuCategory
        title={"pizza"}
        img={pizzatImg}
        items={pizzaItems}
      ></MenuCategory>

      {/* Salads sections */}
      <MenuCategory
        title={"salad"}
        img={saladImg}
        items={saladItems}
      ></MenuCategory>
      {/* Soup sections */}
      <MenuCategory
        title={"soup"}
        img={soupImg}
        items={soupItems}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
