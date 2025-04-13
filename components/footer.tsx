"use client";

import { Circle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Circle className="h-3 w-3 text-white" />
            <span className="text-lg font-light tracking-[0.2em]">Falcon-Ways</span>
          </div>
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Falcon-Ways. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}