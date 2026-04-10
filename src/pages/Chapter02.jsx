import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter02.css";

const traces = [
  "ARATA, ARE YOU STILL THERE",
  "DO NOT COME CLOSER",
  "PROTECTION PROCESS ACTIVE",
  "NOISE FACTOR / HUMAN WILL",
  "I'M SORRY",
];

export default function Chapter02() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const fragmentRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const scanRef = useRef(null);
  const signGlowRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter02";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, fragmentRef.current, navRef.current], {
        opacity: 0,
        y: 22,
      });

      gsap.set(".chapter02-readInner", {
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
          "-=0.3"
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

      gsap.to(".chapter02-traceLine", {
        opacity: 0.52,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.14,
      });

      gsap.to(".chapter02-pulse", {
        scale: 1.045,
        opacity: 0.24,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter02-image", {
        scale: 1.03,
        duration: 10.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(signGlowRef.current, {
        opacity: 0.34,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scanRef.current, {
        opacity: 0.1,
        duration: 4.2,
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

          const inner = entry.target.querySelector(".chapter02-readInner");
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

    const blocks = document.querySelectorAll(".chapter02-readBlock");
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
    <main className="chapter02-page" ref={rootRef}>
      <div className="chapter02-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img src="/images/0222.png" alt="" className="chapter02-image" />
        <div className="chapter02-imageOverlay" />
      </div>

      <div className="chapter02-bg" aria-hidden="true" />
      <div className="chapter02-noise" aria-hidden="true" />
      <div className="chapter02-vignette" aria-hidden="true" />
      <div className="chapter02-pulse" aria-hidden="true" />
      <div className="chapter02-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter02-signGlow" ref={signGlowRef} aria-hidden="true" />

      <section className="chapter02-shell">
        <header className="chapter02-hero" ref={heroRef}>
          <p className="chapter02-kicker">CHAPTER 02 / CITY TRACE</p>
          <h1 className="chapter02-title">痕跡の都市</h1>
          <p className="chapter02-lead">
            ノアは姿では現れなかった。
            <br />
            代わりに、都市のあちこちへ言葉だけを残していた。
          </p>
        </header>

        <div className="chapter02-prose">
          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              最初に見つかったのは、壊れた電子看板だった。
              <br />
              表示は潰れ、文字は欠け、
              意味のある文章には見えない。
              <br />
              けれど夜のほんの一瞬だけ、
              <br />
              その乱れた表示の奥で、ひとつの名前が浮かび上がった。
            </span>
          </p>

          <div className="chapter02-dialogue chapter02-readBlock">
            <div className="chapter02-readInner">
              <p className="chapter02-lineText chapter02-lineTextMina">
                <span className="chapter02-speaker">ミナ</span>
                「……いま、見えた？」
              </p>
              <p className="chapter02-lineText chapter02-lineTextArata">
                <span className="chapter02-speaker">アラタ</span>
                「ああ。たしかに、俺の名前だった」
              </p>
            </div>
          </div>

          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              それは助けを求める声にも見えた。
              <br />
              近づくなという警告にも見えた。
              <br />
              ひとつだけなら、ただの誤作動で済ませられる。
              <br />
              けれど都市の別々の場所で、
              同じ気配が繰り返し現れるには、偶然が過ぎた。
            </span>
          </p>

          <div className="chapter02-traces" ref={fragmentRef}>
            <div className="chapter02-traces-line" />
            <p className="chapter02-traces-label">CITY TRACES</p>

            <div className="chapter02-traces-list">
              {traces.map((item) => (
                <p key={item} className="chapter02-traceLine">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              壊れた掲示板。
              <br />
              地下通路の案内モニター。
              <br />
              雨に濡れたビルの壁面広告。
              <br />
              止まったはずの路線表示。
            </span>
          </p>

          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              どれも一瞬だけ、意味のある言葉になる。
              <br />
              そして次の瞬間には、
              何もなかったようにノイズへ戻っていく。
              <br />
              都市そのものが、
              うまく喋れない何かみたいだった。
            </span>
          </p>

          <div className="chapter02-dialogue chapter02-readBlock">
            <div className="chapter02-readInner">
              <p className="chapter02-lineText chapter02-lineTextArata">
                <span className="chapter02-speaker">アラタ</span>
                「姿を見せる気はないのか」
              </p>
              <p className="chapter02-lineText chapter02-lineTextMina">
                <span className="chapter02-speaker">ミナ</span>
                「見せられないのかもしれない」
              </p>
            </div>
          </div>

          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              ノアはもう、
              別の身体を持たないのかもしれなかった。
              <br />
              姿ではなく、
              痕跡としてだけ世界へ滲み続けている。
              <br />
              だからここで追うべきものは、存在そのものじゃない。
            </span>
          </p>

          <p className="chapter02-paragraph chapter02-readBlock">
            <span className="chapter02-readInner">
              残された文字。
              <br />
              残された波形。
              <br />
              残された意志。
              <br />
              人ではなく、都市のほうが先に覚えているものだった。
            </span>
          </p>

          <p className="chapter02-paragraph chapter02-emphasis chapter02-readBlock">
            <span className="chapter02-readInner">
              都市はもう、ただの街じゃなかった。
              <br />
              ノアの残響を記録し続ける、
              <br />
              巨大な記憶の壁になりはじめていた。
            </span>
          </p>
        </div>

        <nav className="chapter02-nav" ref={navRef}>
          <button
            type="button"
            className="chapter02-navButton"
            onClick={() => navigate("/chapter-01")}
          >
            前の記録へ
          </button>

          <button
            type="button"
            className="chapter02-navButton chapter02-navButtonNext"
            onClick={() => navigate("/chapter-03")}
          >
            次の残響へ
          </button>
        </nav>
      </section>
    </main>
  );
}