import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold text-1xl absolute top-6 right-6 border-stone-700 border-2 hover:bg-stone-700 hover:text-white shadow-lg">
      Log In
    </Button>
  );
};

export default MainNav;
