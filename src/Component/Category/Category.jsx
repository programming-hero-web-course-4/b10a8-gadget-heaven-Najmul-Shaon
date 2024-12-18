import { NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed flex flex-col gap-6 items-start p-4 bg-slate-200"
    >
      {categories.map((category, i) => (
        <NavLink
          to={`/gadgets/${category.category}`}
          key={i}
          role="tab"
          className={({ isActive }) =>
            `tab btn w-full ${isActive ? "tab-active" : ""} `
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
