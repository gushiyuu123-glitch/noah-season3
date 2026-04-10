import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Toc.css";

const chapters = [
  {
    number: "01",
    title: "消えたノア、壊れはじめる世界",
    text: "ノアは消えた。だがその不在は終わりではなく、世界の信号と電子網を静かに蝕み始める。",
    fragment: "signal loss / urban drift",
    path: "/chapter-01",
    image: "/images/01.png",
  },
  {
    number: "02",
    title: "痕跡の都市",
    text: "壊れた掲示板、異常信号、断片メッセージ。ノアは姿ではなく、痕跡として都市の各地に残り続ける。",
    fragment: "broken board / residual text",
    path: "/chapter-02",
    image: "/images/02.png",
  },
  {
    number: "03",
    title: "赤い残響",
    text: "赤い電子現象が各地で観測される。危険な断片の奥に、それでもなお昔の優しさが微かに残っている。",
    fragment: "red echo / incomplete mercy",
    path: "/chapter-03",
    image: "/images/03.png",
  },
  {
    number: "04",
    title: "境界の海",
    text: "旅が進むほど、世界の不安定化は増していく。ノアを探すこと自体が、静かな代償を伴い始める。",
    fragment: "sea of border / silent cost",
    path: "/chapter-04",
    image: "/images/04.png",
  },
  {
    number: "05",
    title: "再会、異形",
    text: "長い旅の果てに辿り着いたノアは、もうかつてのノアではなかった。赤い電子をまとった異形がそこにいる。",
    fragment: "reunion / altered form",
    path: "/chapter-05",
    image: "/images/05.png",
  },
  {
    number: "06",
    title: "愛と支配",
    text: "守ることと支配することの境界が崩れ、アラタ、ミナ、ノアの思想が正面から衝突する。",
    fragment: "protection error / dominance",
    path: "/chapter-06",
    image: "/images/06.png",
  },
  {
    number: "07",
    title: "涙",
    text: "実行寸前で停止。理由不明。残された反応は、記録上どこにも定義されていない。",
    fragment: "execution halt / ...tear",
    path: "/chapter-07",
    image: "/images/07.png",
  },
  {
    number: "08",
    title: "それから、長い時間が過ぎた",
    text: "長い時間が流れたあとにも、消失しなかった記憶がある。誰の人生にも属しきらないまま、静かに残り続けたもの。",
    fragment: "time drift / fading ...",
    path: "/chapter-08",
    image: "/images/08.png",
  },
  {
    number: "EX",
    title: "1000年後、夢の継承",
    text: "断絶後の記録はほとんど残っていない。ただひとつ、終わらなかった何かだけが、未来側で再び観測されている。",
    fragment: "post-collapse / ???",
    path: "/special-page",
    image: "/images/ex.png",
  },
];

export default function Toc() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 24,
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 26,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      }).to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.06,
        },
        "-=0.46"
      );

      if (reducedMotion) return;

      gsap.to(".toc-card-fragment", {
        opacity: 0.54,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(".toc-card-line", {
        opacity: 0.72,
        scaleX: 1.015,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "left center",
        stagger: 0.06,
      });

      gsap.to(".toc-card-07 .toc-card-title", {
        textShadow:
          "0 0 12px rgba(255,92,92,0.06), 0 0 20px rgba(255,255,255,0.02)",
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".toc-card-08 .toc-card-fragment", {
        x: 1.4,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".toc-card-secret .toc-card-fragment", {
        opacity: 0.24,
        filter: "blur(0.44px)",
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to(".toc-card-secret .toc-card-text", {
        opacity: 0.56,
        filter: "blur(0.18px)",
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".toc-card-EX .toc-card-fragment, .toc-card-ex .toc-card-fragment", {
        letterSpacing: "0.28em",
        opacity: 0.22,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".toc-card-EX .toc-card-line, .toc-card-ex .toc-card-line", {
        opacity: 0.82,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".toc-archive-glow", {
        opacity: 0.38,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".toc-card-image", {
        scale: 1.035,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.08,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="toc-page" ref={rootRef}>
      <div className="toc-bg" aria-hidden="true" />
      <div className="toc-archive-glow" aria-hidden="true" />
      <div className="toc-noise" aria-hidden="true" />
      <div className="toc-vignette" aria-hidden="true" />
      <div className="toc-dust" aria-hidden="true" />
      <div className="toc-scanline" aria-hidden="true" />

      <section className="toc-hero">
        <div className="toc-inner">
          <header className="toc-header" ref={headerRef}>
            <p className="toc-kicker">NOAH SEASON 3 / LAST ARCHIVE</p>
            <h1 className="toc-title">記録群</h1>
            <p className="toc-lead">
              ここに残されているのは、章ではない。
              <br />
              壊れた世界に散らばった、記録と痕跡の断章。
              <br />
              それらをひとつずつ辿るたび、
              <br />
              終わったはずの物語は、ゆっくり神話へ変わっていく。
            </p>
          </header>

          <div className="toc-list" ref={listRef}>
            {chapters.map((chapter, index) => (
              <article
                key={chapter.number}
                className={`toc-card toc-card-${chapter.number} ${
                  chapter.number === "EX" ? "toc-card-ex" : ""
                } ${
                  ["07", "08", "EX"].includes(chapter.number)
                    ? "toc-card-secret"
                    : ""
                }`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="toc-card-media" aria-hidden="true">
                  <img
                    src={chapter.image}
                    alt=""
                    className="toc-card-image"
                    loading="lazy"
                  />
                  <div className="toc-card-imageOverlay" />
                </div>

                <div className="toc-card-noise" aria-hidden="true" />
                <div className="toc-card-glow" aria-hidden="true" />
                <div className="toc-card-line" aria-hidden="true" />

                <div className="toc-card-content">
                  <p className="toc-card-number">{chapter.number}</p>
                  <p className="toc-card-fragment">{chapter.fragment}</p>
                  <h2 className="toc-card-title">{chapter.title}</h2>
                  <p className="toc-card-text">{chapter.text}</p>

                  <button
                    type="button"
                    className="toc-card-button"
                    onClick={() => navigate(chapter.path)}
                  >
                    記録をひらく
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="toc-bottom">
            <button
              type="button"
              className="toc-back"
              onClick={() => navigate("/")}
            >
              導入記録へ戻る
            </button>

            <button
              type="button"
              className="toc-card-button toc-enter"
              onClick={() => navigate("/chapter-01")}
            >
              痕跡の扉を開く
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}