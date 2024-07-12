import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-stone-500 py-6">
      <div className="container mx-auto flex justify-content items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-stone-500">
          VFood
        </Link>
      </div>
    </div>
  );
};

export default Header;
