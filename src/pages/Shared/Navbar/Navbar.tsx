import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TNavItems = {
  id: number;
  title: string;
  href: string;
};

const navItems: TNavItems[] = [
  {
    id: 1,
    title: "home",
    href: "#",
  },
  {
    id: 2,
    title: "Academic",
    href: "#",
  },
  {
    id: 3,
    title: "programs",
    href: "#",
  },
  {
    id: 4,
    title: "courses",
    href: "#",
  },
];

const Logo = () => (
  <div className="font-fontOutfit text-3xl font-bold">
    Study<span className="font-normal">Arc</span>
  </div>
);

const NavItem = ({ title, href }: { title: string; href: string }) => (
  <li className="hover:text-primary-400">
    <a href={href}>{title}</a>
  </li>
);

import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center bg-primary-50/20 bg-white">
      <div className="mx-auto flex w-[95%] shrink-0 items-center justify-between py-4 backdrop-blur-lg">
        {/* logo  */}
        <Logo />
        {/* section */}
        <div className="flex gap-4">
          <nav className="hidden capitalize md:block">
            <ul className="flex h-full items-center gap-4 font-semibold text-customGray-darker">
              {navItems.map((item) => (
                <NavItem key={item.id} title={item.title} href={item.href} />
              ))}
            </ul>
          </nav>
          {/* profile section  */}
          <div className="flex items-center gap-4">
            <button aria-label="search">
              <Search />
            </button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
