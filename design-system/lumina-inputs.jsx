import { useState } from "react";

// ═══════════════════════════════════════════════════════════════
// INPUT COMPONENT SYSTEM — Lumina DS v3
// Source: Figma node 2181:41732 (15 variants)
// Size: 256×56px standard, 256×40px small, 256×114px textarea
// Radius: 8px (--radius-sm) → matches the pill-ish softness
// ═══════════════════════════════════════════════════════════════

const T = {
  font: "'Acari Sans','DM Sans',system-ui,-apple-system,sans-serif",
  c: {
    bg:"#FFFFFF", bgSoft:"#F5F5F5", bgDis:"#EDF2F7",
    text:"#171717", textSec:"#4A5568", textPh:"#99A1AF", textDis:"#A0AEC0",
    border:"#CBD5E0", borderSub:"#E2E8F0", borderHover:"#A0AEC0",
    borderFocus:"#101828", borderErr:"#EF4444", borderSucc:"#61CD95",
    errText:"#EF4444", succText:"#2EA55B", succBg:"#E8F7EE",
    helperText:"#99A1AF",
    icon:"#A0AEC0", iconActive:"#6A7282",
  },
  r: 24, // visually the inputs use ~24px radius (very rounded, almost pill)
  rSm: 16,
  shadow: { focus:"0 0 0 3px rgba(189,218,232,0.5)", err:"0 0 0 3px rgba(239,68,68,0.12)", succ:"0 0 0 3px rgba(97,205,149,0.2)" },
};

// ── SVG ICONS ──
const IconSearch = ({c=T.c.icon}) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke={c} strokeWidth="1.5"/><path d="M11 11L14 14" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IconMail = ({c=T.c.icon}) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="13" height="10" rx="2" stroke={c} strokeWidth="1.3"/><path d="M2 4L8 8.5L14 4" stroke={c} strokeWidth="1.3"/></svg>;
const IconLock = ({c=T.c.icon}) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="2" stroke={c} strokeWidth="1.3"/><path d="M5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7" stroke={c} strokeWidth="1.3"/></svg>;
const IconEye = ({c=T.c.icon}) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8C2.5 4.5 5 3 8 3C11 3 13.5 4.5 15 8C13.5 11.5 11 13 8 13C5 13 2.5 11.5 1 8Z" stroke={c} strokeWidth="1.3"/><circle cx="8" cy="8" r="2.5" stroke={c} strokeWidth="1.3"/></svg>;
const IconX = ({c=T.c.icon}) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3L11 11M11 3L3 11" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IconCheck = ({c=T.c.succText}) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconSpinner = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" style={{animation:"spin 0.8s linear infinite"}}>
    <circle cx="9" cy="9" r="7" fill="none" stroke="#E2E8F0" strokeWidth="2"/>
    <path d="M9 2A7 7 0 0 1 16 9" fill="none" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function InputSystem() {
  return (
    <div style={{ fontFamily:T.font, background:T.c.bgSoft, minHeight:"100vh", padding:"32px 24px", color:T.c.text, WebkitFontSmoothing:"antialiased" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      <header style={{ marginBottom:40 }}>
        <h1 style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.3px", marginBottom:4 }}>Input Components</h1>
        <p style={{ fontSize:13, color:T.c.textPh, margin:0 }}>15 variants · 256×56px standard · Figma node 2181:41732</p>
      </header>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:32, maxWidth:920 }}>

        {/* ── ROW 1: BASE STATES ── */}
        <InputDemo label="01 — Default" variant="default" />
        <InputDemo label="02 — Hover" variant="hover" />
        <InputDemo label="03 — Focused" variant="focused" />

        {/* ── ROW 2: VALUE STATES ── */}
        <InputDemo label="04 — Filled" variant="filled" />
        <InputDemo label="05 — Disabled" variant="disabled" />
        <InputDemo label="06 — With Clear" variant="clear" />

        {/* ── ROW 3: VALIDATION ── */}
        <InputDemo label="07 — Error" variant="error" />
        <InputDemo label="08 — Success" variant="success" />
        <InputDemo label="09 — Left Icon" variant="leftIcon" />

        {/* ── ROW 4: ICON COMBOS ── */}
        <InputDemo label="10 — Right Icon" variant="rightIcon" />
        <InputDemo label="11 — Both Icons" variant="bothIcons" />
        <InputDemo label="12 — Small Input" variant="small" />

        {/* ── ROW 5: EXTENDED ── */}
        <InputDemo label="13 — With Helper" variant="helper" />
        <InputDemo label="14 — Text Area" variant="textarea" />
        <InputDemo label="15 — Loading" variant="loading" />
      </div>

      {/* ── ANATOMY SECTION ── */}
      <div style={{ marginTop:56, maxWidth:920 }}>
        <h2 style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.2px", marginBottom:16 }}>Anatomy & Specs</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          <SpecCard title="Dimensions" items={[
            "Standard: 256×56px (desktop), full-width mobile",
            "Small: 256×40px (compact contexts)",
            "Textarea: 256×114px min-height, resizable",
          ]}/>
          <SpecCard title="Spacing" items={[
            "Padding: 16px horizontal, centered vertical",
            "Icon-to-text gap: 10px",
            "Helper/error text: 8px below, 4px left",
            "Label (if used): 6px above",
          ]}/>
          <SpecCard title="Typography" items={[
            "Value text: 14px/regular, #171717",
            "Placeholder: 14px/regular, #99A1AF",
            "Helper text: 12px/regular, #99A1AF",
            "Error text: 12px/regular, #EF4444",
            "Success text: 12px/regular, #2EA55B",
          ]}/>
          <SpecCard title="Borders & Radius" items={[
            "Default border: 1.5px solid #CBD5E0",
            "Hover: 1.5px solid #A0AEC0",
            "Focus: 1.5px solid #101828 + ring shadow",
            "Error: 1.5px solid #EF4444 + red ring",
            "Success: 1.5px solid #61CD95 + green ring",
            "Radius: 24px (near-pill, matching DS cards)",
          ]}/>
          <SpecCard title="Icons" items={[
            "Size: 16×16px, stroke-based",
            "Default color: #A0AEC0 (muted)",
            "Active/focus color: #6A7282",
            "Position: 16px from edge, vertically centered",
            "Clickable icons (clear, eye): 24×24px touch target",
          ]}/>
          <SpecCard title="States & Motion" items={[
            "Focus ring: 0 0 0 3px rgba(189,218,232,0.5)",
            "Error ring: 0 0 0 3px rgba(239,68,68,0.12)",
            "Border transition: 150ms ease",
            "Disabled: opacity 0.5, bg #EDF2F7, no pointer",
            "Loading: spinner replaces right icon, text muted",
          ]}/>
        </div>
      </div>
    </div>
  );
}

function SpecCard({ title, items }) {
  return (
    <div style={{ background:T.c.bg, borderRadius:16, padding:"16px 18px", border:`1px solid ${T.c.borderSub}` }}>
      <h4 style={{ fontSize:12, fontWeight:600, color:T.c.textSec, textTransform:"uppercase", letterSpacing:0.5, marginBottom:8 }}>{title}</h4>
      <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
        {items.map((item, i) => (
          <p key={i} style={{ fontSize:12, color:T.c.textSec, margin:0, lineHeight:1.5, paddingLeft:10, position:"relative" }}>
            <span style={{ position:"absolute", left:0, color:T.c.icon }}>·</span>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function InputDemo({ label, variant }) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const isInteractive = !["disabled","loading"].includes(variant);

  const config = {
    default:    { ph:"Enter text...", border:T.c.border },
    hover:      { ph:"Enter text...", border:T.c.borderHover },
    focused:    { ph:"", value:"Focused input", border:T.c.borderFocus, ring:T.shadow.focus },
    filled:     { ph:"", value:"hello@example.com", border:T.c.border },
    disabled:   { ph:"Disabled input", border:T.c.borderSub, bg:T.c.bgDis, color:T.c.textDis, disabled:true },
    clear:      { ph:"", value:"Clear me", border:T.c.border, rightIcon:<IconX/> },
    error:      { ph:"", value:"invalid@", border:T.c.borderErr, ring:T.shadow.err, msg:"Please enter a valid email", msgColor:T.c.errText },
    success:    { ph:"", value:"valid@example.com", border:T.c.borderSucc, ring:T.shadow.succ, msg:"Valid email", msgColor:T.c.succText, msgIcon:true },
    leftIcon:   { ph:"Email address", border:T.c.border, leftIcon:<IconMail/> },
    rightIcon:  { ph:"Search...", border:T.c.border, rightIcon:<IconSearch/> },
    bothIcons:  { ph:"Enter password", border:T.c.border, leftIcon:<IconLock/>, rightIcon:<IconEye/> },
    small:      { ph:"Small input", border:T.c.border, leftIcon:<IconMail/>, small:true },
    helper:     { ph:"", value:"your@email.com", border:T.c.border, helper:"We'll never share your email" },
    textarea:   { ph:"Your message...", border:T.c.border, textarea:true },
    loading:    { ph:"", value:"Processing...", border:T.c.border, color:T.c.textPh, rightIcon:<IconSpinner/>, disabled:true },
  }[variant];

  const height = config.small ? 40 : config.textarea ? 114 : 56;
  const currentBorder = focused && isInteractive ? T.c.borderFocus : config.border;
  const currentRing = focused && isInteractive ? T.shadow.focus : (config.ring || "none");

  const inputStyle = {
    width: 256,
    minHeight: height,
    borderRadius: config.small ? T.rSm : T.r,
    border: `1.5px solid ${currentBorder}`,
    background: config.bg || T.c.bg,
    boxShadow: currentRing,
    padding: `0 ${config.rightIcon ? 42 : 16}px 0 ${config.leftIcon ? 42 : 16}px`,
    display: "flex",
    alignItems: config.textarea ? "flex-start" : "center",
    position: "relative",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
    cursor: config.disabled ? "not-allowed" : "text",
    opacity: config.disabled && variant === "disabled" ? 0.55 : 1,
  };

  return (
    <div>
      <div style={{ fontSize:11, fontWeight:600, color:T.c.textSec, marginBottom:8, textTransform:"uppercase", letterSpacing:0.5 }}>{label}</div>

      <div style={inputStyle}
        onMouseDown={() => isInteractive && setFocused(true)}
        onBlur={() => setFocused(false)}
        tabIndex={isInteractive ? 0 : -1}
      >
        {/* Left icon */}
        {config.leftIcon && (
          <div style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", display:"flex", alignItems:"center" }}>
            {config.leftIcon}
          </div>
        )}

        {/* Value / Placeholder */}
        {config.textarea ? (
          <div style={{
            fontSize:14, color: config.value ? (config.color || T.c.text) : T.c.textPh,
            padding:"16px 0", lineHeight:1.5, width:"100%",
          }}>
            {config.value || config.ph}
          </div>
        ) : (
          <span style={{
            fontSize:14, fontWeight:400,
            color: config.value ? (config.color || T.c.text) : T.c.textPh,
            flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
          }}>
            {config.value || config.ph}
          </span>
        )}

        {/* Right icon */}
        {config.rightIcon && (
          <div style={{
            position:"absolute", right:14, top: config.textarea ? 16 : "50%",
            transform: config.textarea ? "none" : "translateY(-50%)",
            display:"flex", alignItems:"center",
            cursor: ["clear"].includes(variant) ? "pointer" : "default",
          }}>
            {config.rightIcon}
          </div>
        )}
      </div>

      {/* Helper / Error / Success text below */}
      {config.msg && (
        <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:6, paddingLeft:4 }}>
          {config.msgIcon && <IconCheck />}
          <span style={{ fontSize:12, color:config.msgColor }}>{config.msg}</span>
        </div>
      )}
      {config.helper && (
        <p style={{ fontSize:12, color:T.c.helperText, marginTop:6, paddingLeft:4 }}>{config.helper}</p>
      )}
    </div>
  );
}
