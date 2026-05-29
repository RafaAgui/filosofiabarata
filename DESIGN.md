---
name: The Dialectic
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737872'
  outline-variant: '#c3c8c1'
  surface-tint: '#506354'
  primary: '#334537'
  on-primary: '#ffffff'
  primary-container: '#4a5d4e'
  on-primary-container: '#c0d5c2'
  inverse-primary: '#b7ccb9'
  secondary: '#904b36'
  on-secondary: '#ffffff'
  secondary-container: '#fea58a'
  on-secondary-container: '#783924'
  tertiary: '#553a3e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e5155'
  on-tertiary-container: '#ecc6ca'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e8d5'
  primary-fixed-dim: '#b7ccb9'
  on-primary-fixed: '#0e1f13'
  on-primary-fixed-variant: '#394b3d'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59e'
  on-secondary-fixed: '#3a0b00'
  on-secondary-fixed-variant: '#733521'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#e3bdc2'
  on-tertiary-fixed: '#2b1519'
  on-tertiary-fixed-variant: '#5b4043'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 800px
  section-gap: 5rem
  element-gap: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 2.5rem
  gutter: 1.5rem
---

## Brand & Style
This design system is built for a philosophy blog that prioritizes contemplation, intellectual depth, and long-form reading. The brand personality is academic yet accessible, evoking the atmosphere of a quiet library or a well-curated study.

The design style is **Minimalist** with a focus on editorial excellence. It avoids flashy interactions and unnecessary decorative elements to reduce cognitive load. High-quality typography and generous whitespace are the primary tools for establishing hierarchy. The emotional response should be one of calm, focused attention—allowing the reader to engage with complex ideas without visual distraction.

## Colors
The palette is rooted in a natural, earthy spectrum to create a grounded and timeless feel.
- **Primary (Sage Green):** Used for navigation highlights, primary actions, and active states. It represents growth and clarity.
- **Secondary (Terracotta):** Reserved for subtle accents, specific category tags, or call-to-action highlights that require a warm contrast.
- **Background (Cream):** The off-white `#F9F7F2` base is mandatory for all main reading surfaces to minimize the harsh contrast of pure white and reduce eye strain during long reading sessions.
- **Neutral (Charcoal):** Used for primary text and iconography to maintain high legibility while appearing softer than pure black.

## Typography
The typography strategy utilizes a dual-serif approach to maintain an academic and literary feel.
- **Headlines:** Use **Playfair Display**. It provides a sophisticated, high-contrast look that signals authority.
- **Body Text:** Use **Source Serif 4**. This face is optimized for digital reading with a balanced x-height and sturdy serifs, ensuring comfort during deep-reading sessions.
- **UI & Labels:** Use **Inter**. This provides a functional, neutral counterpoint to the expressive serifs, used for metadata, buttons, and navigation menus.
- **Line Height:** Body text must maintain a line height of at least 1.6 to 1.7 to prevent the "wall of text" effect.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for article content to ensure optimal line lengths (65-75 characters). 

- **Reading Width:** Main article containers should never exceed 800px to maintain focus.
- **Whitespace:** Use generous vertical spacing (`section-gap`) between thematic blocks to allow for mental pauses.
- **Responsive Behavior:** On desktop, the layout utilizes a 12-column grid with wide margins. On mobile, the grid collapses to a single column, with padding increasing from 20px to 32px as the screen widens to tablet size.
- **Sidebar:** Categories and meta-information should be housed in a structured right-hand sidebar on desktop, which reflows to the bottom of the article on mobile.

## Elevation & Depth
This design system avoids heavy shadows and 3D effects. Depth is conveyed through:
- **Tonal Layers:** Using slight variations of the cream background or very light grey (#F1EEE6) to distinguish between the canvas and the content cards.
- **Low-Contrast Outlines:** Use 1px borders in a muted taupe or light grey. These borders should be subtle, acting as guides rather than barriers.
- **Zero Shadows:** Elevation is flat. If an element needs to feel "raised" (like a hover state on a card), use a subtle background color shift or a slightly thicker border rather than a drop shadow.

## Shapes
The shape language is conservative and structural.
- **Soft Corners:** A minimal radius (4px) is applied to cards, buttons, and input fields. This softens the academic tone just enough to feel modern without becoming "playful."
- **Geometric Precision:** Maintain sharp 90-degree angles for the main layout containers and structural dividers to reinforce the disciplined, scholarly aesthetic.

## Components
- **Article Cards:** Features a subtle 1px border, the headline in Playfair Display, and a short excerpt in Source Serif 4. Hover states should gently shift the background color to a slightly darker cream.
- **Buttons:** Primary buttons use a solid Sage Green background with white Inter-based text. Secondary buttons use an outline style with 1px thickness.
- **Tag Chips:** Small, rectangular labels with a 4px radius. Use a light Sage or Terracotta tint background with dark text. Letter spacing should be slightly increased for clarity.
- **Input Fields:** Clean, bottom-border-only or thin-outline fields with Inter as the typeface. No heavy focus rings; use a color shift to the primary Sage Green for the border on focus.
- **Blockquotes:** Use a larger font size of Source Serif 4 in italics, with a thick vertical Sage Green accent bar on the left side.
- **Dividers:** Use thin, horizontal lines (0.5px or 1px) to separate sidebar sections or footer content.