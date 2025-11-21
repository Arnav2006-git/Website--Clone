import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./data";
import { currency, cls } from "./utils";

export default function Product(){
  const { slug } = useParams();
  const product = useMemo(()=> PRODUCTS.find(p=>p.slug === slug), [slug]);
  const [img, setImg] = useState(0);
  const [color, setColor] = useState(product?.colors?.[0]);
  const [size, setSize] = useState(product?.sizes?.[0]);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">Not found.</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-2 gap-8">
      <div>
        <div className="aspect-[4/3] bg-neutral-50 rounded-2xl overflow-hidden">
          <img src={product.images?.[img] ?? product.img} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {(product.images ?? [product.img]).map((u, i)=>(
            <button key={i} onClick={()=>setImg(i)} className={cls("w-20 h-20 rounded-lg overflow-hidden border", img===i && "ring-2 ring-black")}>
              <img src={u} alt={"thumb"+i} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <h1 className="text-3xl font-extrabold">{product.name}</h1>
        <div className="mt-2 text-neutral-600">{product.category} • {product.gender}</div>
        <div className="mt-3 text-2xl font-extrabold">{currency(product.price)}</div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="text-sm font-medium mb-1">Color</div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(c => (
                <button key={c} onClick={()=>setColor(c)} className={cls("px-3 py-1 rounded-full border", color===c && "bg-black text-white")}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1">Size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(s => (
                <button key={s} onClick={()=>setSize(s)} className={cls("px-3 py-1 rounded-full border", size===s && "bg-black text-white")}>{s}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">Qty</div>
            <div className="flex items-center border rounded-full overflow-hidden">
              <button className="px-3 py-1" onClick={()=>setQty(q=>Math.max(1,q-1))}>-</button>
              <span className="px-3 py-1 min-w-[2ch] text-center">{qty}</span>
              <button className="px-3 py-1" onClick={()=>setQty(q=>q+1)}>+</button>
            </div>
          </div>

          <button className="w-full md:w-auto md:min-w-[260px] rounded-xl bg-black text-white py-3 text-lg sticky top-20">
            Add to bag
          </button>

          <div className="pt-6 space-y-4">
            <details className="border rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Description</summary>
              <p className="mt-2 text-neutral-700">{product.description}</p>
            </details>
            <details className="border rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Details</summary>
              <pre className="mt-2 text-sm text-neutral-700">{JSON.stringify(product.specs, null, 2)}</pre>
            </details>
            <details className="border rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Shipping & Returns</summary>
              <p className="mt-2 text-neutral-700">Free standard shipping on orders over $100. 30‑day returns on unworn items.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
