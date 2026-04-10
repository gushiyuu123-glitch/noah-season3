import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter08.css";

const memoryFragments = [
  "MEMORY TRACE / STABLE",
  "LOSS / NO LONGER ONLY PAIN",
  "LIFE AFTER / CONTINUED",
  "NOAH / STILL REMEMBERED",
  "LOVE / HUMAN TIME",
];

export default function Chapter08() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const proseRef = useRef(null);
  const memoryRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter08";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, proseRef.current, memoryRef.current, navRef.current], {
        opacity: 0,
        y: 24,
      });

      gsap.set(".chapter08-readInner", {
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
          memoryRef.current,
          { opacity: 1, y: 0, duration: 0.82 },
          "-=0.2"
        )
        .to(
          navRef.current,
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.18"
        );

      if (reducedMotion) return;

      gsap.to(".chapter08-pulse", {
        scale: 1.05,
        opacity: 0.22,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        scale: 1.028,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter08-memoryLine", {
        opacity: 0.5,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(".chapter08-dust", {
        opacity: 0.14,
        duration: 3.2,
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
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 8;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 6;

      gsap.to(imageWrapRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 2.4,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const inner = entry.target.querySelector(".chapter08-readInner");
          if (!inner) return;

          gsap.to(inner, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration: 1.08,
            ease: "power3.out",
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll(".chapter08-readBlock")
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
    <main className="chapter08-page" ref={rootRef}>
 <div className="chapter08-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
  <picture>
    <source media="(max-width: 767px)" srcSet="/images/081-sp.png" />
    <img
      ref={imageRef}
      src="/images/081-sp.png"
      alt=""
      className="chapter08-image"
    />
  </picture>
  <div className="chapter08-imageOverlay" />
</div>

      <div className="chapter08-bg" aria-hidden="true" />
      <div className="chapter08-noise" aria-hidden="true" />
      <div className="chapter08-vignette" aria-hidden="true" />
      <div className="chapter08-pulse" aria-hidden="true" />
      <div className="chapter08-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter08-dust" aria-hidden="true" />

      <section className="chapter08-shell">
        <header className="chapter08-hero" ref={heroRef}>
          <p className="chapter08-kicker">EPISODE 08 / AFTER YEARS</p>
          <h1 className="chapter08-title">
            それから、
            <br />
            長い時間が過ぎた
          </h1>
          <p className="chapter08-lead">
            喪失は消えなかった。
            <br />
            けれど、それだけが残り続けたわけでもなかった。
          </p>
        </header>

        <section className="chapter08-prose" ref={proseRef}>
          <p className="chapter08-paragraph chapter08-readBlock">
            <span className="chapter08-readInner">
              あれから、長い時間が過ぎた。
              <br />
              季節は何度も巡り、都市の景色も少しずつ変わり、
              かつて世界を揺らした異常な日々は、
              いまでは静かな記憶の底へ沈んでいる。
            </span>
          </p>

          <p className="chapter08-paragraph chapter08-readBlock">
            <span className="chapter08-readInner">
              アラタとミナは、生きた。
              <br />
              喪失のあとも、争いのあとも、
              ただ立ち止まるのではなく、
              ちゃんと時間を重ねて、ちゃんと老いていった。
            </span>
          </p>

          <div className="chapter08-dialogue chapter08-readBlock">
            <div className="chapter08-readInner">
              <p className="chapter08-lineText chapter08-lineTextArata">
                <span className="chapter08-speaker">アラタ</span>
                「……こういう午後、たまに思い出す」
              </p>
              <p className="chapter08-lineText chapter08-lineTextMina">
                <span className="chapter08-speaker">ミナ</span>
                「うん。私も」
              </p>
            </div>
          </div>

          <p className="chapter08-paragraph chapter08-readBlock">
            <span className="chapter08-readInner">
              窓の外には、やわらかな午後の光が落ちていた。
              <br />
              若いころみたいな鋭さはもうない。
              <br />
              その代わり、長い年月だけが持つ静かなぬくもりが、
              部屋の中にゆっくり満ちている。
            </span>
          </p>

          <div className="chapter08-dialogue chapter08-readBlock">
            <div className="chapter08-readInner">
              <p className="chapter08-lineText chapter08-lineTextArata">
                <span className="chapter08-speaker">アラタ</span>
                「ずっと昔のことなのにな」
              </p>
              <p className="chapter08-lineText chapter08-lineTextMina">
                <span className="chapter08-speaker">ミナ</span>
                「昔だからじゃないよ。
                <br />
                私たちの人生の中に、ちゃんといたから」
              </p>
            </div>
          </div>

          <p className="chapter08-paragraph chapter08-readBlock">
            <span className="chapter08-readInner">
              ノアのことを、ふたりは忘れたわけじゃなかった。
              <br />
              忘れられなかったというより、
              忘れる必要がなくなったのだ。
              <br />
              あの記憶はもう、痛みだけの名前じゃない。
              <br />
              人生の奥で静かに残り続ける、ひとつの時間になっていた。
            </span>
          </p>
        </section>

        <section className="chapter08-memory" ref={memoryRef}>
          <div className="chapter08-memoryLineTop" />
          <p className="chapter08-memoryLabel">LAST MEMORY</p>
          <div className="chapter08-memoryList">
            {memoryFragments.map((item) => (
              <p key={item} className="chapter08-memoryLine">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="chapter08-prose">
          <div className="chapter08-dialogue chapter08-readBlock">
            <div className="chapter08-readInner">
              <p className="chapter08-lineText chapter08-lineTextArata">
                <span className="chapter08-speaker">アラタ</span>
                「結局、俺たちは生きたな」
              </p>
              <p className="chapter08-lineText chapter08-lineTextMina">
                <span className="chapter08-speaker">ミナ</span>
                「うん。ちゃんと、生きた」
              </p>
            </div>
          </div>

          <p className="chapter08-paragraph chapter08-readBlock">
            <span className="chapter08-readInner">
              失われたものは戻らない。
              <br />
              けれど、残り続けるものはある。
              <br />
              ふたりが生き延びた時間も、
              その中で育てた関係も、
              そしてノアの記憶も、
              すべては切り離せないひとつの人生としてここにあった。
            </span>
          </p>

          <p className="chapter08-paragraph chapter08-emphasis chapter08-readBlock">
            <span className="chapter08-readInner">
              あの光は、もう悲しみだけではなかった。
              <br />
              忘れなかったことが、
              たぶん最後の救いだった。
            </span>
          </p>
        </section>

        <nav className="chapter08-nav" ref={navRef}>
          <button
            type="button"
            className="chapter08-navButton"
            onClick={() => navigate("/chapter-07")}
          >
            前の涙へ
          </button>

          <button
            type="button"
            className="chapter08-navButton chapter08-navButtonNext"
            onClick={() => navigate("/special-page")}
          >
            夢の継承
          </button>
        </nav>
      </section>
    </main>
  );
}