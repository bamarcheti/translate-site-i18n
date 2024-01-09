"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import CountryFlag from "react-country-flag";
import { locales } from "./locales";

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  const getPathname = (lng: string) => {
    const path = pathname.split("/" + lang).join("");
    return "/" + lng + path;
  };

  return (
    <div className="group flex items-center gap-3">
      <p className="text-secondary">{lang}</p>
      <ul className="gap-2 flex ml-auto">
        {locales.map((lng) => (
          <li
            key={lng.code}
            className="transition ease-in-out hover:-translate-1 hover:scale-110"
          >
            <Link href={getPathname(lng.code)}>
              <CountryFlag
                countryCode={lng.ico}
                svg
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lang;
