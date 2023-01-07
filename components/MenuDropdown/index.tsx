import Image from "next/image";

import React, { FC } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LinkType } from "../../constants/links";
import Link from "next/link";
import ChevronDown from "../../public/chevron-down.png";

("use-client");

interface IProps {
  name: string;
  links: LinkType[];
}

const MenuDropdown: FC<IProps> = ({ name, links }) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <div className="flex items-center nav-link">
              {name}

              <Image
                src={ChevronDown}
                alt="chevron"
                className={`ml-[5px] ${open ? "rotate-180" : ""}`}
                style={{ width: 11, height: 11 }}
              />
            </div>
          </Menu.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute divide-y divide-gray-100 p-2 right-0 mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100">
              {links.map(({ name, href }) => (
                <Menu.Item
                  key={name}
                  as="div"
                  className="nav-link px-3 py-1 hover:bg-blue-300 rounded-md hover:text-white transition"
                >
                  <Link key={name} href={href}>
                    {name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;
