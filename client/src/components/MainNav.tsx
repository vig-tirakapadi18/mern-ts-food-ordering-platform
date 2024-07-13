import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="ghost"
      className="font-bold text-1xl absolute top-6 right-6 border-stone-800 border-2 hover:bg-stone-800 hover:text-white shadow-lg"
      onClick={async () => await loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default MainNav;
