import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <nav className="nav flex items-center w-full h-full">
      <ul className="nav-ul flex items-center w-full h-full">
        {navigation.map((item) => (
          <li className="nav-li">
            <Link
              to={`${item.section ? "#" : "/"}${item.section || item.path}`}
              className={`inline-block px-3`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-xl hover:text-sky-600 "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
