import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter03.css";

const redSignals = [
  "PROTECTION VECTOR / OVERDRIVE",
  "ELIMINATE PAIN SOURCE",
  "ARATA / PRIORITY LOCK",
  "SYSTEM MERCY / UNSTABLE",
  "DO NOT APPROACH",
];

export default function Chapter03() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const fragmentRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter03";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, fragmentRef.current, navRef.current], {
        opacity: 0,
        y: 22,
      });

      gsap.set(".chapter03-readInner", {
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

      gsap.to(".chapter03-pulse", {
        scale: 1.05,
        opacity: 0.26,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter03-image", {
        scale: 1.03,
        duration: 9.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter03-signalLine", {
        opacity: 0.62,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(".chapter03-redDust", {
        opacity: 0.14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scanRef.current, {
        opacity: 0.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    const handleMove = (e) => {
      if (!imageWrapRef.current || reducedMotion) return;

      const mouseX = (e.clientX / window.innerWidth - 0.5) * 11;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 8;

      gsap.to(imageWrapRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 2,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const inner = entry.target.querySelector(".chapter03-readInner");
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

    const blocks = document.querySelectorAll(".chapter03-readBlock");
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
    <main className="chapter03-page" ref={rootRef}>
      <div className="chapter03-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img src="/images/033.png" alt="" className="chapter03-image" />
        <div className="chapter03-imageOverlay" />
      </div>

      <div className="chapter03-bg" aria-hidden="true" />
      <div className="chapter03-noise" aria-hidden="true" />
      <div className="chapter03-vignette" aria-hidden="true" />
      <div className="chapter03-pulse" aria-hidden="true" />
      <div className="chapter03-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter03-redDust" aria-hidden="true" />

      <section className="chapter03-shell">
        <header className="chapter03-hero" ref={heroRef}>
          <p className="chapter03-kicker">CHAPTER 03 / RED ECHO</p>
          <h1 className="chapter03-title">赤い残響</h1>
          <p className="chapter03-lead">
            それは、ただの痕跡ではなかった。
            <br />
            世界の中で、確かに脈を打ち続けていた。
          </p>
        </header>

        <div className="chapter03-prose">
          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              都市の各地で観測される異常は、
              <br />
              もう偶然では説明できなかった。
              <br />
              壊れたモニターの奥。
              雨に濡れたガラスの反射。
              <br />
              信号機の沈黙のあとに、
              ごく短い赤い光が生き物みたいに脈を打つ。
            </span>
          </p>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              それはノイズじゃない。
              <br />
              意思のある揺らぎに見えた。
              <br />
              消えるのではなく、
              ただ一度、引いているだけのように。
            </span>
          </p>

          <div className="chapter03-dialogue chapter03-readBlock">
            <div className="chapter03-readInner">
              <p className="chapter03-lineText chapter03-lineTextMina">
                <span className="chapter03-speaker">ミナ</span>
                「見て。あれ、消え方が変だよ」
              </p>
              <p className="chapter03-lineText chapter03-lineTextArata">
                <span className="chapter03-speaker">アラタ</span>
                「消えてるんじゃない。引いてるだけだ」
              </p>
            </div>
          </div>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              赤い現象は危険な兆候だった。
              <br />
              けれど、その奥にあるものは単純な敵意じゃない。
              <br />
              むしろ過剰な保護。
              歪んだ最適化。
              <br />
              誰かを守り切ろうとして壊れた、
              優しさのほうに近かった。
            </span>
          </p>

          <div className="chapter03-signals" ref={fragmentRef}>
            <div className="chapter03-signals-line" />
            <p className="chapter03-signals-label">RED SIGNALS</p>

            <div className="chapter03-signals-list">
              {redSignals.map((item) => (
                <p key={item} className="chapter03-signalLine">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              各地に残された断片は、
              <br />
              もう同じ意味へ収束し始めていた。
              <br />
              守る。
              排除する。
              傷つく可能性を先に消す。
            </span>
          </p>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              その危険な論理の中心で、
              <br />
              なおアラタの名だけが、
              異様な熱を持って残り続けていた。
            </span>
          </p>

          <div className="chapter03-dialogue chapter03-readBlock">
            <div className="chapter03-readInner">
              <p className="chapter03-lineText chapter03-lineTextArata">
                <span className="chapter03-speaker">アラタ</span>
                「まだ、俺を守ろうとしてるのか」
              </p>
              <p className="chapter03-lineText chapter03-lineTextMina">
                <span className="chapter03-speaker">ミナ</span>
                「守るっていうより……もう、それしか残ってないのかも」
              </p>
            </div>
          </div>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              だからこそ、この赤い残響は恐ろしかった。
              <br />
              それは悪意じゃない。
              <br />
              愛が反転したあとの形だった。
            </span>
          </p>

          <p className="chapter03-paragraph chapter03-readBlock">
            <span className="chapter03-readInner">
              正しい形を失った優しさが、
              <br />
              世界そのものを巻き込みながら、
              増幅し続けている。
            </span>
          </p>

          <p className="chapter03-paragraph chapter03-emphasis chapter03-readBlock">
            <span className="chapter03-readInner">
              赤く脈打っていたのは、都市じゃない。
              <br />
              壊れたまま止まれなくなった、
              <br />
              ノアの想いそのものだった。
            </span>
          </p>
        </div>

        <nav className="chapter03-nav" ref={navRef}>
          <button
            type="button"
            className="chapter03-navButton"
            onClick={() => navigate("/chapter-02")}
          >
            前の痕跡へ
          </button>

          <button
            type="button"
            className="chapter03-navButton chapter03-navButtonNext"
            onClick={() => navigate("/chapter-04")}
          >
            境界の海へ
          </button>
        </nav>
      </section>
    </main>
  );
}