import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-primary py-2 text-white border-y border-accent transition-all duration-500">
      <div className="container mx-auto flex items-center justify-between">
        <NavbarContent>
          <NavbarBrand>
            <img src="./logo.svg" alt="" className="cursor-pointer" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="hover:text-main group text-main relative rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base cursor-pointer">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                About Us
              </span>
              <span className="bg-accent absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main group text-main relative rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base cursor-pointer">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Pricing
              </span>
              <span className="bg-accent absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main group text-main relative rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base cursor-pointer">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Customers
              </span>
              <span className="bg-accent absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main group text-main relative rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base cursor-pointer">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Solutions
              </span>
              <span className="bg-accent absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex ">
            <Button
              as={Link}
              className="text-primary bg-secondary hover:scale-105 transition-transform duration-300"
              color="secondary"
              href="#"
              variant="flat">
              Book a Demo
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden md:flex ">
            <Button
              as={Link}
              className="border-white text-white hover:text-secondary hover:scale-105 transition-transform duration-300"
              color="primary"
              href="#"
              variant="bordered">
              Contact Us
            </Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-7 h-7"
          />
        </NavbarContent>
        <NavbarMenu
          className="md:hidden bg-inherit pt-8 text-center space-y-2"
          isOpen={isMenuOpen}>
          <NavbarItem>
            <Link className="text-white" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#">
              Solutions
            </Link>
          </NavbarItem>
          <NavbarMenuItem>
            <Button
              as={Link}
              className="text-primary bg-secondary w-full hover:scale-105 transition-transform duration-300"
              color="secondary"
              href="#"
              variant="flat">
              Book a Demo
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              as={Link}
              className="border-white text-white w-full hover:text-secondary hover:scale-105 transition-transform duration-300"
              color="primary"
              href="#"
              variant="bordered">
              Contact Us
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

export default Nav;
