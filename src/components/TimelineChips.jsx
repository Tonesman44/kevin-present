export default function TimelineChips({ timeline = [] }) {
  return (
    <div className="chipRow">
      {timeline.map((t) => (
        <div className="chipCard" key={`${t.year}-${t.title}`}>
          <div className="chipYear">{t.year}</div>
          <div className="chipTitle">{t.title}</div>
        </div>
      ))}
    </div>
  );
}
