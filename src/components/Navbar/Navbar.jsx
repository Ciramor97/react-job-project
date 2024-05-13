import logo from '../../assets/images/logo.png';
import NavbarItem from './NavbarItem.jsx';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto">
        <div className="flex py-5 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-10" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2 md:space-x-4">
                <NavbarItem item="Home" url="/" hoverBgColor="black-900" />
                <NavbarItem item="Jobs" url="/jobs" hoverBgColor="black" />
                <NavbarItem
                  item="Add Job"
                  url="/add-job"
                  hoverBgColor="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
