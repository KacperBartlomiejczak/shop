"use client";

import { useAppStore } from "@/store/useAppStore";

export default function SidebarTrigger() {
  const shoppingCartNumber = useAppStore((state) => state.shoppingCartNumber);
  return (
    <>
      {shoppingCartNumber > 0 && (
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[11px] font-bold text-white">
          {shoppingCartNumber}
        </div>
      )}
    </>
  );
}
