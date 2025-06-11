# Icons by DevRGD

![DevRGD Icons](/public/og-image.png)

The official icon pack by DevRGD. A flexible, type-safe, and "headless" component system for rendering SVG icons and text content within a Next.js and Tailwind CSS project.

This system is built on the principle that styling should be fully controlled by utility classes. A single `className` prop on any component intuitively styles both the container (`<span>`) and the content (`<svg>` or text) itself.

---

## Features

- **Headless by Design**: Components are unstyled by default. All visual aspects (size, color, background, padding) are controlled via a single `className` prop.
- **Intelligent Class Parsing**: Automatically separates Tailwind CSS classes for the container (`bg-`, `p-`, `w-`, `h-`) and the content (`text-`).
- **Type-Safe**: Uses TypeScript to ensure you can only use valid icon and component names, preventing runtime errors and enabling editor autocompletion.
- **SVG & Text Support**: Seamlessly handles SVG icons (fill, stroke, or mixed) and text-based components like `Alphabet` with the exact same API.
- **Extensible**: Adding new icons or components is simple and follows a clear, repeatable pattern.
- **Clean API**: Import named components directly for a declarative and readable usage: `<GitHub className="..." />`.

---

## How It Works

The system's elegance comes from a few core utility files located in the `icons` directory.

### 1. The Class Parser (`icons/lib/parser.ts`)

This is the brain of the system. The `parseIconClasses` function takes a single string of Tailwind classes and intelligently sorts them into two groups:

- **Container Classes**: Any class that does **not** start with `text-` (e.g., `bg-blue-500`, `h-16`, `w-16`, `p-4`, `rounded-lg`).
- **Content Classes**: Any class that **does** start with `text-` (e.g., `text-white`, `text-3xl`). This prefix controls both the color and the size of the SVG or text content.

### 2. The Icon Wrapper (`icons/lib/IconWrapper.tsx`)

This is a higher-order component that provides the shared JSX structure for all SVG icons. It:

1.  Calls the `parseIconClasses` utility.
2.  Renders an outer `<span>` with the `containerClasses`.
3.  Renders an inner `<svg>` with the `contentClasses`.
4.  Sets the SVG's dimensions to `h-[1em] w-[1em]`, a classic CSS trick that makes its size directly proportional to the font-size defined by `text-*` utilities.
5.  Accepts `svgProps` to handle special cases, like the fill-based `GitHub` icon.

### 3. Individual Components (`icons/icons/Home.tsx`, etc.)

Each icon or text component is incredibly simple.

- **SVG Icons**: They import the `IconWrapper` and pass in their unique `<path>` data as children.
- **Text Components (`Alphabet.tsx`)**: They use the same parser but apply the classes to nested `<span>` elements instead of an SVG.

---

## How to Use

Based on your project structure, the `icons` directory is at the root. A standard Next.js project with path aliases will allow you to import directly from `@/icons`.

First, import the components you need from the central export file.

```tsx
import { GitHub, Terminal, Alphabet, Home, User, Settings } from '@/icons';
```

Then, use them in your JSX, passing a single `className` string to control all styles.

### Basic Usage

```tsx
<Home className="h-16 w-16 bg-blue-100 p-3 rounded-lg text-4xl text-blue-600" />
```

- `h-16 w-16 bg-blue-100 p-3 rounded-lg` are applied to the outer `<span>`.
- `text-4xl text-blue-600` are applied to the inner `<svg>`.

### Alphabet Component

The `Alphabet` component works the same way, supporting single or multiple characters.

```tsx
// Single Letter Avatar
<Alphabet letter="R" className="h-20 w-20 rounded-full bg-purple-100 text-5xl text-purple-600" />;

// Multi-Character Badge

<Alphabet letter="RGD" className="h-12 w-24 rounded-lg bg-teal-500 text-2xl text-white" />;
```

---

## How to Add a New SVG Icon

Adding a new icon is a simple 3-step process. Let's add an icon named `Star`.

### 1. Create the Component File

Create a new file: `icons/icons/Star.tsx`. Get the `<path>` data from your SVG file and place it inside the `IconWrapper`. If it's a fill-based icon, add the `svgProps`.

```tsx
// icons/icons/Star.tsx
import React from 'react';
import { IconWrapper } from '../lib/IconWrapper';

export const Star = ({ className }: { className?: string }) => (
  <IconWrapper
    className={className}
    // This is a fill icon, so we override the default stroke behavior
    svgProps={{ fill: 'currentColor', stroke: 'none' }}
  >
    {/* Paste your SVG <path> data here */}
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </IconWrapper>
);
```

### 2. Export the New Component

Open the central export file (`icons/index.ts`) and add a new line for your `Star` component.

```ts
// icons/index.ts
export * from './icons/Home';
export * from './icons/User';
// ... other icons
export * from './icons/Star'; // Add this line
```

### 3. Use It!

That's it! Your new icon is now available to be imported and used anywhere in your project.

```tsx
import { Star } from '@/icons';

<Star className="h-16 w-16 text-5xl text-yellow-400" />;
```

---

Happy hacking! 🎉
