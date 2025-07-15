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
      className="border-y border-accent bg-primary py-2 text-white transition-all duration-500"
    >
      <div className="container mx-auto flex items-center justify-between">
        <NavbarContent>
          <NavbarBrand>
            <img src="./logo.svg" alt="" className="cursor-pointer" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden gap-4 md:flex" justify="center">
          <NavbarItem>
            <Link className="hover:text-main text-main group relative cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                About Us
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main text-main group relative cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Pricing
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main text-main group relative cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Customers
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-main text-main group relative cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors md:text-base">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                Solutions
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              className="bg-secondary text-primary transition-transform duration-300 hover:scale-105"
              color="secondary"
              href="#"
              variant="flat"
            >
              Book a Demo
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="border-white text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
              color="primary"
              href="#"
              variant="bordered"
            >
              Contact Us
            </Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="h-7 w-7 md:hidden"
          />
        </NavbarContent>
        <NavbarMenu
          className="space-y-2 bg-inherit pt-8 text-center md:hidden"
          isOpen={isMenuOpen}
        >
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
              className="w-full bg-secondary text-primary transition-transform duration-300 hover:scale-105"
              color="secondary"
              href="#"
              variant="flat"
            >
              Book a Demo
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              as={Link}
              className="w-full border-white text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
              color="primary"
              href="#"
              variant="bordered"
            >
              Contact Us
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

export default Nav;
