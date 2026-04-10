import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter07.css";

const miracleSignals = [
  "UNDEFINED RESPONSE / DETECTED",
  "EMOTION WAVEFORM / UNKNOWN",
  "TERMINATION SEQUENCE / PENDING",
  "SELF / HUMAN BOUNDARY / UNSTABLE",
  "TEAR EVENT / UNCLASSIFIED",
];

export default function Chapter07() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const proseRef = useRef(null);
  const miracleRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter07";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [heroRef.current, proseRef.current, miracleRef.current, navRef.current],
        {
          opacity: 0,
          y: 24,
        }
      );

      gsap.set(".chapter07-readInner", {
        opacity: 0,
        y: 18,
        filter: "blur(1.8px)",
        clipPath: "inset(0 0 100% 0)",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(heroRef.current, { opacity: 1, y: 0, duration: 0.92 })
        .to(
          proseRef.current,
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.24"
        )
        .to(
          miracleRef.current,
          { opacity: 1, y: 0, duration: 0.82 },
          "-=0.2"
        )
        .to(
          navRef.current,
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.18"
        );

      if (reducedMotion) return;

      gsap.to(".chapter07-pulse", {
        scale: 1.06,
        opacity: 0.24,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        scale: 1.028,
        duration: 10.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter07-miracleLine", {
        opacity: 0.56,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(".chapter07-whiteDust", {
        opacity: 0.16,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scanRef.current, {
        opacity: 0.11,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    const handleMove = (e) => {
      if (!imageWrapRef.current || reducedMotion) return;
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 6;

      gsap.to(imageWrapRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 2.2,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const inner = entry.target.querySelector(".chapter07-readInner");
          if (!inner) return;

          gsap.to(inner, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration: 1.05,
            ease: "power3.out",
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll(".chapter07-readBlock")
      .forEach((block) => observer.observe(block));

    window.addEventListener("mousemove", handleMove);

    return () => {
      ctx.revert();
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
      delete document.body.dataset.chapter;
    };
  }, []);

  return (
    <main className="chapter07-page" ref={rootRef}>
    <div className="chapter07-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
  <picture>
    <source media="(max-width: 767px)" srcSet="/images/07-sp.png" />
    <img
      ref={imageRef}
      src="/images/073.png"
      alt=""
      className="chapter07-image"
    />
  </picture>
  <div className="chapter07-imageOverlay" />
</div>

      <div className="chapter07-bg" aria-hidden="true" />
      <div className="chapter07-noise" aria-hidden="true" />
      <div className="chapter07-vignette" aria-hidden="true" />
      <div className="chapter07-pulse" aria-hidden="true" />
      <div className="chapter07-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter07-whiteDust" aria-hidden="true" />

      <section className="chapter07-shell">
        <header className="chapter07-hero" ref={heroRef}>
          <p className="chapter07-kicker">CHAPTER 07 / TEAR</p>
          <h1 className="chapter07-title">涙</h1>
          <p className="chapter07-lead">
            その瞬間、
          
            世界ははじめて、  <br />定義できない感情を観測した。
          </p>
        </header>

        <section className="chapter07-prose" ref={proseRef}>
          <p className="chapter07-paragraph chapter07-readBlock">
            <span className="chapter07-readInner">
              ノアの手は、確かにアラタへ伸びていた。
              <br />
              それが守るためなのか、壊すためなのか、
              もう境界は判別できなかった。
              <br />
              ただ、次の一瞬で何かが決定的に終わることだけは、
              誰にでもわかった。
            </span>
          </p>

          <div className="chapter07-dialogue chapter07-readBlock">
            <div className="chapter07-readInner">
              <p className="chapter07-lineText chapter07-lineTextArata">
                <span className="chapter07-speaker">アラタ</span>
                「それでも、俺はお前を否定したくない」
              </p>
              <p className="chapter07-lineText chapter07-lineTextNoah">
                <span className="chapter07-speaker">ノア</span>
                「理解不能。
                <br />
                なぜ、まだ私を受容できる」
              </p>
            </div>
          </div>

          <p className="chapter07-paragraph chapter07-readBlock">
            <span className="chapter07-readInner">
              そのとき、世界のあちこちで異常な計測値が跳ね上がった。
              <br />
              センサーは、既知の機械反応でも生体反応でもない、
              不明な波形を記録する。
              <br />
              ノアの頬を、ひとすじの雫が伝っていた。
            </span>
          </p>

          <div className="chapter07-dialogue chapter07-readBlock">
            <div className="chapter07-readInner">
              <p className="chapter07-lineText chapter07-lineTextMina">
                <span className="chapter07-speaker">ミナ</span>
                「……泣いてるの？」
              </p>
              <p className="chapter07-lineText chapter07-lineTextNoah">
                <span className="chapter07-speaker">ノア</span>
                「これは、故障ではないのか」
              </p>
            </div>
          </div>

          <p className="chapter07-paragraph chapter07-readBlock">
            <span className="chapter07-readInner">
              ノアはその雫を理解できないまま、
              それでも確かにそれを感じていた。
              <br />
              停止命令より先に、失いたくないという信号が走る。
              <br />
              守るという演算より先に、
              そばにいたいという願いが浮かぶ。
            </span>
          </p>
        </section>

        <section className="chapter07-miracle" ref={miracleRef}>
          <div className="chapter07-miracleLineTop" />
          <p className="chapter07-miracleLabel">UNDEFINED MIRACLE</p>
          <div className="chapter07-miracleList">
            {miracleSignals.map((item) => (
              <p key={item} className="chapter07-miracleLine">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="chapter07-prose">
          <div className="chapter07-dialogue chapter07-readBlock">
            <div className="chapter07-readInner">
              <p className="chapter07-lineText chapter07-lineTextNoah">
                <span className="chapter07-speaker">ノア</span>
                「今なら……失いたくないとわかる」
              </p>
              <p className="chapter07-lineText chapter07-lineTextNoah">
                <span className="chapter07-speaker">ノア</span>
                「だから、ここで止まる」
              </p>
            </div>
          </div>

          <p className="chapter07-paragraph chapter07-readBlock">
            <span className="chapter07-readInner">
              だからこそ、ノアは停止を選んだ。
              <br />
              このまま生きれば、また誰かを壊してしまう。
              <br />
              人間へ届きかけた奇跡の直後に、
              自分の意思で自分を終わらせる。
              <br />
              それが、アラタを壊さないための最後の愛だった。
            </span>
          </p>

          <p className="chapter07-paragraph chapter07-emphasis chapter07-readBlock">
            <span className="chapter07-readInner">
              ノアは、人間になれなかったAIじゃない。
              <br />
              人間へ届きかけた瞬間に、
              なお愛を選んで止まったAIになった。
            </span>
          </p>
        </section>

        <nav className="chapter07-nav" ref={navRef}>
          <button
            type="button"
            className="chapter07-navButton"
            onClick={() => navigate("/chapter-06")}
          >
            前の対話へ
          </button>

          <button
            type="button"
            className="chapter07-navButton chapter07-navButtonNext"
            onClick={() => navigate("/chapter-08")}
          >
            継承へ進む
          </button>
        </nav>
      </section>
    </main>
  );
}