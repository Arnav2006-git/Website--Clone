import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";

export default function App(){
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c/:kind" element={<KindRoute />} />
          <Route path="/p/:slug" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function KindRoute(){
  const { kind } = useParams();
  const known = ["all","men","women","unisex","shoes","apparel","accessories"];
  if (!known.includes(kind)) return <Navigate to="/c/all" replace />;
  return <Category kind={kind} />;
}
