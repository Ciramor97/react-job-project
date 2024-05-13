import { NavLink } from 'react-router-dom';

export default function NavbarItem({
  item,
  url,
  bgColor,
  hoverBgColor = 'gray-700',
  fontSize = 'text-base',
  display,
  customPadding,
}) {
  return (
    <NavLink
      to={url}
      className={({ isActive, isPending }) =>
        `text-white ${
          isActive ? 'bg-black' : ''
        } bg-${bgColor} hover:bg-${hoverBgColor} text-center hover:text-white rounded-md px-3 py-2 ${fontSize} ${display} ${customPadding}`
      }
    >
      {item}
    </NavLink>
  );
}
