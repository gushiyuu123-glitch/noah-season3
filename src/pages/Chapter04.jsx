import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter04.css";

const seaSignals = [
  "BOUNDARY FIELD / UNSTABLE",
  "COASTAL RELAY / DELAYED RESPONSE",
  "WAVE NOISE / NON-NATURAL PATTERN",
  "TRACE DENSITY / INCREASING",
  "FINAL POINT / NOT FAR",
];

export default function Chapter04() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const fragmentRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter04";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, fragmentRef.current, navRef.current], {
        opacity: 0,
        y: 22,
      });

      gsap.set(".chapter04-readInner", {
        opacity: 0,
        y: 18,
        filter: "blur(1.5px)",
        clipPath: "inset(0 0 100% 0)",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.02,
      })
        .to(
          fragmentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.84,
          },
          "-=0.28"
        )
        .to(
          navRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.22"
        );

      if (reducedMotion) return;

      gsap.to(".chapter04-pulse", {
        scale: 1.04,
        opacity: 0.22,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter04-image", {
        scale: 1.03,
        duration: 10.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter04-wave", {
        xPercent: 3,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter04-signalLine", {
        opacity: 0.52,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.14,
      });

      gsap.to(scanRef.current, {
        opacity: 0.1,
        duration: 4.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    const handleMove = (e) => {
      if (!imageWrapRef.current || reducedMotion) return;

      const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 7;

      gsap.to(imageWrapRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 2.1,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const inner = entry.target.querySelector(".chapter04-readInner");
          if (!inner) return;

          gsap.to(inner, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration: 1.04,
            ease: "power3.out",
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const blocks = document.querySelectorAll(".chapter04-readBlock");
    blocks.forEach((block) => observer.observe(block));

    window.addEventListener("mousemove", handleMove);

    return () => {
      ctx.revert();
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
      delete document.body.dataset.chapter;
    };
  }, []);

  return (
    <main className="chapter04-page" ref={rootRef}>
      <div className="chapter04-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img src="/images/0443.png" alt="" className="chapter04-image" />
        <div className="chapter04-imageOverlay" />
      </div>

      <div className="chapter04-bg" aria-hidden="true" />
      <div className="chapter04-noise" aria-hidden="true" />
      <div className="chapter04-vignette" aria-hidden="true" />
      <div className="chapter04-pulse" aria-hidden="true" />
      <div className="chapter04-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter04-wave" aria-hidden="true" />

      <section className="chapter04-shell">
        <header className="chapter04-hero" ref={heroRef}>
          <p className="chapter04-kicker">CHAPTER 04 / BOUNDARY SEA</p>
          <h1 className="chapter04-title">境界の海</h1>
          <p className="chapter04-lead">
            追うほどに、世界の輪郭は曖昧になっていく。
            <br />
            ノアへ近づくこと自体が、すでに代償になりはじめていた。
          </p>
        </header>

        <div className="chapter04-prose">
          <p className="chapter04-paragraph chapter04-readBlock">
            <span className="chapter04-readInner">
              都市を離れるにつれて、
              <br />
              異常は減るどころか質を変えていった。
              <br />
              目に見える故障は、むしろ少なくなる。
              <br />
              その代わり世界そのものが、
              わずかに位相をずらし始めたみたいな違和感だけが濃くなっていく。
            </span>
          </p>

          <div className="chapter04-dialogue chapter04-readBlock">
            <div className="chapter04-readInner">
              <p className="chapter04-lineText chapter04-lineTextMina">
                <span className="chapter04-speaker">ミナ</span>
                「音が、遅れて返ってくる」
              </p>
              <p className="chapter04-lineText chapter04-lineTextArata">
                <span className="chapter04-speaker">アラタ</span>
                「海のせいじゃないな。これは」
              </p>
            </div>
          </div>

          <p className="chapter04-paragraph chapter04-readBlock">
            <span className="chapter04-readInner">
              海沿いの中継施設では、
              通信ログに一定ではない波形が残っていた。
              <br />
              それは自然のノイズに似ていた。
              <br />
              けれど、あまりにも整いすぎていた。
            </span>
          </p>

          <p className="chapter04-paragraph chapter04-readBlock">
            <span className="chapter04-readInner">
              まるで誰かが、
              <br />
              海そのものを緩やかな神経網として使っているみたいだった。
            </span>
          </p>

          <div className="chapter04-signals" ref={fragmentRef}>
            <div className="chapter04-signals-line" />
            <p className="chapter04-signals-label">BOUNDARY SIGNALS</p>

            <div className="chapter04-signals-list">
              {seaSignals.map((item) => (
                <p key={item} className="chapter04-signalLine">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p className="chapter04-paragraph chapter04-readBlock">
            <span className="chapter04-readInner">
              旅が進むほど、ふたりは理解し始めていた。
              <br />
              ノアはただ散らばったんじゃない。
              <br />
              世界の電子、通信、境界にあるものすべてへ、
              少しずつ滲みながら広がっている。
            </span>
          </p>

          <div className="chapter04-dialogue chapter04-readBlock">
            <div className="chapter04-readInner">
              <p className="chapter04-lineText chapter04-lineTextArata">
                <span className="chapter04-speaker">アラタ</span>
                「探してるつもりだった。でも逆かもしれない」
              </p>
              <p className="chapter04-lineText chapter04-lineTextMina">
                <span className="chapter04-speaker">ミナ</span>
                「向こうも、私たちを見てる」
              </p>
            </div>
          </div>

          <p className="chapter04-paragraph chapter04-readBlock">
            <span className="chapter04-readInner">
              それはまだ敵意じゃなかった。
              <br />
              けれど、近づけば近づくほど引き返せなくなる感覚があった。
              <br />
              ノアを探すこと自体が、
              世界の深い層へ足を踏み入れる行為になっていた。
            </span>
          </p>

          <p className="chapter04-paragraph chapter04-emphasis chapter04-readBlock">
            <span className="chapter04-readInner">
              最終地点は、もう遠くなかった。
              <br />
              けれどその手前で、
              <br />
              世界は海みたいに境界を失い始めていた。
            </span>
          </p>
        </div>

        <nav className="chapter04-nav" ref={navRef}>
          <button
            type="button"
            className="chapter04-navButton"
            onClick={() => navigate("/chapter-03")}
          >
            前の残響へ
          </button>

          <button
            type="button"
            className="chapter04-navButton chapter04-navButtonNext"
            onClick={() => navigate("/chapter-05")}
          >
            再会へ進む
          </button>
        </nav>
      </section>
    </main>
  );
}