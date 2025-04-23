import Cover from "../../../Components/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 mx-[20px]">
        {items.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>

      <div className="flex justify-center mb-6 ">
        <button className="btn btn-outline border-0 border-orange-500 text-orange-500 border-b-4">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
