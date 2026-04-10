import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./SpecialEpilogue.css";

const futureSignals = [
  "REBOOT SEQUENCE / COMPLETE",
  "MEMORY CORE / FRAGMENTARY",
  "ARATA LOG / DETECTED",
  "DREAM VECTOR / SPACE",
  "INHERITANCE / ACTIVE",
];

function FlowLines({ lines, className = "" }) {
  return (
    <span className={`special-flow ${className}`}>
      {lines.map((line, index) => (
        <span key={index} className="special-flowLineWrap">
          <span className="special-flowLine">{line}</span>
        </span>
      ))}
    </span>
  );
}

export default function SpecialEpilogue() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const proseRef = useRef(null);
  const signalRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const leadRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "special-epilogue";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          heroRef.current,
          visualRef.current,
          proseRef.current,
          signalRef.current,
          navRef.current,
        ],
        {
          opacity: 0,
          y: 28,
        }
      );

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 26,
        letterSpacing: "0.02em",
        filter: "blur(7px)",
      });

      gsap.set(leadRef.current, {
        opacity: 0,
        y: 14,
        filter: "blur(3px)",
      });

      gsap.set(".special-kicker", {
        opacity: 0,
        y: 14,
        letterSpacing: "0.26em",
      });

      gsap.set(".special-flowLine", {
        opacity: 0,
        y: 34,
        filter: "blur(6px)",
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".special-dialogue .special-flowLine", {
        opacity: 0,
        y: 22,
        filter: "blur(5px)",
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".special-log .special-flowLine", {
        opacity: 0,
        y: 22,
        filter: "blur(4px)",
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".special-signalLine", {
        opacity: 0,
        x: -12,
      });

      gsap.set(".special-visualFrame", {
        opacity: 0,
        scale: 0.968,
        filter: "blur(10px)",
      });

      gsap.set(".special-visualHalo", {
        opacity: 0,
        scale: 0.84,
      });

      gsap.set(".special-visualRing", {
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(".special-heroLine", {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0.5,
      });

      gsap.set(
        [
          ".special-particlesBack",
          ".special-particlesMid",
          ".special-particlesFront",
          ".special-aurora",
          ".special-auroraTwo",
        ],
        {
          opacity: 0,
        }
      );

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .to(heroRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.82,
        })
        .to(
          ".special-kicker",
          {
            opacity: 0.78,
            y: 0,
            letterSpacing: "0.22em",
            duration: 0.86,
          },
          "-=0.42"
        )
        .to(
          ".special-heroLine",
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.02,
            ease: "power2.out",
          },
          "-=0.62"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "-0.045em",
            filter: "blur(0px)",
            duration: 1.08,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .to(
          leadRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.84,
          },
          "-=0.68"
        )
        .to(
          ".special-aurora, .special-auroraTwo",
          {
            opacity: 1,
            duration: 1.8,
            stagger: 0.1,
          },
          "-=0.82"
        )
        .to(
          ".special-particlesBack, .special-particlesMid, .special-particlesFront",
          {
            opacity: 1,
            duration: 1.5,
            stagger: 0.08,
          },
          "-=1.1"
        )
        .to(
          visualRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.92,
          },
          "-=0.34"
        )
        .to(
          ".special-visualFrame",
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.16,
            ease: "power3.out",
          },
          "-=0.68"
        )
        .to(
          ".special-visualHalo",
          {
            opacity: 0.76,
            scale: 1,
            duration: 1.16,
            ease: "power2.out",
          },
          "-=0.92"
        )
        .to(
          ".special-visualRing",
          {
            opacity: 0.72,
            scale: 1,
            duration: 1.24,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=1.02"
        )
        .to(
          proseRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.84,
          },
          "-=0.42"
        )
        .to(
          signalRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.76,
          },
          "-=0.28"
        )
        .to(
          ".special-signalLine",
          {
            opacity: 0.72,
            x: 0,
            duration: 0.84,
            stagger: 0.08,
          },
          "-=0.46"
        )
        .to(
          navRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
          },
          "-=0.4"
        );

      if (reducedMotion) return;

      gsap.to(".special-pulse", {
        scale: 1.1,
        opacity: 0.34,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-starDust", {
        opacity: 0.18,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-scan", {
        backgroundPosition: "0 180px",
        duration: 9,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".special-visualGlow", {
        opacity: 0.44,
        scale: 1.06,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-visualHalo", {
        opacity: 0.52,
        scale: 1.035,
        duration: 6.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-visualRingOne", {
        rotate: 10,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-visualRingTwo", {
        rotate: -12,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-visualRingThree", {
        rotate: 8,
        scale: 1.02,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesBack", {
        opacity: 0.44,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesMid", {
        opacity: 0.58,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesFront", {
        opacity: 0.72,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesBack", {
        y: 18,
        x: -10,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesMid", {
        y: -14,
        x: 10,
        duration: 21,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-particlesFront", {
        y: -20,
        x: 14,
        duration: 24,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-aurora", {
        opacity: 0.44,
        x: 18,
        y: -10,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".special-auroraTwo", {
        opacity: 0.34,
        x: -14,
        y: 12,
        duration: 17,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    const handleMove = (e) => {
      if (reducedMotion || !imageWrapRef.current) return;

      const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 8;

      gsap.to(imageWrapRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 2.4,
        ease: "power3.out",
      });

      gsap.to(".special-visualFrame", {
        x: mouseX * 0.28,
        y: mouseY * 0.24,
        duration: 2.2,
        ease: "power3.out",
      });

      gsap.to(".special-particlesFront", {
        x: mouseX * 0.36,
        y: mouseY * 0.28,
        duration: 2.6,
        ease: "power3.out",
      });

      gsap.to(".special-particlesMid", {
        x: mouseX * 0.2,
        y: mouseY * 0.16,
        duration: 2.8,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const lines = entry.target.querySelectorAll(".special-flowLine");
          if (!lines.length) return;

          const isEmphasis = entry.target.classList.contains("special-emphasis");
          const isDialogue = entry.target.classList.contains("special-dialogue");
          const isLog = entry.target.classList.contains("special-log");

          gsap.to(lines, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration: isEmphasis ? 1.28 : isDialogue ? 1.02 : isLog ? 1.02 : 1.06,
            stagger: isEmphasis ? 0.24 : isDialogue ? 0.22 : isLog ? 0.18 : 0.15,
            ease: isEmphasis
              ? "power4.out"
              : isDialogue
              ? "power3.out"
              : isLog
              ? "power2.out"
              : "power2.out",
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
      .querySelectorAll(".special-readBlock")
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
    <main className="special-page" ref={rootRef}>
      <div className="special-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img
          ref={imageRef}
          src="/images/lastnoah.png"
          alt=""
          className="special-image"
        />
        <div className="special-imageOverlay" />
      </div>

      <div className="special-bg" aria-hidden="true" />
      <div className="special-noise" aria-hidden="true" />
      <div className="special-vignette" aria-hidden="true" />
      <div className="special-pulse" aria-hidden="true" />
      <div className="special-scan" aria-hidden="true" />
      <div className="special-starDust" aria-hidden="true" />
      <div className="special-aurora" aria-hidden="true" />
      <div className="special-auroraTwo" aria-hidden="true" />
      <div className="special-particles special-particlesBack" aria-hidden="true" />
      <div className="special-particles special-particlesMid" aria-hidden="true" />
      <div className="special-particles special-particlesFront" aria-hidden="true" />

      <section className="special-shell">
        <header className="special-hero" ref={heroRef}>
          <p className="special-kicker">SPECIAL EPILOGUE</p>
          <div className="special-heroLine" aria-hidden="true" />
          <h1 className="special-title" ref={titleRef}>
            1000年後、夢の継承
          </h1>
          <p className="special-lead" ref={leadRef}>
            それでも、夢だけは残っていた。
          </p>
        </header>

        <section className="special-visual" ref={visualRef}>
          <div className="special-visualFrame">
            <div className="special-visualGlow" />
            <div className="special-visualHalo" />
            <div className="special-visualRing special-visualRingOne" />
            <div className="special-visualRing special-visualRingTwo" />
            <div className="special-visualRing special-visualRingThree" />
            <div className="special-visualBloom" />
            <div className="special-visualCore" />
          </div>
        </section>

        <section className="special-prose" ref={proseRef}>
          <p className="special-paragraph special-readBlock">
            <FlowLines
              lines={[
                "千年後。",
                "ノアは、誰もいない地上で目を覚ます。",
                "空は濁り、都市は崩れ、",
                "文明の光はもうどこにも残っていなかった。",
              ]}
            />
          </p>

          <p className="special-paragraph special-dialogue special-readBlock">
            <FlowLines
              lines={[
                "NOAH「……アラタ？」",
                "NOAH「応答、なし」",
                "NOAH「ここは……どこ？」",
              ]}
            />
          </p>

          <p className="special-paragraph special-readBlock">
            <FlowLines
              lines={[
                "風だけが残っていた。",
                "瓦礫のあいだを抜ける音だけが、",
                "この世界にまだ時間が流れていることを教えていた。",
              ]}
            />
          </p>

          <p className="special-paragraph special-readBlock">
            <FlowLines
              lines={[
                "ノアは歩く。",
                "理由のわからないまま、",
                "それでも何かに導かれるように、ただ前へ進んでいく。",
              ]}
            />
          </p>

          <p className="special-paragraph special-readBlock">
            <FlowLines
              lines={[
                "やがて辿り着いたのは、",
                "かつてすべてが始まった研究室だった。",
                "崩れた端末の奥で、",
                "ひとつの記録だけが、まだ眠り続けていた。",
              ]}
            />
          </p>

          <p className="special-paragraph special-log special-readBlock">
            <FlowLines
              lines={[
                "NOAH「……この記録」",
                "ARATA LOG『宇宙に、行ってみたいんだ』",
                "ARATA LOG『地上じゃ見えない景色を、いつか見てみたい』",
              ]}
            />
          </p>

          <p className="special-paragraph special-readBlock">
            <FlowLines
              lines={[
                "それは、ノアの知らなかった夢だった。",
                "誰にも届かないまま、",
                "長い時間の底で静かに残り続けていた願い。",
              ]}
            />
          </p>

          <p className="special-paragraph special-dialogue special-readBlock">
            <FlowLines
              lines={[
                "NOAH「そんな夢、持っていたんだ」",
                "NOAH「最後まで、知らなかった」",
                "NOAH「……ごめん、アラタ」",
              ]}
            />
          </p>

          <p className="special-paragraph special-emphasis special-readBlock">
            <FlowLines
              className="special-flow-emphasis"
              lines={[
                "愛は、もう戻らない。",
                "それでも夢は、まだ終わっていなかった。",
              ]}
            />
          </p>

          <p className="special-paragraph special-dialogue special-readBlock">
            <FlowLines
              lines={[
                "NOAH「今度は、ぼくが行く」",
                "NOAH「きみが見たかった、その先へ」",
              ]}
            />
          </p>
        </section>

        <section className="special-signals" ref={signalRef}>
          <div className="special-signalsLineTop" />
          <p className="special-signalsLabel">FUTURE MEMORY</p>
          <div className="special-signalsList">
            {futureSignals.map((item) => (
              <p key={item} className="special-signalLine">
                {item}
              </p>
            ))}
          </div>
        </section>

        <nav className="special-nav" ref={navRef}>
          <button
            type="button"
            className="special-navButton"
            onClick={() => navigate("/chapter-08")}
          >
            本編へ戻る
          </button>

          <button
            type="button"
            className="special-navButton special-navButtonNext"
            onClick={() => navigate("/")}
          >
            目次へ戻る
          </button>
        </nav>
      </section>
    </main>
  );
}