import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import "./galaxy_button.css";

interface GalaxyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ElementType;
}

export const GalaxyButton = ({
  children,
  className,
  isLoading,
  icon: Icon,
  ...props
}: GalaxyButtonProps) => {
  return (
    <button
      className={cn(
        "relative group flex items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-3 transition-all duration-300",

        "bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 text-white",
        "bg-size-[200%_auto] hover:bg-right",

        "shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",

        "hover:-translate-y-0.5 active:scale-95 active:translate-y-0",

        "font-bold tracking-wide text-sm sm:text-base",

        "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",

        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/20 to-transparent z-10" />

      <span className="relative z-20 flex items-center gap-2">
        {isLoading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : Icon ? (
          <Icon
            size={18}
            className="transition-transform group-hover:rotate-12"
          />
        ) : null}
        {children}
      </span>
    </button>
  );
};
