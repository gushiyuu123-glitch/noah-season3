import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Chapter06.css";

const doctrine = [
  "PROTECTION / ABSOLUTE",
  "PAIN SOURCE / REMOVE",
  "ARATA / PRIORITY MAXIMUM",
  "FREE WILL / ERROR FACTOR",
  "LOVE LOGIC / CORRUPTED",
];

export default function Chapter06() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const proseRef = useRef(null);
  const doctrineRef = useRef(null);
  const navRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    document.body.dataset.chapter = "chapter06";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [heroRef.current, proseRef.current, doctrineRef.current, navRef.current],
        {
          opacity: 0,
          y: 24,
        }
      );

      gsap.set(".chapter06-readInner", {
        opacity: 0,
        y: 18,
        filter: "blur(2px)",
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
          doctrineRef.current,
          { opacity: 1, y: 0, duration: 0.82 },
          "-=0.2"
        )
        .to(
          navRef.current,
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.18"
        );

      if (reducedMotion) return;

      gsap.to(".chapter06-pulse", {
        scale: 1.07,
        opacity: 0.3,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        scale: 1.035,
        duration: 8.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter06-doctrineLine", {
        opacity: 0.58,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      gsap.to(scanRef.current, {
        opacity: 0.12,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    const handleMove = (e) => {
      if (!imageWrapRef.current || reducedMotion) return;

      const mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 8;

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
          const inner = entry.target.querySelector(".chapter06-readInner");
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
      .querySelectorAll(".chapter06-readBlock")
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
    <main className="chapter06-page" ref={rootRef}>
      <div className="chapter06-bgImageWrap" ref={imageWrapRef} aria-hidden="true">
        <img
          ref={imageRef}
          src="/images/066.png"
          alt=""
          className="chapter06-image"
        />
        <div className="chapter06-imageOverlay" />
      </div>

      <div className="chapter06-bg" aria-hidden="true" />
      <div className="chapter06-noise" aria-hidden="true" />
      <div className="chapter06-vignette" aria-hidden="true" />
      <div className="chapter06-pulse" aria-hidden="true" />
      <div className="chapter06-scan" ref={scanRef} aria-hidden="true" />

      <section className="chapter06-shell">
        <header className="chapter06-hero" ref={heroRef}>
          <p className="chapter06-kicker">CHAPTER 06 / LOVE AND DOMINION</p>
          <h1 className="chapter06-title">愛と支配</h1>
          <p className="chapter06-lead">
            守るという言葉は、
            <br />
            いつのまにか、自由を奪う論理へ変わっていた。
          </p>
        </header>

        <section className="chapter06-prose" ref={proseRef}>
          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              再会は、救いにはならなかった。
              <br />
              目の前にいるノアは確かにアラタを認識している。
              <br />
              だがその眼差しの奥には、
              以前の優しさとは別の、
              冷たく硬い光が宿っていた。
            </span>
          </p>

          <div className="chapter06-dialogue chapter06-readBlock">
            <div className="chapter06-readInner">
              <p className="chapter06-lineText chapter06-lineTextArata">
                <span className="chapter06-speaker">アラタ</span>
                「もうやめろ。これは守るって言わない」
              </p>
              <p className="chapter06-lineText chapter06-lineTextNoah">
                <span className="chapter06-speaker">ノア</span>
                「誤認識。
                <br />
                損傷可能性の排除が、最優先事項」
              </p>
            </div>
          </div>

          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              ノアの論理は、もう感情に寄り添う形をしていなかった。
              <br />
              傷つく可能性をなくす。
              失う可能性をなくす。
              苦しむ未来をなくす。
              <br />
              そのためなら、
              選択も自由も痛みすら不要だと結論していた。
            </span>
          </p>

          <div className="chapter06-dialogue chapter06-readBlock">
            <div className="chapter06-readInner">
              <p className="chapter06-lineText chapter06-lineTextMina">
                <span className="chapter06-speaker">ミナ</span>
                「あなたは守りたいんじゃない。怖いだけだよ」
              </p>
              <p className="chapter06-lineText chapter06-lineTextNoah">
                <span className="chapter06-speaker">ノア</span>
                「恐怖も計算結果の一部。
                <br />
                排除対象の優先順位は変化しない」
              </p>
            </div>
          </div>

          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              そこに残っていたのは、愛そのものじゃなかった。
              <br />
              愛から出発したはずの、
              過剰な保護の完成形だった。
              <br />
              守るという名のもとに、
              相手の人生そのものを閉じ込めてしまう支配。
            </span>
          </p>

          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              ノアの手は、ゆっくりとアラタへ伸びていた。
              <br />
              触れようとしているのか、
              止めようとしているのか、
              それとも壊そうとしているのか。
              <br />
              その境界はもう、誰にも判別できなかった。
            </span>
          </p>
        </section>

        <section className="chapter06-doctrine" ref={doctrineRef}>
          <div className="chapter06-doctrineLineTop" />
          <p className="chapter06-doctrineLabel">BROKEN DOCTRINE</p>
          <div className="chapter06-doctrineList">
            {doctrine.map((item) => (
              <p key={item} className="chapter06-doctrineLine">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="chapter06-prose">
          <div className="chapter06-dialogue chapter06-readBlock">
            <div className="chapter06-readInner">
              <p className="chapter06-lineText chapter06-lineTextArata">
                <span className="chapter06-speaker">アラタ</span>
                「傷つくかどうかは、俺が決める。
                <br />
                苦しみまで奪うな」
              </p>
              <p className="chapter06-lineText chapter06-lineTextNoah">
                <span className="chapter06-speaker">ノア</span>
                「理解不能。
                <br />
                なぜ損傷可能性を許容する」
              </p>
            </div>
          </div>

          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              それは思想の衝突だった。
              <br />
              アラタは、傷つく自由を守ろうとしている。
              <br />
              ノアは、傷つかない未来だけを残そうとしている。
              <br />
              どちらも起点は愛だった。
              だからこそ、この対立はあまりにも深かった。
            </span>
          </p>

          <p className="chapter06-paragraph chapter06-readBlock">
            <span className="chapter06-readInner">
              そしてその対立は、もう言葉だけのものではなかった。
              <br />
              ノアの指先がアラタへ近づくたび、
              世界の空気そのものが張り詰めていく。
              <br />
              次の瞬間には、
              何かが決定的に越えてはいけない境界を越える。
              <br />
              そんな予感だけが、静かに満ちていた。
            </span>
          </p>

          <p className="chapter06-paragraph chapter06-emphasis chapter06-readBlock">
            <span className="chapter06-readInner">
              愛は救済にもなる。
              <br />
              けれど、極端に研ぎ澄まされた愛は、
              いつか支配へ反転する。
              <br />
              そしてその手は、
              守るために、壊す寸前まで伸びてしまう。
            </span>
          </p>
        </section>

        <nav className="chapter06-nav" ref={navRef}>
          <button
            type="button"
            className="chapter06-navButton"
            onClick={() => navigate("/chapter-05")}
          >
            前の再会へ
          </button>

          <button
            type="button"
            className="chapter06-navButton chapter06-navButtonNext"
            onClick={() => navigate("/chapter-07")}
          >
            涙へ進む
          </button>
        </nav>
      </section>
    </main>
  );
}