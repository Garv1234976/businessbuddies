import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/homepage"
          className="relative text-lg font-extrabold tracking-wide text-indigo-700"
        >
          BUSINESS BUDDIES
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"></span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-2 bg-slate-100 p-2 rounded-full">
          {[
            { name: "Home", path: "/homepage" },
            { name: "About", path: "/about" },
            { name: "Career", path: "/career" },
            { name: "Courses", path: "/courses" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-indigo-600 shadow"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-white/70"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/courses"
          className="hidden md:inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
