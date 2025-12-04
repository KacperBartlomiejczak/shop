import { useState } from "react";
import { GalaxyButton } from "../ui/galaxy_button";
import { ChevronDown, ChevronUp } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShowMoreProps {
  onClick: () => void;
  isClicked: boolean;
}
export default function ShowMoreButton({ onClick, isClicked }: ShowMoreProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div layout className="absolute bottom-[-30px] left-0 w-full z-10">
        <div
          className={cn(
            "w-full flex items-end justify-center pb-8 transition-all duration-500",
            {
              "h-64 bg-linear-to-t from-white via-white/80 to-transparent":
                !isClicked,
              "h-24 bg-transparent pointer-events-none": isClicked,
            }
          )}
        >
          <div className="pointer-events-auto z-20">
            <GalaxyButton
              className="h-10 px-8 text-xs font-bold shadow-xl shadow-purple-500/20"
              icon={isClicked ? ChevronUp : ChevronDown}
              onClick={onClick}
            >
              {isClicked ? " Show less" : "Show More"}
            </GalaxyButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
