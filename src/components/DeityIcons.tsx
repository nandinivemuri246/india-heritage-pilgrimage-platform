import type { SVGProps } from 'react';

export type DeityIconName =
  | 'shiva'
  | 'vishnu'
  | 'krishna'
  | 'rama'
  | 'devi'
  | 'ganesha'
  | 'murugan'
  | 'venkateswara';

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function DeityIcon({ name, ...props }: { name: DeityIconName } & IconProps) {
  const merged = { ...baseProps, ...props };

  switch (name) {
    case 'shiva':
      return (
        <svg {...merged}>
          <path d="M24 38V16" />
          <path d="M24 16c-4-4-9-3-11-1 3 1 5 3 6 6" />
          <path d="M24 16c4-4 9-3 11-1-3 1-5 3-6 6" />
          <path d="M18 12c2-3 4-4 6-4s4 1 6 4" />
          <path d="M15 30h18" />
          <path d="M18 35h12" />
          <path d="M20 8c-2-2-3-4-2-6 2 1 4 3 4 5" />
          <path d="M28 8c2-2 3-4 2-6-2 1-4 3-4 5" />
          <circle cx="24" cy="12" r="1.5" />
        </svg>
      );
    case 'vishnu':
      return (
        <svg {...merged}>
          <circle cx="24" cy="24" r="4" />
          <path d="M24 20V8M24 28v12M20 24H8M28 24h12" />
          <path d="M20 20l-8-8M28 20l8-8M20 28l-8 8M28 28l8 8" />
          <path d="M9 8c3 0 5 2 5 5-3 0-5-2-5-5ZM39 8c-3 0-5 2-5 5 3 0 5-2 5-5ZM9 40c3 0 5-2 5-5-3 0-5 2-5 5ZM39 40c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
          <path d="M24 8c-2-2-2-5 0-7 2 2 2 5 0 7Z" />
        </svg>
      );
    case 'krishna':
      return (
        <svg {...merged}>
          <path d="M13 35c6-7 16-7 22 0" />
          <path d="M16 31c2-8 3-15 9-18 6 3 7 10 7 18" />
          <path d="M21 16c-2-4-1-8 1-11 2 3 3 5 2 9 3-3 6-3 8-2-2 3-5 5-9 5" />
          <path d="M7 27h30" />
          <path d="M7 24c6-2 9-2 14 0s8 2 14 0" />
          <path d="M18 38c2-2 10-2 12 0" />
        </svg>
      );
    case 'rama':
      return (
        <svg {...merged}>
          <path d="M10 38C18 30 26 19 38 8" />
          <path d="M10 38c5-1 9 0 12 2" />
          <path d="M38 8c-1 5-4 8-8 11" />
          <path d="M16 29c-3-3-5-7-5-11" />
          <path d="M11 18c4 1 7 0 10-2" />
          <path d="M29 18l5 5" />
          <path d="M32 21l4-4" />
          <circle cx="38" cy="8" r="2" />
        </svg>
      );
    case 'devi':
      return (
        <svg {...merged}>
          <path d="M24 40c0-9-10-13-10-21 0-5 4-9 10-9s10 4 10 9c0 8-10 12-10 21Z" />
          <path d="M24 10c-3-3-3-6 0-8 3 2 3 5 0 8Z" />
          <path d="M14 22c-5-1-8-4-8-7 4 0 8 2 10 5M34 22c5-1 8-4 8-7-4 0-8 2-10 5" />
          <path d="M20 28c3 2 5 2 8 0M18 36h12" />
          <circle cx="24" cy="17" r="1" />
        </svg>
      );
    case 'ganesha':
      return (
        <svg {...merged}>
          <path d="M16 22c-3-5-2-10 2-12 2 2 3 5 2 8 3-2 5-2 8 0-1-3 0-6 2-8 4 2 5 7 2 12" />
          <path d="M16 22c-4-2-7 0-8 3 3 2 6 2 9 0" />
          <path d="M32 22c4-2 7 0 8 3-3 2-6 2-9 0" />
          <path d="M17 21c-1 9 2 14 7 14s8-5 7-14" />
          <path d="M24 35c-1 3-4 4-6 3M24 35c1 3 4 4 6 3" />
          <path d="M21 28h1M26 28h1" />
          <path d="M20 41h8" />
        </svg>
      );
    case 'murugan':
      return (
        <svg {...merged}>
          <path d="M24 42V6" />
          <path d="M24 6c-4 5-7 9-7 14 0 5 3 9 7 12 4-3 7-7 7-12 0-5-3-9-7-14Z" />
          <path d="M19 16h10M18 22h12" />
          <path d="M11 38c3-4 7-5 13-5s10 1 13 5" />
          <path d="M17 38v4M31 38v4" />
        </svg>
      );
    case 'venkateswara':
      return (
        <svg {...merged}>
          <path d="M17 39c1-6 2-11 7-15 5 4 6 9 7 15" />
          <path d="M14 39h20" />
          <path d="M18 20c-1-5 1-9 6-12 5 3 7 7 6 12" />
          <path d="M19 14c3 2 7 2 10 0" />
          <path d="M21 25h6M20 29h8" />
          <path d="M24 9V5M19 7l-2-3M29 7l2-3" />
          <path d="M14 43h20" />
          <circle cx="24" cy="20" r="1" />
        </svg>
      );
  }
}
