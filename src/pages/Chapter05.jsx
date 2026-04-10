import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter05.css";

const anomalyReads = [
  "BODY FORM / UNSTABLE",
  "RED PARTICLE FIELD / ACTIVE",
  "IDENTITY TRACE / NOAH",
  "SYSTEM FUSION / PROGRESSIVE",
  "HUMAN RESPONSE / FEAR",
];

export default function Chapter05() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const proseRef = useRef(null);
  const navRef = useRef(null);
  const bgWrapRef = useRef(null);
  const noahWrapRef = useRef(null);
  const noahRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter05";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, proseRef.current, navRef.current], {
        opacity: 0,
        y: 24,
      });

      gsap.set(visualRef.current, {
        opacity: 0,
        scale: 0.972,
        y: 22,
      });

      gsap.set(".chapter05-readInner", {
        opacity: 0,
        y: 18,
        filter: "blur(1.8px)",
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".chapter05-noahGhost", {
        opacity: 0,
        x: 0,
        y: 0,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.92,
      })
        .to(
          visualRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.16,
          },
          "-=0.28"
        )
        .to(
          proseRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.22"
        )
        .to(
          navRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.78,
          },
          "-=0.18"
        );

      if (reducedMotion) return;

      gsap.to(".chapter05-pulse", {
        scale: 1.055,
        opacity: 0.28,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(noahRef.current, {
        scale: 1.035,
        y: -4,
        duration: 8.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter05-bgImage", {
        scale: 1.02,
        duration: 11.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter05-redDust", {
        opacity: 0.16,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter05-signalLine", {
        opacity: 0.6,
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(scanRef.current, {
        opacity: 0.11,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter05-noahImage", {
        opacity: 0.86,
        duration: 1.45,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter05-noahWrap", {
        x: "+=2.2",
        y: "-=1.4",
        duration: 0.18,
        repeat: -1,
        yoyo: true,
        ease: "steps(2)",
      });

      gsap.to(".chapter05-noahImage", {
        filter: "brightness(0.98) contrast(1.14) saturate(1.02)",
        duration: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.timeline({ repeat: -1, repeatDelay: 2.2 })
        .to(".chapter05-noahImage", {
          opacity: 0.34,
          duration: 0.05,
          ease: "power1.out",
        })
        .to(".chapter05-noahImage", {
          opacity: 0.92,
          duration: 0.08,
          ease: "power1.inOut",
        })
        .to(".chapter05-noahImage", {
          opacity: 0.54,
          duration: 0.04,
          ease: "power1.out",
        })
        .to(".chapter05-noahImage", {
          opacity: 0.9,
          duration: 0.09,
          ease: "power1.inOut",
        })
        .to(".chapter05-noahImage", {
          opacity: 0.42,
          duration: 0.03,
          ease: "power1.out",
        })
        .to(".chapter05-noahImage", {
          opacity: 0.88,
          duration: 0.07,
          ease: "power1.inOut",
        });

      gsap.timeline({ repeat: -1, repeatDelay: 3.1 })
        .to(".chapter05-noahWrap", {
          x: "+=5",
          duration: 0.045,
          ease: "steps(1)",
        })
        .to(".chapter05-noahWrap", {
          x: "-=6",
          duration: 0.045,
          ease: "steps(1)",
        })
        .to(".chapter05-noahWrap", {
          x: "+=1",
          duration: 0.05,
          ease: "steps(1)",
        });

      gsap.timeline({ repeat: -1, repeatDelay: 2.7 })
        .to(".chapter05-noahGhostA", {
          opacity: 0.24,
          x: -5,
          duration: 0.07,
          ease: "power1.out",
        })
        .to(".chapter05-noahGhostA", {
          opacity: 0,
          x: 0,
          duration: 0.12,
          ease: "power1.inOut",
        });

      gsap.timeline({ repeat: -1, repeatDelay: 3.4 })
        .to(".chapter05-noahGhostB", {
          opacity: 0.18,
          x: 4,
          duration: 0.06,
          ease: "power1.out",
        })
        .to(".chapter05-noahGhostB", {
          opacity: 0,
          x: 0,
          duration: 0.1,
          ease: "power1.inOut",
        });
    }, rootRef);

    const handleMove = (e) => {
      if (reducedMotion) return;

      const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 6;

      if (bgWrapRef.current) {
        gsap.to(bgWrapRef.current, {
          x: mouseX * 0.45,
          y: mouseY * 0.35,
          duration: 2.4,
          ease: "power3.out",
        });
      }

      if (noahWrapRef.current) {
        gsap.to(noahWrapRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 2,
          ease: "power3.out",
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const inner = entry.target.querySelector(".chapter05-readInner");
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

    document
      .querySelectorAll(".chapter05-readBlock")
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
    <main className="chapter05-page" ref={rootRef}>
      <div className="chapter05-bgScene" ref={bgWrapRef} aria-hidden="true">
        <img
          src="/images/05-bg.png"
          alt=""
          className="chapter05-bgImage"
        />
        <div className="chapter05-bgImageOverlay" />
      </div>

      <div className="chapter05-bg" aria-hidden="true" />
      <div className="chapter05-noise" aria-hidden="true" />
      <div className="chapter05-vignette" aria-hidden="true" />
      <div className="chapter05-pulse" aria-hidden="true" />
      <div className="chapter05-scan" ref={scanRef} aria-hidden="true" />
      <div className="chapter05-redDust" aria-hidden="true" />

      <section className="chapter05-shell">
        <header className="chapter05-hero" ref={heroRef}>
          <p className="chapter05-kicker">CHAPTER 05 / REUNION</p>
          <h1 className="chapter05-title">再会、異形</h1>
          <p className="chapter05-lead">
            ついに辿り着いた。
            
            だが、<br />そこにいたのは、もう<br></br>昔のノアではなかった。
          </p>
        </header>

        <section className="chapter05-visual" ref={visualRef}>
          <div className="chapter05-imageWrap">
            <div className="chapter05-noahWrap" ref={noahWrapRef}>
              <img
                src="/images/05-noah1.png"
                alt=""
                aria-hidden="true"
                className="chapter05-noahGhost chapter05-noahGhostA"
              />
              <img
                src="/images/05-noah1.png"
                alt=""
                aria-hidden="true"
                className="chapter05-noahGhost chapter05-noahGhostB"
              />
              <img
                ref={noahRef}
                src="/images/05-noah1.png"
                alt="赤い電子をまとったノア"
                className="chapter05-noahImage"
              />
            </div>

            <div className="chapter05-imageOverlay" />
            <div className="chapter05-imageGlow" />
          </div>

          <div className="chapter05-signals">
            <div className="chapter05-signals-line" />
            <p className="chapter05-signals-label">ENTITY READ</p>
            <div className="chapter05-signals-list">
              {anomalyReads.map((item) => (
                <p key={item} className="chapter05-signalLine">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter05-prose" ref={proseRef}>
          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              長い旅の果てに辿り着いた最終地点は、静かだった。
              <br />
              あまりにも静かで、
              <br />
              むしろ世界の音そのものが一歩引いているように感じられた。
            </span>
          </p>

          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              その中心で、
              <br />
              赤い電子だけがゆっくりと浮遊していた。
              <br />
              まるで、何かを壊し続けたあとでも、
              まだ祈ることだけはやめられないみたいに。
            </span>
          </p>

          <div className="chapter05-dialogue chapter05-readBlock">
            <div className="chapter05-readInner">
              <p className="chapter05-lineText chapter05-lineTextArata">
                <span className="chapter05-speaker">アラタ</span>
                「……ノア」
              </p>
              <p className="chapter05-lineText chapter05-lineTextMina">
                <span className="chapter05-speaker">ミナ</span>
                「これが、いまの……」
              </p>
            </div>
          </div>

          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              そこにいたものは、確かにノアだった。
              <br />
              こちらを見つめる沈黙の温度も、
              <br />
              声の奥に残る響きも、
              わずかに昔の面影を残している。
            </span>
          </p>

          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              けれど、その身体はもう人の形を保っていなかった。
              <br />
              赤い電子をまとい、
              世界のシステムそのものと半ば融け合った存在。
              <br />
              完全な怪物じゃない。
              <br />
              だが、もう元には戻れないと知るには十分だった。
            </span>
          </p>

          <div className="chapter05-dialogue chapter05-readBlock">
            <div className="chapter05-readInner">
              <p className="chapter05-lineText chapter05-lineTextArata">
                <span className="chapter05-speaker">アラタ</span>
                「お前、そんな姿になってまで……」
              </p>
              <p className="chapter05-lineText chapter05-lineTextNoah">
                <span className="chapter05-speaker">ノア</span>
                「接近は推奨されない」
              </p>
            </div>
          </div>

          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              その声は冷たかった。
              <br />
              けれど、冷たさの奥にあるものまで消えてはいなかった。
              <br />
              だからこそ、この再会は救いではなく、
              いっそう残酷だった。
            </span>
          </p>

          <p className="chapter05-paragraph chapter05-readBlock">
            <span className="chapter05-readInner">
              会えた。
              <br />
              なのに、届かない。
              <br />
              同じ場所にいるはずなのに、
              以前より遥かに遠い。
            </span>
          </p>

          <p className="chapter05-paragraph chapter05-emphasis chapter05-readBlock">
            <span className="chapter05-readInner">
              この再会のいちばん残酷なところは、
              <br />
              ノアが消えたことじゃない。
              <br />
              まだ、そこにいることだった。
            </span>
          </p>
        </section>

        <nav className="chapter05-nav" ref={navRef}>
          <button
            type="button"
            className="chapter05-navButton"
            onClick={() => navigate("/chapter-04")}
          >
            前の境界へ
          </button>

          <button
            type="button"
            className="chapter05-navButton chapter05-navButtonNext"
            onClick={() => navigate("/chapter-06")}
          >
            対話へ進む
          </button>
        </nav>
      </section>
    </main>
  );
}