// Inline stroke icons (24px grid, currentColor) — decorative, hidden from screen readers.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'square',
  'aria-hidden': true,
  focusable: false,
};

export const ArrowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 20V5M6 11l6-6 6 6" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const FileIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" />
  </svg>
);

const capabilityPaths = {
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  blueprint: 'M4 4h16v16H4zM4 9h16M9 9v11M12 13h5M12 16h3',
  cut: 'M3 20L20 3M14 3h6v6M7 9l-3-3M10 21l4-4',
  weld: 'M4 20l6-6M10 14l3 3 7-7-3-3zM6 8l1-3M9 6l-2-1M4 10l3-1',
  check: 'M4 4h16v16H4zM8 12l3 3 5-6',
};

export const CapabilityIcon = ({ name, ...props }) => (
  <svg {...base} {...props}>
    <path d={capabilityPaths[name]} />
  </svg>
);
