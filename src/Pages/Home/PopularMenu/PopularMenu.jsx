import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((datas) => {
        const popularData = datas.filter((data) => data.category === "popular");
        setMenu(popularData);
      });
  }, []);

  console.log(menu);
  return (
    <div>
      <SectionTitle
        subHeading={"check it out"}
        heading={"from our menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2">
        {menu.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
