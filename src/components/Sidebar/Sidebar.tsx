"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";
import SidebarTrigger from "./SidebarTrigger";

export default function Sidebar() {
  const cart = useAppStore((state) => state.itemsInCart);
  return (
    <nav className="p-4 bg-white border-b-2 w-screen">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/" className="font-bold font-[inter]">
          Spandziak
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 cursor-pointer relative">
              <ShoppingCart />
              <SidebarTrigger />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
            </SheetHeader>
            <div
              className={
                "flex items-center justify-center min-h-[90vh] flex-row"
              }
            >
              {cart.length === 0 && <p>There is no products in your cart</p>}
              {cart.length > 0 &&
                cart.map((product) => (
                  <div>
                    <div className="relative w-32 h-32">
                      <Image src={product.image} alt={product.title} fill />
                    </div>  
                  </div>
                ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
