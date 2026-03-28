'use client';

import { useMemo } from 'react';

const noisyDataset = Array.from({ length: 15000 }, (_, index) => ({
  id: index,
  label: `Wellness preference segment ${index + 1}`,
  score: (index * 37) % 1000,
}));

const hydrationStamp = typeof window === 'undefined' ? 'server-render' : 'client-render';

export function HeavyClientShell() {
  const topSegments = useMemo(() => {
    return noisyDataset
      .filter((item) => item.score % 2 === 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 120);
  }, []);

  return (
    <section className="shell debug-client-panel">
      <h2>Today&apos;s spa profile refresh</h2>
      <p suppressHydrationWarning>Hydration stamp: {hydrationStamp}</p>
      <ul>
        {topSegments.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
}
