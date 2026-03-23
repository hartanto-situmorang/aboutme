import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  showFade?: boolean;
  fadeIntensity?: number;
}

export function GridBackground({
  children,
  className,
  gridSize = 20,
  gridColor = "#e4e4e7",
  darkGridColor = "#27272a",
  showFade = true,
  fadeIntensity = 20,
}: GridBackgroundProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: showFade
            ? `radial-gradient(circle at center, transparent 0%, rgba(255,255,255,${fadeIntensity / 100}) 100%)`
            : undefined,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `linear-gradient(to right, ${darkGridColor} 1px, transparent 1px), linear-gradient(to bottom, ${darkGridColor} 1px, transparent 1px)`,
        }}
      />
      {showFade && (
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,${fadeIntensity / 100}) 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

interface DotBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  dotSize?: number;
  dotColor?: string;
  darkDotColor?: string;
  spacing?: number;
  showFade?: boolean;
  fadeIntensity?: number;
}

export function DotBackground({
  children,
  className,
  dotSize = 1,
  dotColor = "#d4d4d4",
  darkDotColor = "#404040",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
}: DotBackgroundProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{
        backgroundSize: `${spacing}px ${spacing}px`,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: showFade
            ? `radial-gradient(circle at center, transparent 0%, rgba(255,255,255,${fadeIntensity / 100}) 100%)`
            : undefined,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundImage: `radial-gradient(circle, ${darkDotColor} ${dotSize}px, transparent ${dotSize}px)`,
        }}
      />
      {showFade && (
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,${fadeIntensity / 100}) 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
