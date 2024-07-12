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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuOreos
          className="text-stone-700 absolute top-6 right-4"
          size={44}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>
            Welcome to <strong>VFoods!</strong>
          </span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold  bg-stone-600">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
