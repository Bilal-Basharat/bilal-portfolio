'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: '#0a0a0a', // deep near‑black
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ['#00f2fe', '#4facfe', '#6c63ff'],
          },
          links: {
            enable: true,
            distance: 140,
            color: '#ffffff',
            opacity: 0.15,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            outModes: 'out',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.35 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}