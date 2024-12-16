import { Link } from "react-router-dom";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-menubar";
import { Button } from "./ui/button";


const Navbar = () => {
  

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">HimanshuSekhar</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
        <Button className="bg-orange-400 hover:bg-orange-700">Hire Me</Button>
           
            </div>
          </div>
        
        <div className="md:hidden lg:hidden">
        
          <MobileNavbar />
        </div>
      </div>
  </div>
  );
};

export default Navbar;

const MobileNavbar = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>HIMANSHU SEKHAR BEHERA</SheetTitle>
          <SheetDescription>
            MernStack Developer || Java Developer || ABAP Developer
          </SheetDescription>
        </SheetHeader>
      <div className="list-none text-4xl mt-5 ml-5 ">
      <li><a href="/">Home</a></li>
      <li><a href="/aboutme">About Me</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/skills">Skills</a></li>
      <li><a href="/service">Service</a></li>
      <li><a href="/contact">Contact</a></li>
      <Button className="mt-5 w-full bg-orange-400 hover:bg-orange-700">Hire me</Button>
      </div>
      </SheetContent>
    </Sheet>
  );
};