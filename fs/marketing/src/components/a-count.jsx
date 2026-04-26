import { useState } from "react";

export default function ACount() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] uppercase tracking-wider text-zinc-400">Hits</span>
      <button 
        type="button" 
        onClick={() => setCount((prev) => ++prev)}
        className="text-lg font-light tabular-nums text-zinc-900 border-b border-zinc-100 hover:border-zinc-900 transition-colors"
      >
        {count.toString().padStart(2, '0')}
      </button>
    </div>
  );
}
