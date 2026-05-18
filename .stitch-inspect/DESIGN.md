---
name: Femme Luxe Editorial
colors:
  surface: '#fafaeb'
  surface-dim: '#dbdbcd'
  surface-bright: '#fafaeb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f5e6'
  surface-container: '#efefe0'
  surface-container-high: '#e9e9db'
  surface-container-highest: '#e3e3d5'
  on-surface: '#1b1c14'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2f3128'
  inverse-on-surface: '#f1f2e3'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#685d4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#bfb19a'
  on-tertiary-container: '#4e4432'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#f0e0c8'
  tertiary-fixed-dim: '#d3c5ad'
  on-tertiary-fixed: '#221b0b'
  on-tertiary-fixed-variant: '#4f4533'
  background: '#fafaeb'
  on-background: '#1b1c14'
  surface-variant: '#e3e3d5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-desktop: 80px
  container-margin-mobile: 20px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in **Luxury Editorial Minimalism** with a focus on feminine empowerment. It deliberately moves away from high-intensity "gym" aesthetics, opting instead for a mood of sanctuary and professional wellness. The visual language utilizes heavy whitespace to create a sense of breathing room, paired with sophisticated layering to evoke the feeling of a premium physical studio.

The emotional response should be "quiet confidence." Every element must feel intentional, avoiding clutter or unnecessary decorative flourishes. The interface acts as a high-end concierge, guiding the user through their fitness journey with grace and clarity.

## Colors

The palette is rooted in a warm, sophisticated foundation. 

- **Primary (Metallic Gold):** Used sparingly for high-value calls to action, active states, and decorative accents to signify premium quality.
- **Secondary (Deep Black):** Provides the rhythmic anchor for typography and primary navigation, ensuring strong legibility and an authoritative tone.
- **Neutral (Warm Ivory):** Serves as the primary surface color. It is softer and more welcoming than pure white, reducing eye strain and reinforcing the "wellness" atmosphere.
- **Tertiary (Champagne Beige):** Used for subtle backgrounds, secondary containers, and glassmorphic strokes to add depth without adding weight.

Color usage should favor the Warm Ivory and Champagne Beige for 80% of the UI, using Deep Black for 15% (text and structure) and Gold for the final 5% (focus and emphasis).

## Typography

This design system employs a classic high-contrast pairing. **Playfair Display** is utilized for all headlines and display roles to evoke a sense of heritage and luxury. Its italic variant should be used for emphasis in subheaders to lean into the editorial aesthetic.

**Montserrat** provides the functional balance. It is used for body copy and labels to ensure maximum clarity on small screens. Uppercase styling with increased letter spacing is the standard for labels and utility text to maintain a structured, clean appearance.

Avoid using Playfair Display for text smaller than 24px to preserve its delicate serifs.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** with generous vertical rhythm. A 12-column grid is used for desktop (max-width 1440px) to allow for asymmetrical arrangements typical of high-end magazines.

- **White Space:** Large gaps between sections (120px+) are encouraged to prevent the interface from feeling crowded.
- **Alignment:** Content should predominantly be center-aligned for marketing sections and left-aligned for functional dashboards.
- **Mobile:** On mobile devices, margins compress to 20px, and the layout collapses to a single-column stack, prioritizing vertical scroll and large imagery.

## Elevation & Depth

Visual hierarchy is achieved through **Subtle Glassmorphism** and **Soft Ambient Shadows**.

- **Surfaces:** Floating cards and navigation bars use a semi-transparent Champagne Beige background with a `backdrop-filter: blur(12px)`. 
- **Outlines:** Instead of harsh shadows, use 1px solid borders in a slightly darker shade of Ivory or 10% opacity Gold to define boundaries.
- **Shadows:** When depth is required (e.g., for modal windows or primary buttons), use a long, diffused shadow with a hint of warm gold-tinted grey (#A89F91) rather than pure black.
- **Z-Index:** Content is layered thinly, mimicking the effect of vellum paper or stacked editorial prints.

## Shapes

The shape language is "Soft Professional." 

A `roundedness` level of **1 (Soft)** is applied to all interactive elements. This 4px base radius (scaling to 8px for larger components) provides enough softness to feel feminine and approachable without the playfulness of pill-shapes or the severity of sharp corners. 

Buttons and input fields should strictly adhere to these soft corners, while imagery can occasionally feature one or two rounded corners (asymmetrical) to reinforce the editorial design.

## Components

- **Buttons:** Primary buttons use a solid Deep Black background with Metallic Gold text or vice versa. They should have ample internal padding (16px vertical, 32px horizontal) to feel "spacious."
- **Input Fields:** Minimalist design—only a bottom border (1px) in Deep Black or a soft Ivory container with a very subtle inset shadow. Labels stay uppercase and small above the input.
- **Cards:** Cards for workout classes or wellness services should use the Warm Ivory background with a 1px Champagne border. Images within cards should have a subtle zoom-on-hover effect.
- **Chips/Tags:** Used for "Category" or "Intensity level." These should be outlines-only or very light Champagne fills with Montserrat uppercase text.
- **Navigation:** A persistent glassmorphic top bar that transitions from transparent to blurred Ivory upon scroll.
- **Imagery:** All photography should have a consistent warm filter and soft lighting, avoiding high-contrast "sweat and grit" gym photography.