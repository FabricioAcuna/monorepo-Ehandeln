"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex">
      <h1 className="text-xl font-bold">🛍️ Ehandeln</h1>
      <span>
        <Link href="/">Hemhh</Link>
      </span>
      <span>
        <Link href="/products">Produkter</Link>
      </span>
      <span>
        <Link href="/about">Om oss</Link>
      </span>
    </nav>
  );
}
