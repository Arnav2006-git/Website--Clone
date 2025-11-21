import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { currency } from "../utils";

export default function ProductCard({ p }){
  return (
    <motion.div layout className="group rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-50">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">
            <Link to={`/p/${p.slug}`}>{p.name}</Link>
          </h3>
          <span className="font-bold">{currency(p.price)}</span>
        </div>
        <div className="mt-1 text-xs text-neutral-600 flex items-center gap-2">
          <span>{p.category}</span>
          <span>•</span>
          <span>{p.gender}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          {p.tags?.includes("new") && <span className="text-xs px-2 py-1 rounded-full bg-black text-white">New</span>}
          {p.tags?.includes("bestseller") && <span className="text-xs px-2 py-1 rounded-full bg-neutral-200">Bestseller</span>}
          {p.tags?.includes("outlet") && <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-700">Outlet</span>}
        </div>
        <Link to={`/p/${p.slug}`} className="mt-4 w-full inline-block text-center rounded-xl bg-black text-white py-2">
          View
        </Link>
      </div>
    </motion.div>
  )
}
