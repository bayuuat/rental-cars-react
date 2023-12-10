import { NavLink } from "react-router-dom";

export function SidebarLinks() {
  const createLinks = () => {
    return (
      <>
        <NavLink to={"/dashboard"} end>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "bg-zinc-100 font-bold" : "font-medium text-gray-300"
              } relative mx-4 mb-3 flex rounded-md p-2 hover:cursor-pointer`}
            >
              <li className="my-[3px] flex cursor-pointer items-center px-8 dark:text-white">
                <p className={`leading-1 ml-4 flex `}>Home</p>
              </li>
            </div>
          )}
        </NavLink>
        <NavLink to={"/dashboard/cars"}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "bg-zinc-100 font-bold" : "font-medium text-gray-300"
              } relative mx-4 mb-3 flex rounded-md p-2 hover:cursor-pointer`}
            >
              <li className="my-[3px] flex cursor-pointer items-center px-8 dark:text-white">
                <p className={`leading-1 ml-4 flex `}>Cars</p>
              </li>
            </div>
          )}
        </NavLink>
      </>
    );
  };
  // BRAND
  return createLinks();
}

export default SidebarLinks;
