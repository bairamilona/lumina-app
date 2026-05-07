# Lumina Club — Project Archive

## Structure

```
lumina-archive/
├── wireframes/
│   ├── index.html              ← Current live wireframe (deployed to Vercel)
│   └── v7-oura-style-dashboard.html  ← Earlier v7 Oura-style concept
│
├── design-system/
│   ├── lumina-inputs.jsx       ← 15 input variants (Figma node 2181:41732)
│   ├── lumina-buttons.jsx      ← 7 button types × 5 states
│   └── lumina-icons.jsx        ← 52 icons interactive reference
│
├── icons/
│   ├── nav-fab/                ← Bottom nav + AI FAB icons (Figma export)
│   │   ├── Vector.svg          → Score nav (overlapping rectangles)
│   │   ├── Union.svg           → Challenge nav (trophy)
│   │   ├── Vector_(Stroke).svg → Library nav (target/crosshair)
│   │   ├── Vector_6058-5621.svg → AI Face Scan
│   │   ├── Vector_6058-5622.svg → AI Ingredients Scan
│   │   └── Vector_6058-5623.svg → AI Food Scan
│   │
│   ├── ds-icons-svg/           ← 52 design system icons (Figma export)
│   │   └── Property_1=*.svg    ← Named by Figma component property
│   │
│   └── context-widgets/        ← Cycle/Activity/Sleep/Stress icons
│       ├── cycle.svg
│       ├── activity.svg
│       ├── sleeping.svg
│       └── stress.svg
│
├── images/
│   ├── krea-generated/         ← 18 AI-generated images (Krea)
│   │   ├── lymphatic-drainage.png
│   │   ├── morning-ritual.png
│   │   ├── neck-stretch.png
│   │   ├── cheekbone-lift.png
│   │   ├── forehead-smoothing.png
│   │   ├── buccal-massage.png
│   │   ├── jawline-sculpt.png
│   │   ├── 7day-jawline.png
│   │   ├── 7day-maxilla.png
│   │   ├── 7day-lymphatic.png
│   │   ├── morning-wakeup.png
│   │   ├── pre-event.png
│   │   ├── post-flight.png
│   │   ├── post-party.png
│   │   ├── post-workout.png
│   │   ├── pre-photoshoot.png
│   │   ├── headache-ease.png
│   │   └── sinus-clear.png
│   │
│   └── reference/              ← Reference screenshots
│       ├── oura-reference.jpg
│       ├── lumina-v7-dashboard.jpg
│       └── apple-food-scan.png
│
└── docs/
    └── README.md               ← This file
```

## Live Demo
https://lumina-demo-seven.vercel.app

## Vercel Deploy
Token name: full account access
Project: lumina-demo
User: bairamilona

## Key Design Decisions
- BG Echo: blur(6px), opacity 0.6 — barely blurred, recognizable image
- Score ring: ultra-thin engraved line (1.5px) with micro shadows
- Typography: gigantism trend 2026 — Score=72px/800, Day=52px/800
- Glass surfaces: rgba(255,255,255,0.45) + backdrop-filter:blur(12px)
- FAB: text "AI", sub-buttons dark bg with colored icons (face=#F2A0B0, food=#F0D678, ingr=#8BB8E0)
- Nav order: Score (target icon) | Challenge (trophy) | Library (rectangles)
- No emoji anywhere — SVG icons only

## Figma Source
https://www.figma.com/design/l1MNJ78dTJFlIqRzyDQLUN/LUMINA-draft--Copy-
