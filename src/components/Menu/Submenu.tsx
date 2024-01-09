"use client";

import Link from "next/link";

const Submenu: React.FC = () => {
  return (
    <div className="group flex items-center">
      <ul className="gap-2 flex">
        <li className="text-secondary hover:text-opacity-40">
          <Link href="/">Home</Link>
        </li>
        <li className="text-secondary hover:text-opacity-40">
          <Link href="/test">Teste</Link>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
