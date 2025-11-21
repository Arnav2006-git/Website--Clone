import React from "react";
import { Stripes } from "./utils";

export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <Stripes />
            <span className="font-extrabold tracking-widest">ADISPORT</span>
          </div>
          <p className="mt-3 text-neutral-600">
            Educational demo, brand-safe. No affiliation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-neutral-600">
            <li>Order Status</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-neutral-600">
            <li>About</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow</h4>
          <div className="flex gap-3 text-neutral-600">
            <span>Instagram</span>
            <span>Twitter/X</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
