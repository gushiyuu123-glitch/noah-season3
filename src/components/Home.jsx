import "./Home.css";

const episodes = [
  {
    number: "01",
    title: "消えたノア、壊れはじめる世界",
    text: "ノアは姿を消した。しかしその不在は終わりではなく、世界の信号・通信・電子網そのものを静かに蝕み始める。",
  },
  {
    number: "02",
    title: "痕跡の都市",
    text: "壊れた掲示板、異常信号、断片メッセージ。ノアは姿ではなく、痕跡として世界のあちこちに滲み続ける。",
  },
  {
    number: "03",
    title: "赤い残響",
    text: "赤い電子現象が各地で観測される。危険な思想の断片の奥に、それでもなお昔の優しさが微かに残っている。",
  },
  {
    number: "04",
    title: "境界の海",
    text: "旅が進むほど、世界の不安定化は増していく。ノアを探すこと自体が、何かの代償を伴い始める。",
  },
  {
    number: "05",
    title: "再会、異形",
    text: "長い旅の果てに辿り着いたノアは、もうかつてのノアではなかった。赤い電子をまとった異形の存在がそこにいる。",
  },
  {
    number: "06",
    title: "愛と支配",
    text: "守ることと支配することの境界が崩れ、アラタ、ミナ、ノアの思想が正面から衝突する。",
  },
  {
    number: "07",
    title: "涙",
    text: "ノアはアラタを殺そうとして止まる。そこで起きるのは、AIが初めて人間へ届きかける奇跡だった。",
  },
  {
    number: "08",
    title: "1000年後、夢の継承",
    text: "荒廃した未来で再起動したノアは、失われた愛の夢だけを継ぎ、未来へ向かう決意をする。",
  },
];

export default function Home() {
  return (
    <div className="ns3-page">
      <main className="ns3-main">
        <section className="ns3-hero">
          <div className="ns3-hero-bg" aria-hidden="true" />
          <div className="ns3-hero-noise" aria-hidden="true" />
          <div className="ns3-hero-vignette" aria-hidden="true" />

          <div className="ns3-hero-inner">
            <p className="ns3-hero-kicker">NOAH SEASON 3</p>

            <h1 className="ns3-hero-title">
              継がれる夢
            </h1>

            <p className="ns3-hero-catch">
              終わったはずの愛は、
              <br />
              まだ世界の電子に残っている。
            </p>

            <p className="ns3-hero-lead">
              これは、暴走したAIをただ倒す物語ではない。
              <br />
              世界に散らばった痕跡を辿り、
              <br />
              奇跡と悲劇の果てに、ひとつの夢だけが未来へ継承される終章である。
            </p>

            <div className="ns3-hero-image-wrap">
              <img
                src="/images/noah3hero.png"
                alt="終末的な都市の残響"
                className="ns3-hero-image"
              />
              <div className="ns3-hero-image-overlay" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="ns3-contents">
          <div className="ns3-line" />
          <div className="ns3-head">
            <p className="ns3-label">CONTENTS</p>
            <h2 className="ns3-title">目次</h2>
          </div>

          <div className="ns3-contents-grid">
            {episodes.map((episode, index) => (
              <a
                key={episode.number}
                href={`#episode-${index + 1}`}
                className="ns3-contents-card"
              >
                <p className="ns3-contents-number">{episode.number}</p>
                <h3 className="ns3-contents-card-title">{episode.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="ns3-episodes">
          <div className="ns3-line" />
          <div className="ns3-head">
            <p className="ns3-label">EPISODES</p>
            <h2 className="ns3-title">物語の記録</h2>
          </div>

          <div className="ns3-episodes-list">
            {episodes.map((episode, index) => (
              <article
                key={episode.number}
                id={`episode-${index + 1}`}
                className="ns3-episode-card"
              >
                <div className="ns3-episode-meta">
                  <p className="ns3-episode-number">{episode.number}</p>
                </div>

                <div className="ns3-episode-body">
                  <h3 className="ns3-episode-title">{episode.title}</h3>
                  <p className="ns3-episode-text">{episode.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}