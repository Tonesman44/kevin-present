export default function MediaGallery({ media = {} }) {
  const photos = media.photos ?? [];
  const videos = media.videos ?? [];

  return (
    <div className="stack">
      <div>
        <h2 className="h2">Photos</h2>
        <div className="photoGrid">
          {photos.map((p) => (
            <figure className="photoCard" key={p.link ?? p.src ?? p.title}>
              <div className="photoFrame">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <img src={p.src} alt={p.title} loading="lazy" />
                  </a>
                ) : (
                  <img src={p.src} alt={p.title} loading="lazy" />
                )}
              </div>

              <figcaption className="caption">
                <div className="captionTitle">{p.title}</div>
                {p.credit ? <div className="captionSub">{p.credit}</div> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div>
        <h2 className="h2">Videos</h2>
        <div className="videoList">
          {videos.map((v) => (
            <div className="videoCard" key={v.link ?? v.id ?? v.title}>
              <div className="videoTitle">{v.title}</div>

              <div className="videoFrame">
                {v.kind === "youtube" && (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {v.kind === "vimeo" && (
                  <iframe
                    src={`https://player.vimeo.com/video/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {v.link ? (
                <a className="smallLink" href={v.link} target="_blank" rel="noreferrer">
                  Open source
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
