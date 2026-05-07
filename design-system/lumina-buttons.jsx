import { useState } from "react";

// ═══════════════════════════════════════════════════════════════
// BUTTON SYSTEM — Lumina DS v3
// Source: Figma nodes 2159:8752 (mobile) + 2159:8727 (desktop)
//         + 2159:9095 (extra-mob) + 2159:9101 (extra-desk)
//         + 2181:41817 (text-btns) + 2159:9157 (community-chat)
// ═══════════════════════════════════════════════════════════════

const T = {
  font: "'Acari Sans','DM Sans',system-ui,-apple-system,sans-serif",
  c: {
    pri:"#101828", priHover:"#1E2939", priText:"#FFFFFF",
    secBg:"#EDF2F7", secText:"#101828",
    dis:"#CBD5E0", disBg:"#E2E8F0", disText:"#A0AEC0",
    border:"#CBD5E0", borderSub:"#E2E8F0",
    focusRing:"#BDDAE8",
    text:"#171717", textSec:"#4A5568", textMuted:"#99A1AF",
    icon:"#6A7282",
    purple300:"#C098ED", purple50:"#F5F0FC",
    green300:"#61CD95", green50:"#E8F7EE",
    bgCard:"#FFFFFF", bgSoft:"#F5F5F5",
    glowPurple:"0px 4px 24px rgba(192,152,237,0.3)",
  },
  r: { btn:24, btnLg:32, pill:999, sm:12 },
  sh: { card:"0px 3px 50px -2px rgba(0,0,0,0.10)", subtle:"0 1px 3px rgba(0,0,0,0.04)", focus:`0 0 0 3px` },
};

const STATES = ["Default","Hover","Active","Disabled","Focus"];

export default function ButtonSystem() {
  const [view, setView] = useState("mobile");
  const isMob = view === "mobile";
  const W = isMob ? 280 : 350;
  const H = isMob ? 56 : 65;

  return (
    <div style={{ fontFamily:T.font, background:T.c.bgSoft, minHeight:"100vh", padding:"32px 24px", color:T.c.text, WebkitFontSmoothing:"antialiased" }}>
      <header style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:36 }}>
        <div>
          <h1 style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.3px", margin:"0 0 4px" }}>Button System</h1>
          <p style={{ fontSize:13, color:T.c.textMuted, margin:0 }}>7 types × 5 states × 2 breakpoints</p>
        </div>
        <div style={{ display:"flex", gap:4, background:T.c.bgCard, borderRadius:T.r.pill, padding:3, border:`1px solid ${T.c.borderSub}` }}>
          {["mobile","desktop"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{ all:"unset", cursor:"pointer", padding:"6px 14px", borderRadius:T.r.pill, fontSize:12, fontWeight:view===v?600:400, background:view===v?T.c.pri:"transparent", color:view===v?T.c.priText:T.c.textSec, transition:"150ms ease" }}>
              {v === "mobile" ? "Mobile 280×56" : "Desktop 350×65"}
            </button>
          ))}
        </div>
      </header>

      {/* ── 1. INPUT STYLE ── */}
      <BtnGroup title="01 — Input / Email Field" desc="Used on auth screens for email entry. Left icon, placeholder text, outlined style." W={W} H={H}>
        {STATES.map(s => (
          <BtnCard key={s} state={s} w={W} h={H}>
            <InputBtn state={s} w={W} h={H} />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 2. PRIMARY DARK ── */}
      <BtnGroup title="02 — Primary Dark" desc="Main CTA. Dark ink #101828, white text, 24px radius mobile / 32px desktop. Press: scale(0.98)." W={W} H={H}>
        {STATES.map(s => (
          <BtnCard key={s} state={s} w={W} h={H}>
            <PrimaryBtn state={s} w={W} h={H} label="Continue with Email" />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 3. GOOGLE ── */}
      <BtnGroup title="03 — Google Auth" desc="White bg, grey border, Google 'G' icon left. Same size as primary." W={W} H={H}>
        {STATES.map(s => (
          <BtnCard key={s} state={s} w={W} h={H}>
            <SocialBtn state={s} w={W} h={H} provider="google" />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 4. APPLE ── */}
      <BtnGroup title="04 — Apple Auth" desc="White bg, grey border, Apple icon left. Same structure as Google." W={W} H={H}>
        {STATES.map(s => (
          <BtnCard key={s} state={s} w={W} h={H}>
            <SocialBtn state={s} w={W} h={H} provider="apple" />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 5. EXTRA / INSTALL (banner-style) ── */}
      <BtnGroup title="05 — Install / Banner Button" desc={`Composite: text label left + dark pill CTA right. ${isMob ? "328×60px mob" : "192×52px desk"}. Has glow state.`} W={isMob ? 328 : 260} H={isMob ? 60 : 52}>
        {["Default","Glow","Active","Disabled","Focus"].map(s => (
          <BtnCard key={s} state={s} w={isMob ? 328 : 260} h={isMob ? 60 : 52}>
            <InstallBtn state={s} mob={isMob} />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 6. TEXT BUTTON ── */}
      <BtnGroup title="06 — Text Link Button" desc="Inline text action. No background. Purple underline on hover. Used for 'Terms', 'Resend code', etc." W={80} H={32}>
        {["Default","Hover","Focus","Active"].map(s => (
          <BtnCard key={s} state={s} w={80} h={32}>
            <TextBtn state={s} mob={isMob} />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── 7. COMMUNITY CHAT ── */}
      <BtnGroup title="07 — Community Chat Button" desc="Wide card-button with avatar stack, message count, chat icon. Two variants: with/without notification badge." W={327} H={88}>
        {["Default","With Badge"].map(s => (
          <BtnCard key={s} state={s} w={327} h={88}>
            <CommunityBtn badge={s === "With Badge"} />
          </BtnCard>
        ))}
      </BtnGroup>

      {/* ── ANATOMY ── */}
      <div style={{ marginTop:56 }}>
        <h2 style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.2px", marginBottom:16 }}>Specs & Anatomy</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14 }}>
          <Spec title="Sizing" items={[
            "Mobile: 280×56px (full-width in 327px content area)",
            "Desktop: 350×65px",
            "Install mob: 328×60px / desk: 192×52px",
            "Touch target: always ≥ 48px height",
          ]} />
          <Spec title="Radius" items={[
            "Primary/Social: 24px (mobile), 32px (desktop)",
            "Install pill: 999px (full pill)",
            "Inner CTA pill (Install): 20px",
            "Matches input radius for auth form consistency",
          ]} />
          <Spec title="Typography" items={[
            "Label: 14px/medium (mobile), 16px/medium (desktop)",
            "Install label: 14px/regular left, 13px/medium CTA",
            "Text button: 14px desk / 12px mob",
            "No uppercase. Sentence case throughout",
          ]} />
          <Spec title="Colors" items={[
            "Primary bg: #101828 → hover #1E2939",
            "Primary text: #FFFFFF",
            "Disabled: bg #E2E8F0, text #A0AEC0",
            "Social border: #CBD5E0 → hover #A0AEC0",
            "Focus ring: 0 0 0 3px #BDDAE8 (blue-grey)",
          ]} />
          <Spec title="Interactions" items={[
            "Hover: bg lightens (dark) or border darkens (outlined)",
            "Active/Press: scale(0.98) — gentle shrink, no color flash",
            "Focus: blue-grey ring, NOT outline",
            "Disabled: 50% opacity, no pointer, bg swap",
            "Glow (Install only): purple shadow aura",
          ]} />
          <Spec title="Icons" items={[
            "Google 'G': 16px, positioned 16px from left edge",
            "Apple '': 16px, same position",
            "Mail icon (input): 16px, #A0AEC0",
            "Download icon (install): 16px, #6A7282",
            "All icons vertically centered in button",
          ]} />
        </div>
      </div>
    </div>
  );
}

// ── LAYOUT HELPERS ──
function BtnGroup({ title, desc, children, W, H }) {
  return (
    <div style={{ marginBottom:40 }}>
      <h3 style={{ fontSize:14, fontWeight:700, marginBottom:2, letterSpacing:"-0.2px" }}>{title}</h3>
      <p style={{ fontSize:12, color:T.c.textMuted, marginBottom:14, maxWidth:600 }}>{desc}</p>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"flex-start" }}>
        {children}
      </div>
    </div>
  );
}

function BtnCard({ state, w, h, children }) {
  return (
    <div style={{ textAlign:"center" }}>
      <div style={{ width:w+20, minHeight:h+16, display:"flex", alignItems:"center", justifyContent:"center", background:T.c.bgCard, borderRadius:16, border:`1px solid ${T.c.borderSub}`, padding:"8px 10px" }}>
        {children}
      </div>
      <span style={{ fontSize:10, color:T.c.textMuted, marginTop:5, display:"block", fontWeight:500 }}>{state}</span>
    </div>
  );
}

function Spec({ title, items }) {
  return (
    <div style={{ background:T.c.bgCard, borderRadius:16, padding:"14px 16px", border:`1px solid ${T.c.borderSub}` }}>
      <h4 style={{ fontSize:11, fontWeight:600, color:T.c.textSec, textTransform:"uppercase", letterSpacing:0.5, marginBottom:8 }}>{title}</h4>
      {items.map((it, i) => (
        <p key={i} style={{ fontSize:11, color:T.c.textSec, margin:"0 0 3px", lineHeight:1.5, paddingLeft:8, position:"relative" }}>
          <span style={{ position:"absolute", left:0, color:T.c.disText }}>·</span>{it}
        </p>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// BUTTON COMPONENTS
// ═══════════════════════════════════════════════════════════════

function InputBtn({ state, w, h }) {
  const isDis = state === "Disabled";
  const isFocus = state === "Focus";
  const isHover = state === "Hover";
  const isActive = state === "Active";
  return (
    <div style={{
      width:w, height:h, borderRadius:T.r.btn,
      border: `1.5px solid ${isFocus ? T.c.pri : isActive ? T.c.pri : isHover ? T.c.border : T.c.borderSub}`,
      background: isDis ? T.c.disBg : T.c.bgCard,
      boxShadow: isFocus ? `${T.sh.focus} ${T.c.focusRing}` : "none",
      opacity: isDis ? 0.5 : 1,
      display:"flex", alignItems:"center", gap:10, padding:"0 16px",
      fontSize:14, color: isDis ? T.c.disText : T.c.textMuted,
      cursor: isDis ? "not-allowed" : "text",
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="13" height="10" rx="2" stroke={isDis ? T.c.disText : T.c.icon} strokeWidth="1.3"/><path d="M2 4L8 8.5L14 4" stroke={isDis ? T.c.disText : T.c.icon} strokeWidth="1.3"/></svg>
      Email address
    </div>
  );
}

function PrimaryBtn({ state, w, h, label }) {
  const isDis = state === "Disabled";
  const isFocus = state === "Focus";
  const isHover = state === "Hover";
  const isActive = state === "Active";
  return (
    <div style={{
      width:w, height:h, borderRadius:T.r.btn,
      background: isDis ? T.c.disBg : isHover ? T.c.priHover : T.c.pri,
      color: isDis ? T.c.disText : T.c.priText,
      boxShadow: isFocus ? `${T.sh.focus} ${T.c.focusRing}` : "none",
      transform: isActive ? "scale(0.98)" : "none",
      opacity: isDis ? 0.55 : 1,
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:14, fontWeight:500,
      cursor: isDis ? "not-allowed" : "pointer",
      transition:"all 150ms ease",
    }}>
      {label}
    </div>
  );
}

function SocialBtn({ state, w, h, provider }) {
  const isDis = state === "Disabled";
  const isFocus = state === "Focus";
  const isHover = state === "Hover";
  const isActive = state === "Active";

  const icon = provider === "google" ? (
    <svg width="16" height="16" viewBox="0 0 16 16"><path d="M15.68 8.18c0-.57-.05-1.12-.15-1.64H8v3.1h4.31a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.51-1.4 2.38-3.45 2.38-5.88Z" fill="#4285F4"/><path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2a5.07 5.07 0 0 1-7.55-2.66H.56v2.07A8 8 0 0 0 8 16Z" fill="#34A853"/><path d="M3.16 9.4a4.82 4.82 0 0 1 0-2.8V4.53H.56a8 8 0 0 0 0 6.94l2.6-2.07Z" fill="#FBBC05"/><path d="M8 3.18c1.22 0 2.31.42 3.17 1.24l2.37-2.37A7.97 7.97 0 0 0 .56 4.53l2.6 2.07A4.77 4.77 0 0 1 8 3.18Z" fill="#EA4335"/></svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={isDis ? T.c.disText : T.c.text}><path d="M11.18 1.33c.7.85 1.18 2.02 1.05 3.2-1.01.05-2.24-.6-2.97-1.45-.65-.76-1.22-1.98-1.07-3.15 1.1-.08 2.28.55 2.99 1.4ZM12.2 4.72c-1.38-.08-2.56.79-3.22.79-.66 0-1.67-.75-2.76-.73a4.08 4.08 0 0 0-3.46 2.1c-1.48 2.57-.38 6.37 1.06 8.46.7 1.03 1.55 2.17 2.66 2.13 1.07-.04 1.47-.7 2.76-.7 1.29 0 1.65.7 2.77.67 1.15-.02 1.87-1.04 2.57-2.07a9.2 9.2 0 0 0 1.17-2.4c-1.23-.47-2.12-1.82-2.12-3.4 0-1.34.72-2.51 1.79-3.2a3.93 3.93 0 0 0-3.22-1.65Z"/></svg>
  );

  return (
    <div style={{
      width:w, height:h, borderRadius:T.r.btn,
      border: `1.5px solid ${isDis ? T.c.borderSub : isHover ? T.c.border : T.c.borderSub}`,
      background: isActive ? T.c.secBg : T.c.bgCard,
      boxShadow: isFocus ? `${T.sh.focus} ${T.c.focusRing}` : T.sh.subtle,
      opacity: isDis ? 0.5 : 1,
      transform: isActive ? "scale(0.98)" : "none",
      display:"flex", alignItems:"center", justifyContent:"center", gap:10,
      fontSize:14, fontWeight:500, color: isDis ? T.c.disText : T.c.text,
      cursor: isDis ? "not-allowed" : "pointer",
      transition:"all 150ms ease",
    }}>
      {icon}
      Continue with {provider === "google" ? "Google" : "Apple"}
    </div>
  );
}

function InstallBtn({ state, mob }) {
  const isDis = state === "Disabled";
  const isFocus = state === "Focus";
  const isGlow = state === "Glow";
  const isActive = state === "Active";
  const w = mob ? 328 : 260;
  const h = mob ? 60 : 52;

  return (
    <div style={{
      width:w, height:h, borderRadius:T.r.pill,
      background: T.c.bgCard,
      border: `1px solid ${T.c.borderSub}`,
      boxShadow: isGlow ? T.c.glowPurple : isFocus ? `${T.sh.focus} ${T.c.focusRing}` : T.sh.subtle,
      opacity: isDis ? 0.5 : 1,
      transform: isActive ? "scale(0.98)" : "none",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding: mob ? "0 8px 0 20px" : "0 6px 0 16px",
      cursor: isDis ? "not-allowed" : "pointer",
      transition:"all 150ms ease",
    }}>
      <span style={{ fontSize:14, color: isDis ? T.c.disText : T.c.text, display:"flex", alignItems:"center", gap:8 }}>
        Install Lumina App
      </span>
      <div style={{
        padding: mob ? "10px 18px" : "8px 14px",
        borderRadius:20,
        background: isDis ? T.c.disBg : T.c.pri,
        color: isDis ? T.c.disText : T.c.priText,
        fontSize:13, fontWeight:500,
        display:"flex", alignItems:"center", gap:6,
      }}>
        Install
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2V10M7 10L4 7M7 10L10 7" stroke={isDis ? T.c.disText : "white"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H12" stroke={isDis ? T.c.disText : "white"} strokeWidth="1.3" strokeLinecap="round"/></svg>
      </div>
    </div>
  );
}

function TextBtn({ state, mob }) {
  const isFocus = state === "Focus";
  const isHover = state === "Hover";
  const isActive = state === "Active";
  return (
    <span style={{
      fontSize: mob ? 12 : 14,
      fontWeight: isActive ? 500 : 400,
      color: (isHover || isActive) ? T.c.purple300 : T.c.textSec,
      textDecoration: isHover ? "underline" : "none",
      textUnderlineOffset: 3,
      borderBottom: isFocus ? `2px solid ${T.c.focusRing}` : "none",
      paddingBottom: isFocus ? 2 : 0,
      cursor:"pointer",
      transition:"color 150ms ease",
    }}>
      Terms
    </span>
  );
}

function CommunityBtn({ badge }) {
  return (
    <div style={{
      width:327, height:88, borderRadius:T.r.btnLg,
      background:T.c.bgCard,
      border:`1px solid ${T.c.borderSub}`,
      boxShadow:T.sh.subtle,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"0 20px",
      cursor:"pointer",
    }}>
      <div>
        <p style={{ fontSize:15, fontWeight:700, marginBottom:4, letterSpacing:"-0.2px" }}>Community comments</p>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          {/* Avatar stack */}
          <div style={{ display:"flex" }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width:22, height:22, borderRadius:T.r.pill, background:["#E2E8F0","#DCEAF2","#EBE0F9"][i], border:`2px solid ${T.c.bgCard}`, marginLeft: i > 0 ? -6 : 0, zIndex:3-i }} />
            ))}
          </div>
          <span style={{ fontSize:12, color:T.c.green300, fontWeight:500 }}>1k+ new messages</span>
        </div>
      </div>
      {/* Chat icon with optional badge */}
      <div style={{ position:"relative" }}>
        <div style={{ width:40, height:40, borderRadius:T.r.pill, border:`1.5px solid ${T.c.borderSub}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h11A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5H6L2 16V3.5Z" stroke={T.c.icon} strokeWidth="1.3"/><line x1="5.5" y1="6" x2="12.5" y2="6" stroke={T.c.icon} strokeWidth="1" strokeLinecap="round"/><line x1="5.5" y1="9" x2="10" y2="9" stroke={T.c.icon} strokeWidth="1" strokeLinecap="round"/></svg>
        </div>
        {badge && (
          <div style={{ position:"absolute", top:-4, right:-4, width:18, height:18, borderRadius:T.r.pill, background:T.c.green300, border:`2px solid ${T.c.bgCard}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color:"white" }}>3</div>
        )}
      </div>
    </div>
  );
}
