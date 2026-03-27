'use client';

import { useMemo } from 'react';

const noisyDataset = Array.from({ length: 15000 }, (_, index) => ({
  id: index,
  label: `Wellness preference segment ${index + 1}`,
  score: (index * 37) % 1000,
}));

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
      <ul>
        {topSegments.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
}
