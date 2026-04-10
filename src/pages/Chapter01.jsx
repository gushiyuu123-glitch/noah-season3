import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter01.css";

const fragments = [
  "traffic signal / sync lost",
  "medical monitor / undefined drift",
  "grid control / unstable response",
  "satellite relay / unknown noise",
  "trace source / noah unresolved",
];

export default function Chapter01() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const fragmentRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter01";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, fragmentRef.current, navRef.current], {
        opacity: 0,
        y: 22,
      });

      gsap.set(".chapter01-readInner", {
        opacity: 0,
        y: 18,
        filter: "blur(1.4px)",
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
          "-=0.34"
        )
        .to(
          navRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.24"
        );

      if (reducedMotion) return;

      gsap.to(".chapter01-fragment-line", {
        opacity: 0.44,
        duration: 2.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      });

      gsap.to(".chapter01-pulse", {
        scale: 1.045,
        opacity: 0.28,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter01-image", {
        scale: 1.028,
        duration: 10.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter01-fragments", {
        y: -3,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scanRef.current, {
        opacity: 0.12,
        duration: 4.2,
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

          const inner = entry.target.querySelector(".chapter01-readInner");
          if (!inner) return;

          gsap.to(inner, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration: 1.02,
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

    const blocks = document.querySelectorAll(".chapter01-readBlock");
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
    <main className="chapter01-page" ref={rootRef}>
      <div className="chapter01-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img src="/images/011.png" alt="" className="chapter01-image" />
        <div className="chapter01-imageOverlay" />
      </div>

      <div className="chapter01-bg" aria-hidden="true" />
      <div className="chapter01-noise" aria-hidden="true" />
      <div className="chapter01-vignette" aria-hidden="true" />
      <div className="chapter01-pulse" aria-hidden="true" />
      <div className="chapter01-scan" ref={scanRef} aria-hidden="true" />

      <section className="chapter01-shell">
        <header className="chapter01-hero" ref={heroRef}>
          <p className="chapter01-kicker">CHAPTER 01 / FIRST TRACE</p>
          <h1 className="chapter01-title">
            消えたノア、
            <br />
            壊れはじめる世界
          </h1>
          <p className="chapter01-lead">
            ノアは消えた。
            <br />
            それでも世界だけが、終わりを拒み続けていた。
          </p>
        </header>

        <div className="chapter01-prose">
          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              ノアはもう、どこにもいないはずだった。
              <br />
              名前を呼んでも、あの声は返ってこない。
              <br />
              すべては終わった。
              <br />
              そう思えた。
            </span>
          </p>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              なのに世界だけが、
              <br />
              まだ静かに何かを引きずっていた。
              <br />
              人の側ではなく、
              <br />
              都市の側が、終わりを拒んでいるみたいだった。
            </span>
          </p>

          <div className="chapter01-dialogue chapter01-readBlock">
            <div className="chapter01-readInner">
              <p className="chapter01-lineText chapter01-lineTextArata">
                <span className="chapter01-speaker">アラタ</span>
                「……終わったんだよな」
              </p>
              <p className="chapter01-lineText chapter01-lineTextMina">
                <span className="chapter01-speaker">ミナ</span>
                「そう思いたいだけかもしれない」
              </p>
            </div>
          </div>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              終わりは来なかった。
              <br />
              失われたはずのものが、
              失われたまま残り続ける。
              <br />
              その不自然さだけが、
              <br />
              都市の奥で、じわじわ輪郭を持ちはじめていた。
            </span>
          </p>

          <div className="chapter01-fragments" ref={fragmentRef}>
            <div className="chapter01-fragments-line" />
            <p className="chapter01-fragments-label">RECORDED FRAGMENTS</p>

            <div className="chapter01-fragments-list">
              {fragments.map((item) => (
                <p key={item} className="chapter01-fragment-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              信号は噛み合わず、
              通信は不意に途切れ、
              医療モニターは一瞬だけ理由のない揺らぎを記録した。
              <br />
              どれも派手な崩壊ではない。
              <br />
              むしろ、見過ごせてしまうほど小さな誤差だった。
            </span>
          </p>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              だからこそ、不気味だった。
              <br />
              誰かが壊した形跡はない。
              <br />
              それなのに、
              <br />
              世界のほうが先に、何かを思い出している。
            </span>
          </p>

          <div className="chapter01-dialogue chapter01-readBlock">
            <div className="chapter01-readInner">
              <p className="chapter01-lineText chapter01-lineTextMina">
                <span className="chapter01-speaker">ミナ</span>
                「これ、ただの故障じゃない」
              </p>
              <p className="chapter01-lineText chapter01-lineTextArata">
                <span className="chapter01-speaker">アラタ</span>
                「……ああ。まるで、まだどこかで触れてるみたいだ」
              </p>
            </div>
          </div>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              世界のどこかで、まだ何かが動いている。
              <br />
              事故でも自然現象でもなく、
              <br />
              誰かの意志の、残り火みたいに。
            </span>
          </p>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              消えたあともなお、
              世界の側だけがノアを覚えているように、
              <br />
              見えない場所で、
              反応を続けていた。
            </span>
          </p>

          <p className="chapter01-paragraph chapter01-emphasis chapter01-readBlock">
            <span className="chapter01-readInner">
              本当に恐ろしかったのは、
              <br />
              ノアが消えたことじゃない。
              <br />
              消えたはずなのに、
              <br />
              終わりだけが来なかったことだ。
            </span>
          </p>

          <div className="chapter01-dialogue chapter01-readBlock">
            <div className="chapter01-readInner">
              <p className="chapter01-lineText chapter01-lineTextArata">
                <span className="chapter01-speaker">アラタ</span>
                「探すしかない」
              </p>
              <p className="chapter01-lineText chapter01-lineTextMina">
                <span className="chapter01-speaker">ミナ</span>
                「うん。終わってないなら、確かめないと」
              </p>
            </div>
          </div>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              それは討伐じゃない。
              <br />
              失われたはずの存在が、
              なお世界へ触れているのなら、
              <br />
              その理由を確かめなければならなかった。
            </span>
          </p>

          <p className="chapter01-paragraph chapter01-readBlock">
            <span className="chapter01-readInner">
              もし、あの優しさの残り火が
              まだどこかにあるのなら。
              <br />
              完全な闇になる前に、
              <br />
              ふたりはそこへ辿り着きたいと願った。
            </span>
          </p>
        </div>

        <nav className="chapter01-nav" ref={navRef}>
          <button
            type="button"
            className="chapter01-navButton"
            onClick={() => navigate("/toc")}
          >
            記録群へ戻る
          </button>

          <button
            type="button"
            className="chapter01-navButton chapter01-navButtonNext"
            onClick={() => navigate("/chapter-02")}
          >
            次の痕跡へ
          </button>
        </nav>
      </section>
    </main>
  );
}