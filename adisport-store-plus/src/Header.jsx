import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stripes } from "./utils";
import { PRODUCTS } from "./data";

export default function Header() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!q) return [];
    const s = q.toLowerCase();
    return PRODUCTS.filter(p => (p.name + " " + p.category + " " + p.gender).toLowerCase().includes(s)).slice(0,6);
  }, [q]);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <Stripes className="w-8 h-8" />
          <span className="font-extrabold tracking-widest text-xl">ADISPORT</span>
        </Link>

        {/* Mega menu trigger (hover) */}
        <div className="hidden md:flex items-center gap-6 ml-6 text-sm">
          <Link to="/c/men" className="hover:underline underline-offset-4">Men</Link>
          <Link to="/c/women" className="hover:underline underline-offset-4">Women</Link>
          <Link to="/c/unisex" className="hover:underline underline-offset-4">Unisex</Link>
          <Link to="/c/shoes" className="hover:underline underline-offset-4">Shoes</Link>
          <Link to="/c/apparel" className="hover:underline underline-offset-4">Apparel</Link>
          <Link to="/c/accessories" className="hover:underline underline-offset-4">Accessories</Link>
        </div>

        <div className="ml-auto flex-1 max-w-md relative">
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setOpen(true); }}
            placeholder="Search shoes, tees, hoodies…"
            className="w-full rounded-full border px-4 py-2 focus:outline-none focus:ring"
          />
          {open && q && (
            <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-lg overflow-hidden">
              {results.length === 0 && <div className="px-3 py-2 text-sm text-neutral-600">No results</div>}
              {results.map(r => (
                <button
                  key={r.id}
                  onClick={() => { setOpen(false); setQ(""); navigate(`/p/${r.slug}`); }}
                  className="w-full text-left px-3 py-2 hover:bg-neutral-50 flex items-center gap-3"
                >
                  <img src={r.img} alt={r.name} className="w-10 h-10 object-cover rounded" />
                  <div>
                    <div className="text-sm font-medium leading-tight">{r.name}</div>
                    <div className="text-xs text-neutral-600">{r.category} • {r.gender}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <Link to="/cart" className="relative rounded-full border px-3 py-1" aria-label="Cart">
          <span className="material-icons">shopping_bag</span>
        </Link>
      </div>
    </header>
  );
}
