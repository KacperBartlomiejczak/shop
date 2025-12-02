import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReturnToMain() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
    >
      <div className="p-2 bg-gray-50 rounded-full group-hover:bg-purple-100 transition-colors">
        <ArrowLeft
          size={16}
          className="group-hover:text-purple-700 transition-colors"
        />
      </div>
      Back to Shop
    </Link>
  );
}
