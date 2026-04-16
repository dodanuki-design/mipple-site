import { useState, useEffect } from "react";

// ── Colors & Tokens ──
const C = {
  bg: "#FAFAF7", bgSoft: "#F2F0EB",
  card: "#FFFFFF",
  border: "#E8E4DC",
  black: "#1a1a1a", dark: "#333", mid: "#666", muted: "#999", light: "#bbb",
  coral: "#E8553D", coralSoft: "#FFF0ED",
  blue: "#2D5BFF", blueSoft: "#EEF2FF",
  yellow: "#F5C518", yellowSoft: "#FFF9E0",
  green: "#2A9D5C", greenSoft: "#E8F8EF",
  violet: "#7C5CFC", violetSoft: "#F0EDFF",
  pink: "#E84393",
  meta: "#1877F2", metaSoft: "#E7F0FF",
};
const font = "'Noto Sans JP', sans-serif";
const display = "'Space Grotesk', 'Noto Sans JP', sans-serif";
const logoGrad = { background: `linear-gradient(135deg, ${C.coral}, ${C.violet}, ${C.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };
const wrap = { maxWidth: 800, margin: "0 auto", padding: "0 24px", boxSizing: "border-box" };
const wrapN = { maxWidth: 600, margin: "0 auto", padding: "0 24px", boxSizing: "border-box" };

// ── Landing Page ──
function Landing({ onDemo }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setShow(true)); }, []);

  const handleSubmit = () => {
    if (!email || !role) return;
    // TODO: connect to backend (Supabase etc.)
    setSubmitted(true);
  };

  return (
    <div style={{ background: C.bg, fontFamily: font, minHeight: "100vh" }}>

      {/* ── Nav ── */}
      <nav style={{ ...wrap, maxWidth: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, fontFamily: display, margin: 0, ...logoGrad }}>mipple</h1>
        <button onClick={onDemo} style={{ padding: "8px 20px", fontSize: 12, fontWeight: 700, borderRadius: 20, cursor: "pointer", fontFamily: font, background: C.coral, color: "#fff", border: "none" }}>デモを体験</button>
      </nav>

      {/* ── Hero ── */}
      <section style={{ ...wrap, maxWidth: 1000, textAlign: "center", padding: "60px 24px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 240, height: 240, borderRadius: "50%", background: C.coralSoft, opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 180, height: 180, borderRadius: "50%", background: C.blueSoft, opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "40%", left: "8%", width: 70, height: 70, borderRadius: "50%", background: C.yellowSoft, opacity: 0.5 }} />

        <div style={{ opacity: show ? 1 : 0, transform: show ? "none" : "translateY(16px)", transition: "all 0.5s ease-out", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", padding: "5px 16px", background: C.coralSoft, borderRadius: 20, fontSize: 11, color: C.coral, fontWeight: 600, letterSpacing: 1.5, marginBottom: 20 }}>museum + ripple</div>
          <h2 style={{ fontSize: 44, fontWeight: 800, fontFamily: display, margin: "0 0 8px", letterSpacing: -1, lineHeight: 1.2, ...logoGrad }}>mipple</h2>
          <p style={{ fontSize: 14, color: C.mid, margin: "0 0 6px", letterSpacing: 2 }}>ミュージアムから、美のさざなみを。</p>
          <div style={{ width: 40, height: 3, background: C.coral, borderRadius: 2, margin: "12px auto 16px" }} />
          <p style={{ fontSize: 16, color: C.dark, margin: "0 auto 32px", maxWidth: 460, lineHeight: 1.8 }}>
            アート・文化施設とクリエイターをつなぐ<br />インフルエンサーマッチングプラットフォーム
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#register" style={{ padding: "14px 36px", fontSize: 14, fontWeight: 700, borderRadius: 50, background: C.coral, color: "#fff", textDecoration: "none", fontFamily: font, letterSpacing: 0.5 }}>事前登録する</a>
            <button onClick={onDemo} style={{ padding: "14px 36px", fontSize: 14, fontWeight: 700, borderRadius: 50, background: "transparent", color: C.coral, border: `2px solid ${C.coral}`, cursor: "pointer", fontFamily: font, letterSpacing: 0.5 }}>デモを体験 →</button>
          </div>
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section style={{ ...wrapN, padding: "48px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: "0 0 24px", fontFamily: display }}>こんな課題、ありませんか？</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { who: "施設側", icon: "🏛", problems: ["インフルエンサーの探し方がわからない", "フォロワー数の虚偽申告が心配", "効果測定に手間がかかりすぎる"] },
            { who: "クリエイター側", icon: "✦", problems: ["アート系の案件がなかなか見つからない", "展覧会に行きたいけど招待の機会がない", "自分に合った案件がわからない"] },
          ].map(s => (
            <div key={s.who} style={{ padding: "20px", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 16, textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.coral, marginBottom: 8 }}>{s.icon} {s.who}</div>
              {s.problems.map((p, i) => <div key={i} style={{ fontSize: 13, color: C.mid, lineHeight: 1.8, paddingLeft: 16, position: "relative" }}><span style={{ position: "absolute", left: 0 }}>•</span>{p}</div>)}
            </div>
          ))}
        </div>
        <div style={{ margin: "24px auto 0", fontSize: 28 }}>↓</div>
        <p style={{ fontSize: 16, fontWeight: 700, color: C.coral, marginTop: 8 }}>mipple がすべて解決します</p>
      </section>

      {/* ── How it works ── */}
      <section style={{ background: C.card, padding: "48px 0" }}>
        <div style={wrapN}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: "0 0 24px", fontFamily: display, textAlign: "center" }}>仕組み</h3>
          {[
            { n: "01", title: "施設が案件を掲載", desc: "展覧会の招待・有償案件をmippleに掲載。条件に合うクリエイターへ自動通知。", color: C.blue },
            { n: "02", title: "クリエイターが応募", desc: "興味のある展覧会に応募。Meta API認証済のフォロワー数・ERで審査がスムーズ。", color: C.coral },
            { n: "03", title: "来館 → 投稿 → 自動レポート", desc: "QRチェックインで来館確認。投稿はMeta APIで自動検知。効果レポートも自動生成。", color: C.violet },
          ].map((s, i) => (
            <div key={s.n} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `${s.color}11`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: s.color, flexShrink: 0, fontFamily: display }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 2 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ ...wrapN, padding: "48px 24px" }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: "0 0 24px", fontFamily: display, textAlign: "center" }}>mipple の強み</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { icon: "🔐", title: "Meta API認証", desc: "フォロワー数・ERを自動取得。虚偽申告ゼロ。" },
            { icon: "⚡", title: "投稿自動検知", desc: "投稿完了を自動判定。手動報告が不要に。" },
            { icon: "📊", title: "自動レポート", desc: "Reach・Likes・Savesを自動集計してPDF出力。" },
            { icon: "🤖", title: "スマートマッチ", desc: "ジャンル・ER・フォロワー層で最適な組み合わせを提案。" },
            { icon: "🎯", title: "プラン別アクセス", desc: "案件の質と報酬でクリエイターの本気度を担保。" },
            { icon: "📈", title: "施設SNS分析", desc: "施設自身のSNS成績を可視化。改善提案も。" },
          ].map(f => (
            <div key={f.title} style={{ padding: "16px", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14 }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{f.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.black, marginBottom: 2 }}>{f.title}</div>
              <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Plans overview ── */}
      <section style={{ background: C.card, padding: "48px 0" }}>
        <div style={wrapN}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: "0 0 8px", fontFamily: display, textAlign: "center" }}>料金プラン</h3>
          <p style={{ fontSize: 12, color: C.muted, textAlign: "center", margin: "0 0 20px" }}>クリエイター・施設それぞれにプランをご用意</p>

          <div style={{ fontSize: 13, fontWeight: 700, color: C.coral, marginBottom: 10 }}>✦ クリエイター向け</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto" }}>
            {[
              { name: "Free", price: "¥0", note: "無料招待のみ", color: C.dark },
              { name: "Pro", price: "¥1,980/月", note: "有償案件OK", color: C.coral },
              { name: "Elite", price: "¥5,980/月", note: "VIP案件+認定", color: C.violet },
            ].map(p => (
              <div key={p.name} style={{ flex: 1, minWidth: 0, padding: "14px 12px", background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: p.color, marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.black }}>{p.price}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{p.note}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, marginBottom: 10 }}>◆ 施設向け</div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
            {[
              { name: "Light", price: "¥38,000/月", note: "無料招待 月1件", color: C.blue },
              { name: "Standard", price: "¥58,000/月", note: "有償+自動レポート", color: C.coral },
              { name: "Premium", price: "¥98,000/月", note: "無制限+コンサル", color: C.violet },
            ].map(p => (
              <div key={p.name} style={{ flex: 1, minWidth: 0, padding: "14px 12px", background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: p.color, marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.black }}>{p.price}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pre-register ── */}
      <section id="register" style={{ ...wrapN, padding: "48px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: C.black, margin: "0 0 6px", fontFamily: display }}>事前登録</h3>
        <p style={{ fontSize: 12, color: C.muted, margin: "0 0 20px", lineHeight: 1.7 }}>サービス開始時に優先的にご案内します。<br />登録は無料、30秒で完了します。</p>

        {submitted ? (
          <div style={{ padding: "24px", background: C.greenSoft, border: `1.5px solid ${C.green}44`, borderRadius: 16 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.green, marginBottom: 4 }}>登録ありがとうございます！</div>
            <div style={{ fontSize: 12, color: C.mid }}>サービス開始時にご連絡いたします。</div>
          </div>
        ) : (
          <div style={{ maxWidth: 360, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, justifyContent: "center" }}>
              {[
                { k: "creator", l: "✦ クリエイター", c: C.coral, s: C.coralSoft },
                { k: "facility", l: "◆ 施設・主催者", c: C.blue, s: C.blueSoft },
              ].map(r => (
                <button key={r.k} onClick={() => setRole(r.k)} style={{
                  padding: "8px 16px", fontSize: 12, fontWeight: role === r.k ? 700 : 400, borderRadius: 20,
                  background: role === r.k ? r.c : "transparent", color: role === r.k ? "#fff" : C.mid,
                  border: `1.5px solid ${role === r.k ? r.c : C.border}`, cursor: "pointer", fontFamily: font,
                }}>{r.l}</button>
              ))}
            </div>
            <input placeholder="メールアドレス" type="email" value={email} onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "13px 16px", background: C.bgSoft, border: `1.5px solid ${C.border}`, borderRadius: 12, color: C.black, fontSize: 14, fontFamily: font, outline: "none", marginBottom: 10 }} />
            <button onClick={handleSubmit} disabled={!email || !role}
              style={{ width: "100%", padding: "14px", fontSize: 14, fontWeight: 700, borderRadius: 12, background: (!email || !role) ? C.bgSoft : C.coral, color: (!email || !role) ? C.light : "#fff", border: "none", cursor: (!email || !role) ? "default" : "pointer", fontFamily: font }}>
              事前登録する（無料）
            </button>
          </div>
        )}
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "32px 24px", borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h4 style={{ fontSize: 18, fontWeight: 800, fontFamily: display, margin: "0 0 4px", ...logoGrad }}>mipple</h4>
        <p style={{ fontSize: 10, color: C.light, margin: "0 0 6px", letterSpacing: 1 }}>ミュージアムから、美のさざなみを。</p>
        <p style={{ fontSize: 8, color: C.light, margin: 0, letterSpacing: 1.8, textTransform: "uppercase" }}>© 2025 Dodanuki Plannings Co., Ltd.</p>
      </footer>
    </div>
  );
}

// ── Main App (Landing ↔ Demo toggle) ──
export default function App() {
  const [view, setView] = useState("landing"); // "landing" | "demo"

  // Lazy-load demo component
  if (view === "demo") {
    return <DemoWrapper onBack={() => setView("landing")} />;
  }

  return <Landing onDemo={() => setView("demo")} />;
}

// ── Demo Wrapper (shows the prototype with a back-to-LP bar) ──
function DemoWrapper({ onBack }) {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: C.black, padding: "8px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, fontFamily: display }}>mipple デモ</span>
        <button onClick={onBack} style={{ padding: "5px 14px", fontSize: 10, fontWeight: 700, borderRadius: 20, background: C.coral, color: "#fff", border: "none", cursor: "pointer", fontFamily: font }}>← サイトに戻る</button>
      </div>
      <MippleDemo />
    </div>
  );
}

// ═══════════════════════════════════════════
// ── mipple Demo App (full prototype below) ─
// ═══════════════════════════════════════════

function MippleDemo() {
  // Re-export the full prototype as a component
  const [screen, setScreen] = useState("splash");
  const [authData, setAuthData] = useState(null);
  const [user, setUser] = useState(null);

  const reset = () => { setUser(null); setAuthData(null); setScreen("auth"); };
  const handleAuth = (data) => { setAuthData(data); setScreen(data.role === "influencer" ? "setup" : "fac"); };

  if (screen === "splash") return <DSplash onStart={() => setScreen("auth")} />;
  if (screen === "auth") return <DAuth onAuth={handleAuth} />;
  if (screen === "setup") return <DSetup authData={authData} onDone={f => { setUser(f); setScreen("dash"); }} onBack={() => setScreen("auth")} />;
  if (screen === "dash") return <DDash user={user || { name: "Guest", plan: "free", sns: {} }} onLogout={reset} />;
  if (screen === "fac") return <DFac authData={authData} onLogout={reset} />;
  return null;
}

// ── Demo: Shared Data ──
const DEVENTS = [
  { id: 1, title: "河鍋暁斎展", sub: "奇想の絵師", venue: "サントリー美術館", dates: "4/22–6/15", emoji: "🎨", benefit: "招待券2枚＋図録", cond: "フィード1件＋Stories2件", minF: 2500, cat: "日本美術", status: "open", slots: 15, applied: 8, tier: "free", desc: "幕末〜明治の鬼才・河鍋暁斎の全貌に迫る大規模回顧展。" },
  { id: 2, title: "ソットサス × 瀧口修造", sub: "交差する創造", venue: "アーティゾン美術館", dates: "5/10–8/3", emoji: "🏛", benefit: "招待券2枚＋プレスプレビュー", cond: "フィード1件 or Reels1本", minF: 5000, cat: "現代アート", status: "open", slots: 10, applied: 3, tier: "free", desc: "デザイナーと詩人、交差する創造の軌跡。" },
  { id: 3, title: "チ。─ 地球の運動について", sub: "没入型展覧会", venue: "東京シティビュー", dates: "4/10–6/8", emoji: "🌍", benefit: "招待券2枚＋限定グッズ", cond: "フィード1件＋Stories1件", minF: 2500, cat: "メディアアート", status: "open", slots: 20, applied: 14, tier: "free", desc: "漫画の世界観を展望台で体感。" },
  { id: 4, title: "VR豊臣大坂城", sub: "報酬¥15,000", venue: "NHKプロモーション", dates: "6/1–9/15", emoji: "⛩", benefit: "VR体験＋報酬¥15,000", cond: "Reels/TikTok 1本", minF: 5000, cat: "歴史", status: "open", slots: 8, applied: 2, tier: "paid", desc: "最新VR技術で蘇る大坂城。", reward: 15000 },
  { id: 5, title: "Tate YBA & BEYOND展", sub: "報酬¥30,000", venue: "ソニーミュージック", dates: "7月–10月", emoji: "🎭", benefit: "内覧会＋報酬¥30,000", cond: "フィード2件 or YouTube1本", minF: 10000, cat: "現代アート", status: "soon", slots: 6, applied: 0, tier: "paid", desc: "テート・モダンからYBAの軌跡。", reward: 30000 },
  { id: 6, title: "森美術館 VIPナイト", sub: "Elite限定", venue: "森美術館", dates: "5/28限定", emoji: "🌟", benefit: "VIP内覧＋報酬¥50,000", cond: "フィード2件＋Reels1本", minF: 20000, cat: "現代アート", status: "open", slots: 3, applied: 1, tier: "vip", desc: "Elite会員限定。森美術館VIPナイトへ特別ご招待。", reward: 50000 },
];

const IRULES = {
  free:  { label: "Free", color: C.mid, canPaid: false, canVIP: false, maxApply: 3 },
  pro:   { label: "Pro", color: C.coral, canPaid: true, canVIP: false, maxApply: 10 },
  elite: { label: "Elite", color: C.violet, canPaid: true, canVIP: true, maxApply: 999 },
};

// ── Demo: Shared UI ──
const dwrap = { maxWidth: 420, margin: "0 auto", padding: "0 20px", boxSizing: "border-box", width: "100%" };

function DBtn({ children, onClick, variant = "primary", disabled, full, style: s }) {
  const vars = { primary: { bg: C.coral, c: "#fff", b: "none" }, outline: { bg: "transparent", c: C.coral, b: `1.5px solid ${C.coral}` }, ghost: { bg: "transparent", c: C.mid, b: `1.5px solid ${C.border}` }, meta: { bg: C.meta, c: "#fff", b: "none" }, violet: { bg: C.violet, c: "#fff", b: "none" } };
  const v = vars[variant];
  return <button onClick={onClick} disabled={disabled} style={{ padding: "13px 24px", fontSize: 13, fontWeight: 700, borderRadius: 12, cursor: disabled ? "default" : "pointer", fontFamily: font, background: disabled ? C.bgSoft : v.bg, color: disabled ? C.light : v.c, border: disabled ? `1.5px solid ${C.border}` : v.b, width: full ? "100%" : "auto", transition: "all 0.2s", ...(s || {}) }}>{children}</button>;
}

function DBadge({ type }) {
  const m = { open: { bg: C.greenSoft, c: C.green, t: "募集中" }, paid: { bg: C.coralSoft, c: C.coral, t: "💰 有償" }, vip: { bg: "#FFF8E1", c: "#D4A017", t: "🌟 VIP" }, locked: { bg: C.bgSoft, c: C.muted, t: "🔒" }, soon: { bg: C.yellowSoft, c: "#B8960F", t: "近日公開" } };
  const v = m[type] || m.open;
  return <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 6, background: v.bg, color: v.c }}>{v.t}</span>;
}

function DBar({ cur, max }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: 4, background: C.bgSoft, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${Math.min((cur / max) * 100, 100)}%`, height: "100%", background: `linear-gradient(90deg, ${C.coral}, ${C.pink})`, borderRadius: 4 }} />
      </div>
      <span style={{ fontSize: 10, color: C.muted }}>{cur}/{max}</span>
    </div>
  );
}

// ── Demo: Splash ──
function DSplash({ onStart }) {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: font, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: C.coralSoft, opacity: 0.7 }} />
      <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: C.blueSoft, opacity: 0.7 }} />
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div style={{ display: "inline-block", padding: "5px 14px", background: C.coralSoft, borderRadius: 20, fontSize: 10, color: C.coral, fontWeight: 600, letterSpacing: 1.5, marginBottom: 16 }}>museum + ripple</div>
        <h1 style={{ fontSize: 52, fontWeight: 800, margin: "0 0 6px", fontFamily: display, ...logoGrad }}>mipple</h1>
        <p style={{ fontSize: 12, color: C.mid, margin: "0 0 40px", letterSpacing: 2 }}>ミュージアムから、美のさざなみを。</p>
        <DBtn onClick={onStart} style={{ padding: "14px 48px", borderRadius: 50 }}>はじめる →</DBtn>
      </div>
      <div style={{ position: "absolute", bottom: 20, fontSize: 8, color: C.light, letterSpacing: 1.8, textTransform: "uppercase" }}>Dodanuki Plannings Co., Ltd.</div>
    </div>
  );
}

// ── Demo: Auth (simplified) ──
function DAuth({ onAuth }) {
  const [role, setRole] = useState(null);
  if (!role) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "60px 0", fontFamily: font }}>
        <div style={{ ...dwrap, textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: display, margin: "0 0 6px", ...logoGrad }}>mipple</h1>
          <p style={{ fontSize: 13, color: C.muted }}>あなたはどちらですか？</p>
        </div>
        <div style={{ ...dwrap, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { key: "influencer", emoji: "✦", title: "クリエイター", sub: "展覧会を体験して発信する", color: C.coral, soft: C.coralSoft },
            { key: "facility", emoji: "◆", title: "施設 / 主催者", sub: "クリエイターに来館を依頼する", color: C.blue, soft: C.blueSoft },
          ].map(r => (
            <button key={r.key} onClick={() => setRole(r.key)} style={{ background: C.card, border: `2px solid ${C.border}`, borderRadius: 16, padding: "24px 20px", cursor: "pointer", textAlign: "left", fontFamily: font }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: r.soft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: r.color, fontWeight: 700 }}>{r.emoji}</div>
                <div><div style={{ fontSize: 16, fontWeight: 700, color: C.black }}>{r.title}</div><div style={{ fontSize: 12, color: C.mid }}>{r.sub}</div></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "100vh", background: C.bg, padding: "40px 0", fontFamily: font }}>
      <div style={dwrap}>
        <button onClick={() => setRole(null)} style={{ background: "none", border: "none", color: C.coral, cursor: "pointer", fontSize: 13, fontWeight: 600, padding: "8px 0", fontFamily: font }}>← 戻る</button>
        <div style={{ textAlign: "center", margin: "16px 0 24px" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: display, margin: "0 0 4px", ...logoGrad }}>mipple</h1>
          <p style={{ fontSize: 12, color: C.muted }}>{role === "influencer" ? "クリエイター" : "施設"}としてログイン</p>
        </div>
        <DBtn onClick={() => onAuth({ role, name: "Demo User", email: "demo@mipple.art", meta: null })} variant="meta" full style={{ marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>f</span> Facebookでログイン
        </DBtn>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 16px" }}>
          <div style={{ flex: 1, height: 1, background: C.border }} /><span style={{ fontSize: 10, color: C.muted }}>または</span><div style={{ flex: 1, height: 1, background: C.border }} />
        </div>
        <DBtn onClick={() => onAuth({ role, name: "Demo User", email: "demo@mipple.art", meta: null })} full>デモとして続ける →</DBtn>
      </div>
    </div>
  );
}

// ── Demo: Setup (plan select) ──
function DSetup({ authData, onDone, onBack }) {
  const [plan, setPlan] = useState("free");
  const plans = [
    { id: "free", name: "Free", price: "¥0", color: C.dark, note: "無料招待のみ" },
    { id: "pro", name: "Pro", price: "¥1,980/月", color: C.coral, note: "有償案件OK" },
    { id: "elite", name: "Elite", price: "¥5,980/月", color: C.violet, note: "VIP+認定" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: C.bg, padding: "20px 0 32px", fontFamily: font }}>
      <div style={dwrap}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.coral, cursor: "pointer", fontSize: 13, fontWeight: 600, padding: "8px 0", fontFamily: font }}>← 戻る</button>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: C.black, margin: "12px 0 6px" }}>プランを選択</h2>
        <p style={{ fontSize: 12, color: C.muted, margin: "0 0 16px" }}>プランで見える案件が変わります</p>
        {plans.map(p => (
          <button key={p.id} onClick={() => setPlan(p.id)} style={{ width: "100%", textAlign: "left", padding: "16px", marginBottom: 10, boxSizing: "border-box", background: plan === p.id ? `${p.color}11` : C.card, border: plan === p.id ? `2px solid ${p.color}` : `1.5px solid ${C.border}`, borderRadius: 14, cursor: "pointer", fontFamily: font }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: p.color }}>{p.name}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.black }}>{p.price}</span>
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>{p.note}</div>
          </button>
        ))}
        <div style={{ padding: "12px", background: C.yellowSoft, borderRadius: 12, marginBottom: 16 }}>
          <p style={{ fontSize: 10, color: C.dark, margin: 0, lineHeight: 1.7 }}>Free → 無料招待のみ ／ Pro → 有償案件が解放 ／ Elite → VIP限定案件も表示</p>
        </div>
        <DBtn onClick={() => onDone({ name: authData?.name || "Demo User", email: authData?.email || "", plan, sns: { instagram: { h: "@demo_art", f: 12400, verified: false } }, metaConnected: false })} full>この内容で始める →</DBtn>
      </div>
    </div>
  );
}

// ── Demo: Influencer Dashboard (plan-gated) ──
function DDash({ user, onLogout }) {
  const [cat, setCat] = useState("すべて");
  const [detail, setDetail] = useState(null);
  const [applied, setApplied] = useState([]);
  const [showUp, setShowUp] = useState(false);
  const rules = IRULES[user.plan] || IRULES.free;

  const visible = DEVENTS.filter(e => {
    if (e.tier === "free") return true;
    if (e.tier === "paid") return rules.canPaid;
    if (e.tier === "vip") return rules.canVIP;
    return true;
  }).filter(e => cat === "すべて" || e.cat === cat);

  const hidden = DEVENTS.filter(e => (e.tier === "paid" && !rules.canPaid) || (e.tier === "vip" && !rules.canVIP)).length;

  if (showUp) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "20px 0 32px", fontFamily: font }}>
        <div style={dwrap}>
          <button onClick={() => setShowUp(false)} style={{ background: "none", border: "none", color: C.coral, cursor: "pointer", fontSize: 13, fontWeight: 600, padding: "8px 0", fontFamily: font }}>← 戻る</button>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "12px 0 16px" }}>プランをアップグレード</h2>
          {[{ id: "pro", name: "Pro", price: "¥1,980/月", color: C.coral, note: "有償案件（¥5,000〜）に応募可能" }, { id: "elite", name: "Elite", price: "¥5,980/月", color: C.violet, note: "VIP案件＋認定バッジ＋応募無制限" }].map(p => (
            <div key={p.id} style={{ padding: "16px", background: `${p.color}11`, border: `2px solid ${p.color}`, borderRadius: 14, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontWeight: 800, color: p.color }}>{p.name}</span><span style={{ fontWeight: 700 }}>{p.price}</span></div>
              <div style={{ fontSize: 11, color: C.mid }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (detail) {
    const ev = detail;
    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "20px 0 32px", fontFamily: font }}>
        <div style={dwrap}>
          <button onClick={() => setDetail(null)} style={{ background: "none", border: "none", color: C.coral, cursor: "pointer", fontSize: 13, fontWeight: 600, padding: "8px 0", fontFamily: font }}>← 一覧へ</button>
          <div style={{ textAlign: "center", margin: "16px 0 20px" }}>
            <div style={{ fontSize: 56, marginBottom: 8 }}>{ev.emoji}</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 10 }}><DBadge type={ev.status} />{ev.tier !== "free" && <DBadge type={ev.tier} />}</div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.black, margin: "0 0 2px" }}>{ev.title}</h2>
            <div style={{ fontSize: 14, color: C.coral, fontWeight: 600, marginTop: 4 }}>{ev.venue}</div>
          </div>
          <div style={{ background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}>
            {[{ l: "特典", v: ev.benefit }, { l: "条件", v: ev.cond }, { l: "フォロワー", v: `${ev.minF.toLocaleString()}+` }].map((r, i) => (
              <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}><span style={{ fontSize: 11, color: C.muted }}>{r.l}</span><span style={{ fontSize: 12, fontWeight: 500 }}>{r.v}</span></div>
            ))}
          </div>
          <DBar cur={ev.applied} max={ev.slots} />
          <div style={{ marginTop: 16 }}>
            {applied.includes(ev.id) ? (
              <div style={{ padding: 14, textAlign: "center", background: C.greenSoft, borderRadius: 12, color: C.green, fontWeight: 700 }}>✓ 応募済み</div>
            ) : ev.status === "soon" ? (
              <div style={{ padding: 14, textAlign: "center", background: C.bgSoft, borderRadius: 12, color: C.muted }}>近日公開予定</div>
            ) : (
              <DBtn onClick={() => { setApplied(p => [...p, ev.id]); setDetail(null); }} full>この案件に応募する</DBtn>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      <div style={{ ...dwrap, paddingTop: 18, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, fontFamily: display, ...logoGrad }}>mipple</h1>
          <span style={{ padding: "2px 8px", borderRadius: 6, fontSize: 9, fontWeight: 800, background: `${rules.color}18`, color: rules.color }}>{rules.label}</span>
        </div>
        <DBtn onClick={onLogout} variant="ghost" style={{ padding: "5px 12px", fontSize: 10, borderRadius: 8 }}>ログアウト</DBtn>
      </div>

      <div style={{ ...dwrap, display: "flex", gap: 6, overflowX: "auto", paddingTop: 10, paddingBottom: 12, scrollbarWidth: "none" }}>
        {["すべて", "現代アート", "日本美術", "メディアアート", "歴史"].map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ padding: "6px 14px", fontSize: 11, fontWeight: cat === c ? 700 : 400, borderRadius: 20, background: cat === c ? C.coral : "transparent", border: `1.5px solid ${cat === c ? C.coral : C.border}`, color: cat === c ? "#fff" : C.mid, cursor: "pointer", fontFamily: font, whiteSpace: "nowrap" }}>{c}</button>
        ))}
      </div>

      <div style={{ ...dwrap, paddingBottom: 20 }}>
        {visible.map(ev => (
          <div key={ev.id} onClick={() => setDetail(ev)} style={{ padding: 16, background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, marginBottom: 10, cursor: "pointer" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bgSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{ev.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: C.black, margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ev.title}</h3>
                <span style={{ fontSize: 12, color: C.coral, fontWeight: 600 }}>{ev.venue}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", flexShrink: 0 }}>
                <DBadge type={ev.status} />
                {ev.tier !== "free" && <DBadge type={ev.tier} />}
              </div>
            </div>
            <DBar cur={ev.applied} max={ev.slots} />
            {applied.includes(ev.id) && <div style={{ marginTop: 6, fontSize: 10, color: C.green, fontWeight: 700 }}>✓ 応募済み</div>}
          </div>
        ))}
        {hidden > 0 && (
          <div onClick={() => setShowUp(true)} style={{ padding: 16, background: C.bgSoft, border: `2px dashed ${C.border}`, borderRadius: 14, textAlign: "center", cursor: "pointer" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>🔒</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>{hidden}件の案件がロック中</div>
            <div style={{ fontSize: 11, color: C.muted, marginBottom: 6 }}>{!rules.canPaid ? "Pro以上で有償案件が解放" : "Eliteで VIP案件が解放"}</div>
            <span style={{ fontSize: 11, color: C.coral, fontWeight: 700 }}>アップグレード →</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Demo: Facility (simplified) ──
function DFac({ authData, onLogout }) {
  const stats = [{ l: "掲載中", v: "3", c: C.coral }, { l: "応募", v: "25", c: C.blue }, { l: "来館", v: "12", c: C.green }, { l: "投稿", v: "8", c: C.violet }];
  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      <div style={{ ...dwrap, paddingTop: 18, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, fontFamily: display, ...logoGrad }}>mipple</h1>
        <DBtn onClick={onLogout} variant="ghost" style={{ padding: "5px 12px", fontSize: 10, borderRadius: 8 }}>ログアウト</DBtn>
      </div>
      <div style={{ ...dwrap, fontSize: 10, color: C.muted, marginBottom: 12 }}>施設管理ダッシュボード（デモ）</div>
      <div style={{ ...dwrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingBottom: 16 }}>
        {stats.map(s => (
          <div key={s.l} style={{ padding: 14, background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ ...dwrap }}>
        {DEVENTS.filter(e => e.status === "open").slice(0, 3).map(ev => (
          <div key={ev.id} style={{ padding: "14px 16px", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: C.bgSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{ev.emoji}</div>
              <div><div style={{ fontSize: 13, fontWeight: 700, color: C.black }}>{ev.title}</div><div style={{ fontSize: 10, color: C.muted }}>{ev.dates}</div></div>
            </div>
            <DBar cur={ev.applied} max={ev.slots} />
          </div>
        ))}
      </div>
    </div>
  );
}
