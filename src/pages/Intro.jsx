import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import * as THREE from "three";
import "./Intro.css";

export default function Intro() {
  const navigate = useNavigate();

  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const catchRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);
  const haloRef = useRef(null);
  const orbRef = useRef(null);
  const orbRingRef = useRef(null);
  const gridGlowRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          kickerRef.current,
          titleRef.current,
          catchRef.current,
          leadRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set(
        [haloRef.current, orbRef.current, orbRingRef.current, gridGlowRef.current],
        {
          opacity: 0,
          scale: 0.96,
        }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(haloRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
      })
        .to(
          gridGlowRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.15,
          },
          "-=1.18"
        )
        .to(
          orbRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.06,
          },
          "-=0.92"
        )
        .to(
          orbRingRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.08,
          },
          "-=0.98"
        )
        .to(
          kickerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.8"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.34"
        )
        .to(
          catchRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.58"
        )
        .to(
          leadRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.88,
          },
          "-=0.5"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.74,
          },
          "-=0.42"
        );

      if (reducedMotion) return;

      gsap.to(titleRef.current, {
        textShadow:
          "0 0 18px rgba(255,92,92,0.045), 0 10px 34px rgba(0,0,0,0.24)",
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(haloRef.current, {
        scale: 1.045,
        opacity: 0.58,
        duration: 6.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(gridGlowRef.current, {
        opacity: 0.42,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orbRef.current, {
        y: -7,
        x: 3,
        scale: 1.03,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orbRingRef.current, {
        rotation: 6,
        scale: 1.035,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });

      gsap.to(catchRef.current, {
        y: -2,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const particlesCount = reducedMotion ? 520 : 1250;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 17;
      positions[i3 + 2] = (Math.random() - 0.5) * 13;

      const cluster = Math.random();

      let red = 0.46 + Math.random() * 0.18;
      let green = 0.04 + Math.random() * 0.05;
      let blue = 0.08 + Math.random() * 0.14;

      if (cluster > 0.72) {
        red = 0.68 + Math.random() * 0.18;
        green = 0.05 + Math.random() * 0.04;
        blue = 0.06 + Math.random() * 0.08;
      } else if (cluster < 0.22) {
        red = 0.34 + Math.random() * 0.08;
        green = 0.05 + Math.random() * 0.04;
        blue = 0.18 + Math.random() * 0.18;
      }

      colors[i3] = red;
      colors[i3 + 1] = green;
      colors[i3 + 2] = blue;
      scales[i] = 0.4 + Math.random() * 1.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.52,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const setSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      points.rotation.y = t * 0.02 + mouseX * 0.08;
      points.rotation.x = t * 0.009 + mouseY * 0.045;
      points.position.x += (mouseX * 0.16 - points.position.x) * 0.014;
      points.position.y += (-mouseY * 0.12 - points.position.y) * 0.014;

      material.opacity = 0.47 + Math.sin(t * 0.42) * 0.03;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    setSize();

    if (!reducedMotion) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", setSize);
    if (!reducedMotion) {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <main className="intro-page" ref={rootRef}>
      <canvas className="intro-webgl" ref={canvasRef} />

      <div className="intro-bg" aria-hidden="true" />
      <div className="intro-grid-glow" ref={gridGlowRef} aria-hidden="true" />
      <div className="intro-noise" aria-hidden="true" />
      <div className="intro-vignette" aria-hidden="true" />
      <div className="intro-scanline" aria-hidden="true" />

      <section className="intro-hero">
        <div className="intro-halo" ref={haloRef} aria-hidden="true" />
        <div className="intro-orb" ref={orbRef} aria-hidden="true" />
        <div className="intro-orb-ring" ref={orbRingRef} aria-hidden="true" />

        <div className="intro-inner">
          <p className="intro-kicker" ref={kickerRef}>
            NOAH SEASON 3 / LAST RECORD
          </p>

          <h1 className="intro-title" ref={titleRef}>
            継がれる夢
          </h1>

          <p className="intro-catch" ref={catchRef}>
            消えたはずの声は、
            <br />
            まだ世界の奥で、脈を持っていた。
          </p>

          <p className="intro-lead" ref={leadRef}>
            ノアは、もういない。
            <br />
            それでも記録だけが、静かに残り続けた。
            <br />
            触れられないものを辿るたび、
            <br />
            夢は終わりではなく、継承へ変わっていく。
          </p>

          <button
            className="intro-cta"
            ref={ctaRef}
            onClick={() => navigate("/toc")}
            type="button"
          >
            記録をひらく
          </button>
        </div>
      </section>
    </main>
  );
}