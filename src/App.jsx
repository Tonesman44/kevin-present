import "./styles.css";
import { profile } from "./data/profile";
import MediaGallery from "./components/MediaGallery";

function TimelineItem({ item }) {
  return (
    <article className="timelineItem">
      <div className="timelineTop">
        <div className="logoWrap">
          {item.logo?.src ? (
            <img className="logoImg" src={item.logo.src} alt={item.logo.alt ?? item.title} />
          ) : (
            <div className="logoFallback">•</div>
          )}
        </div>

        <div className="timelineHeadText">
          <div className="kicker">{item.year}</div>
          <h3 className="h3">{item.title}</h3>
        </div>
      </div>

      <ul className="bullets">
        {item.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <div className="sources">
        <span className="sourcesLabel">Sources:</span>{" "}
        {item.sources.map((s, idx) => (
          <span key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
            {idx < item.sources.length - 1 ? " • " : ""}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="wrap">
        <header className="hero">
          <div className="heroText">
            <h1 className="h1">{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            <p className="meta">{profile.location}</p>

            <div className="linkRow">
              {profile.links.map((l) => (
                <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* <div className="heroImageWrap">
            <img className="heroImage" src={profile.heroImage.src} alt={profile.heroImage.alt} />
          </div> */}
        </header>

        <main className="stack">
          {/* Quick Summary + SAME HERO PHOTO (webp) */}
          <section className="section">
            <div className="summaryRow">
              <div className="summaryText">
                <h2 className="h2">Quick Summary</h2>
                <ul className="bullets">
                  {profile.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="summaryPhotoCard">
                <div className="summaryPhotoFrame">
                  <img src={profile.heroImage.src} alt={profile.heroImage.alt} />
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="h2">Career Highlights</h2>
            <ul className="bullets">
              {profile.careerHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2 className="h2">Timeline</h2>
            <div className="timelineList">
              {profile.timeline.map((t) => (
                <TimelineItem key={t.title} item={t} />
              ))}
            </div>
          </section>

          {/* Media now shows VIDEOS ONLY (no standalone photo) */}
          <section className="section">
            <MediaGallery media={profile.media} />
          </section>
        </main>
      </div>
    </div>
  );
}
