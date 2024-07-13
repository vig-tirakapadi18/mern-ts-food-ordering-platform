import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CgMenuOreos } from "react-icons/cg";
import { FaHouseUser } from "react-icons/fa";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuOreos
          className="text-stone-800 absolute top-6 right-4"
          size={44}
        />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        {isAuthenticated ? (
          <span className="flex items-center font-bold gap-2 border-2 border-stone-700 p-2 justify-center rounded-md">
            <FaHouseUser
              className="text-stone-700"
              size={26}
            />
            {user?.email}
          </span>
        ) : (
          <SheetTitle>
            <span>
              Welcome to <strong>VFoods!</strong>
            </span>
          </SheetTitle>
        )}
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold  bg-stone-600">
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
