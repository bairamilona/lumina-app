import { useState } from "react";

// ═══════════════════════════════════════════════════════════════
// ICON SYSTEM — Lumina DS v3
// Source: Figma node 2159:9605 (52 icons, 24×24px, line style)
// + glass-icon variants (2159:8758, 2181:42487) at 48px
// Stroke: #6A7282, 1.5px weight, round caps/joins
// ═══════════════════════════════════════════════════════════════

const C = {
  icon: "#6A7282", iconMuted: "#A0AEC0", bg: "#F5F5F5", card: "#FFFFFF",
  border: "#E2E8F0", text: "#171717", textSec: "#4A5568", textMuted: "#99A1AF",
  dark: "#101828", purple300: "#C098ED",
  gradLumina: "linear-gradient(135deg,rgba(208,173,255,0.35),rgba(173,232,255,0.2) 61%,rgba(240,181,255,0.25))",
  gradGreen: "linear-gradient(135deg,rgba(97,205,149,0.4),rgba(208,176,241,0.2))",
  gradBlue: "linear-gradient(135deg,rgba(90,191,246,0.2),rgba(224,194,255,0.2))",
  gradWhite: "linear-gradient(135deg,rgba(235,235,235,0.45),rgba(220,220,220,0.25))",
  gradHolo: "linear-gradient(135deg,rgba(255,255,255,0.38),rgba(137,255,182,0.1) 40%,rgba(165,163,255,0.03))",
};

// ── ALL 52 ICON SVGs ───────────────────────────────────────────
// Traced from Figma screenshots. 24×24 viewBox, stroke-based.

const icons = {
  // Row 1: Navigation & System
  home: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"/><path d="M9 21V14h6v7"/></svg>,
  persona: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/></svg>,
  aiface: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1" fill={c}/><circle cx="15" cy="10" r="1" fill={c}/><path d="M9 15c.8 1 2 1.5 3 1.5s2.2-.5 3-1.5"/><circle cx="18" cy="5" r="1.5" fill={c} stroke="none"/><circle cx="20" cy="8" r="1" fill={c} stroke="none"/><circle cx="19.5" cy="2.5" r="0.8" fill={c} stroke="none"/></svg>,
  club: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3.5"/><path d="M5 20c0-3 3.1-5.5 7-5.5s7 2.5 7 5.5"/><circle cx="18" cy="10" r="2.5"/><path d="M22 19c0-1.7-1.6-3-3.5-3"/></svg>,
  calendar2: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="5"/><line x1="16" y1="2" x2="16" y2="5"/></svg>,
  settings: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  notification: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  camera: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  search: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>,

  // Row 2: Social & Navigation Arrows
  heart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  prize: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h8v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V3z"/><line x1="6" y1="3" x2="18" y2="3"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9" y1="17" x2="15" y2="17"/><path d="M6 5C4.5 5.5 3 7 3 9s1.5 3 3 3"/><path d="M18 5c1.5.5 3 2 3 4s-1.5 3-3 3"/></svg>,
  star: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
  "arrow-right": (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
  "arrow-left": (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>,
  "arrow-up": (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>,
  "arrow-down": (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19,12 12,19 5,12"/></svg>,
  arrow2: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,6 15,12 9,18"/></svg>,
  check: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4,12 9,17 20,6"/></svg>,

  // Row 3: Actions
  x: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>,
  info: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
  upload: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16,6 12,2 8,6"/><line x1="12" y1="2" x2="12" y2="16"/><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/></svg>,
  mail: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>,
  play: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="6,3 20,12 6,21"/></svg>,
  pause: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>,
  eye: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  hide: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 19c-7 0-11-7-11-7a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 7 11 7a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  lock: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,

  // Row 4: Feature & Content
  flash: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>,
  crown: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17L4 7l5 4 3-6 3 6 5-4 2 10H2z"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  sync: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1,4 1,10 7,10"/><polyline points="23,20 23,14 17,14"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10"/><path d="M3.51 15A9 9 0 0018.36 18.36L23 14"/></svg>,
  target: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>,
  compare3: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="8" height="18" rx="2"/><rect x="14" y="3" width="8" height="18" rx="2"/><path d="M6 12h4M14 8h4M14 16h4"/></svg>,
  compare: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="7"/><circle cx="15" cy="12" r="7"/></svg>,
  player: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polygon points="10,8 16,12 10,16"/></svg>,
  calendar: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="5"/><line x1="16" y1="2" x2="16" y2="5"/><rect x="7" y="12" width="3" height="3" rx="0.5"/></svg>,
  book: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>,

  // Row 5: UI Controls
  open: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  full: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,3 21,3 21,9"/><polyline points="9,21 3,21 3,15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>,
  more2: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><circle cx="12" cy="5" r="1.5" fill={c}/><circle cx="12" cy="12" r="1.5" fill={c}/><circle cx="12" cy="19" r="1.5" fill={c}/></svg>,
  plus1: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  plus2: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  whats: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  appstore: (c) => <svg viewBox="0 0 24 24" fill={c} stroke="none"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.16 4.61-3.74 4.25z"/></svg>,
  chat: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.5A1.5 1.5 0 014.5 4h15A1.5 1.5 0 0121 5.5v10a1.5 1.5 0 01-1.5 1.5H8L3 21V5.5z"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="13" y2="13"/></svg>,
  finger: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v9M8 7l4 4 4-4"/><path d="M7 13h10v3c0 2.2-1.8 4-4 4h-2c-2.2 0-4-1.8-4-4v-3z"/></svg>,

  // Row 6: Brand & Edit
  google: (c) => <svg viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.99 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
  zoom: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>,
  edit: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>,
  save: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17,21 17,13 7,13 7,21"/><polyline points="7,3 7,8 15,8"/></svg>,
  delete: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
  link: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  "add-photo": (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
};

const categories = [
  { name: "Navigation & System", keys: ["home","persona","aiface","club","calendar2","settings","notification","camera","search"] },
  { name: "Social & Arrows", keys: ["heart","prize","star","arrow-right","arrow-left","arrow-up","arrow-down","arrow2","check"] },
  { name: "Actions", keys: ["x","info","upload","mail","play","pause","eye","hide","lock"] },
  { name: "Feature & Content", keys: ["flash","crown","sync","target","compare3","compare","player","calendar","book"] },
  { name: "UI Controls", keys: ["open","full","more2","plus1","plus2","whats","appstore","chat","finger"] },
  { name: "Brand & Edit", keys: ["google","zoom","edit","save","delete","link","add-photo"] },
];

export default function IconSystem() {
  const [color, setColor] = useState(C.icon);
  const [size, setSize] = useState(24);
  const [bubble, setBubble] = useState(null);

  return (
    <div style={{ fontFamily: "'Acari Sans','DM Sans',system-ui,sans-serif", background: C.bg, minHeight: "100vh", padding: "32px 24px", color: C.text, WebkitFontSmoothing: "antialiased" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", margin: "0 0 4px" }}>Icon System</h1>
        <p style={{ fontSize: 13, color: C.textMuted, margin: "0 0 16px" }}>52 icons · 24×24px · Stroke-based · #6A7282</p>

        {/* Controls */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 4, background: C.card, borderRadius: 999, padding: 3, border: `1px solid ${C.border}` }}>
            {[{l:"Default",v:C.icon},{l:"Muted",v:C.iconMuted},{l:"Dark",v:C.dark},{l:"White",v:"#FFFFFF"}].map(o => (
              <button key={o.l} onClick={() => setColor(o.v)} style={{ all: "unset", cursor: "pointer", padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: color===o.v ? 600 : 400, background: color===o.v ? (o.v==="#FFFFFF" ? C.dark : o.v) : "transparent", color: color===o.v ? (o.v==="#FFFFFF" ? "#FFF" : "#FFF") : C.textSec }}>{o.l}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 4, background: C.card, borderRadius: 999, padding: 3, border: `1px solid ${C.border}` }}>
            {[{l:"24px",v:24},{l:"20px",v:20},{l:"16px",v:16}].map(o => (
              <button key={o.l} onClick={() => setSize(o.v)} style={{ all: "unset", cursor: "pointer", padding: "5px 10px", borderRadius: 999, fontSize: 11, fontWeight: size===o.v ? 600 : 400, background: size===o.v ? C.dark : "transparent", color: size===o.v ? "#FFF" : C.textSec }}>{o.l}</button>
            ))}
          </div>
        </div>
      </header>

      {/* Icon Grid by Category */}
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 12, fontWeight: 600, color: C.textSec, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 10 }}>{cat.name}</h3>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {cat.keys.map(key => {
              const IconFn = icons[key];
              if (!IconFn) return null;
              return (
                <div key={key}
                  onClick={() => setBubble(bubble === key ? null : key)}
                  style={{
                    width: 64, height: 64, borderRadius: 12,
                    background: color === "#FFFFFF" ? C.dark : C.card,
                    border: `1px solid ${color === "#FFFFFF" ? "transparent" : C.border}`,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3,
                    cursor: "pointer", transition: "all 150ms ease",
                    boxShadow: bubble === key ? `0 0 0 2px ${C.purple300}` : "none",
                  }}>
                  <div style={{ width: size, height: size }}>{IconFn(color)}</div>
                  <span style={{ fontSize: 8, color: color === "#FFFFFF" ? "rgba(255,255,255,0.5)" : C.textMuted, textAlign: "center", lineHeight: 1.1, maxWidth: 56, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{key}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Glass Bubble Preview */}
      <div style={{ marginTop: 16, marginBottom: 40 }}>
        <h3 style={{ fontSize: 12, fontWeight: 600, color: C.textSec, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 10 }}>Glass Bubble Variants (48px)</h3>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { n: "White", bg: C.gradWhite },
            { n: "Blue", bg: C.gradBlue },
            { n: "Green", bg: C.gradGreen },
            { n: "Lumina", bg: C.gradLumina },
            { n: "Holo", bg: C.gradHolo },
          ].map(v => (
            <div key={v.n} style={{ textAlign: "center" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 999,
                background: v.bg,
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ width: 22, height: 22 }}>
                  {icons[bubble || "home"](C.icon)}
                </div>
              </div>
              <span style={{ fontSize: 9, color: C.textMuted, marginTop: 4, display: "block" }}>{v.n}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: C.textMuted, marginTop: 8 }}>Click any icon above to preview it inside bubbles. Currently showing: <strong>{bubble || "home"}</strong></p>
      </div>

      {/* Specs */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.2px", marginBottom: 14 }}>Icon Specs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { t: "Format", items: ["Inline SVG — no icon font, no sprites", "viewBox: 0 0 24 24", "All paths/shapes use stroke, not fill (except brand logos)", "Stroke: 1.5px, round linecap, round linejoin"] },
            { t: "Colors", items: ["Default: #6A7282 (on light bg)", "Muted: #A0AEC0 (secondary contexts)", "On dark: #FFFFFF", "Active/success: use semantic color, not icon default", "Never apply opacity to icons — change stroke color instead"] },
            { t: "Sizing", items: ["Standard: 24×24px", "Compact: 20×20px (inside small inputs)", "Mini: 16×16px (inside tags, badges)", "Glass bubble container: 48×48px", "Touch target: always pad to 44px minimum"] },
            { t: "Glass Bubbles", items: ["Container: 48px, border-radius: 999px", "5 gradient variants: white, blue, green, lumina, holo", "Border: 1px solid rgba(255,255,255,0.3)", "Shadow: 0 2px 8px rgba(0,0,0,0.06)", "Icon inside: 22px, centered, default stroke color"] },
            { t: "Usage Rules", items: ["No emoji in any UI — always use these icons", "Icons are decorative supports, never the sole communicator", "Pair with text labels on first encounter", "Bottom nav: icons only (3 items max)", "Always provide alt text for accessibility"] },
            { t: "Categories (52 total)", items: ["Navigation & System: 9", "Social & Arrows: 9", "Actions: 9", "Feature & Content: 9", "UI Controls: 9", "Brand & Edit: 7"] },
          ].map(s => (
            <div key={s.t} style={{ background: C.card, borderRadius: 16, padding: "14px 16px", border: `1px solid ${C.border}` }}>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: C.textSec, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>{s.t}</h4>
              {s.items.map((it, i) => <p key={i} style={{ fontSize: 11, color: C.textSec, margin: "0 0 2px", lineHeight: 1.5, paddingLeft: 8, position: "relative" }}><span style={{ position: "absolute", left: 0, color: C.iconMuted }}>·</span>{it}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
