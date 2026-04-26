import { lazy } from "react";
import { Link } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";

const ACount = lazy(() => import("../components/a-count"));

export default function A() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-xl font-light text-zinc-900">Archive</h2>
        <p className="text-xs text-zinc-400">Section details and location references.</p>
      </div>

      <div className="py-6 border-y border-zinc-50">
        <ACount />
      </div>

      <div className="space-y-6">
        <Link to="/" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors font-sans">
          &larr; Back
        </Link>
        
        <ClientOnly>
          {() => (
            <div className="text-[10px] text-zinc-300 font-sans">
              LOC: {window.location.pathname}
            </div>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
