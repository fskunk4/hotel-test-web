'use client';

import { useEffect, useMemo } from 'react';

const noisyDataset = Array.from({ length: 15000 }, (_, index) => ({
  id: index,
  label: `Wellness preference segment ${index + 1}`,
  score: Math.round(Math.random() * 1000),
}));

export function HeavyClientShell() {
  const hydratedAt = new Date().toLocaleTimeString();

  useEffect(() => {
    console.error('spa-debug-client-hydration', window.location.pathname);
    fetch('/api/preferences').catch(() => {
      console.error('spa-debug-preferences-fetch-failed');
    });
  }, []);

  const topSegments = useMemo(() => {
    return noisyDataset
      .filter((item) => item.score % 2 === 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 120);
  }, []);

  return (
    <section className="shell debug-client-panel">
      <h2>Today&apos;s spa profile refresh</h2>
      <p suppressHydrationWarning>Hydrated at: {hydratedAt}</p>
      <ul>
        {topSegments.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
}
