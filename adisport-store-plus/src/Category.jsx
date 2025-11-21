import React, { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, GENDERS } from "./data";
import ProductCard from "./parts/ProductCard";

export default function Category({ kind }){
  const [gender, setGender] = useState("");
  const [cat, setCat] = useState(kind === "all" ? "" : (["shoes","apparel","accessories"].includes(kind) ? kind[0].toUpperCase()+kind.slice(1) : ""));
  const [price, setPrice] = useState([0, 200]);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let arr = PRODUCTS.filter(p => {
      const matchGender = gender ? p.gender === gender : true;
      const matchCat = cat ? p.category === cat : (kind==="men"? p.gender==="Men" : kind==="women"? p.gender==="Women" : kind==="unisex"? p.gender==="Unisex" : true);
      const matchPrice = p.price >= price[0] && p.price <= price[1];
      return matchGender && matchCat && matchPrice;
    });
    switch (sort) {
      case "priceAsc": arr.sort((a,b)=>a.price-b.price); break;
      case "priceDesc": arr.sort((a,b)=>b.price-a.price); break;
      case "rating": arr.sort((a,b)=>b.rating-a.rating); break;
      default: break;
    }
    return arr;
  }, [gender, cat, price, sort, kind]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-[240px,1fr] gap-8">
      <aside className="space-y-4">
        <div>
          <div className="text-sm font-semibold mb-2">Gender</div>
          <select value={gender} onChange={(e)=>setGender(e.target.value)} className="w-full border rounded-lg px-3 py-2">
            <option value="">All</option>
            {GENDERS.map(g=> <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Category</div>
          <select value={cat} onChange={(e)=>setCat(e.target.value)} className="w-full border rounded-lg px-3 py-2">
            <option value="">All</option>
            {CATEGORIES.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Price</div>
          <div className="flex items-center gap-2 text-sm">
            <input type="number" value={price[0]} min={0} onChange={(e)=>setPrice([+e.target.value, price[1]])} className="w-20 border rounded px-2 py-1"/>
            <span>–</span>
            <input type="number" value={price[1]} min={0} onChange={(e)=>setPrice([price[0], +e.target.value])} className="w-20 border rounded px-2 py-1"/>
          </div>
        </div>
        <button onClick={()=>{setGender(""); setCat(""); setPrice([0,200]); setSort("featured");}} className="text-sm underline underline-offset-4">Clear all</button>
      </aside>

      <div>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold capitalize">{kind} {kind!=="all" && "Collection"}</h2>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="border rounded-full px-3 py-2">
            <option value="featured">Featured</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <p className="mt-2 text-neutral-600">{filtered.length} results</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
