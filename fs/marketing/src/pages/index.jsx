import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

// import { Link, useNavigate } from 'react-router-dom'

export default function Index() {
  const [count, setCount] = useState(0);
  // const navigate = useNavigate()

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4">
        <img src={reactLogo} className="w-8 h-8 opacity-80" alt="React" />
        <div className="h-4 w-px bg-zinc-100"></div>
        <h2 className="text-2xl font-light tracking-tight text-zinc-900">
          Landing Page
        </h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
          React + Vite + react-vite-ssg starter.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button 
          type="button" 
          onClick={() => setCount((count) => count + 1)}
          className="btn-minimal"
        >
          Count: {count}
        </button>
        
        <Link to="/a" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
          View A Page &rarr;
        </Link>
      </div>
    </div>
  );
}
