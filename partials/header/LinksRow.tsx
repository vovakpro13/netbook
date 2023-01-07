"use-client";

import React, { FC } from "react";
import { Links } from "../../constants/links";
import Link from "next/link";
import MenuDropdown from "../../components/MenuDropdown";

const LinksRow: FC = () => {
  return (
    <div className="flex gap-[32px]">
      {Links.map(({ name, href, links }) => {
        if (links?.length) {
          return <MenuDropdown key={name} name={name} links={links} />;
        }

        return (
          <Link key={name} href={href} className="nav-link">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default LinksRow;
