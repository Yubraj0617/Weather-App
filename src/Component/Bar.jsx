import { NavLink } from "react-router-dom";

export default function Bar() {
  const baseClasses = "font-semibold w-[50%] py-3 text-center hover:text-blue-500";
  const activeClasses = "text-blue-700  ";

  return (
    <div className="bg-indigo-300 text-white flex justify-center rounded">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Text Detail
      </NavLink>
      <NavLink
        to="/chart"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Chart Detail
      </NavLink>
    </div>
  );
}
