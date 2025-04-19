const MenuItems = ({ item }) => {
  const { price, name, recipe, image } = item;

  return (
    <div
      className="flex px-4 pb-8 my-6
    "
    >
      <img
        className="w-[118px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="pl-3">
        <h1>{name}-------------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItems;
