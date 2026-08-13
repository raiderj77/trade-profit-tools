import {
  type Opportunity,
  scoreDimensions,
} from "@/data/opportunities";

export function OpportunityScorecard({
  opportunity,
}: Readonly<{ opportunity: Opportunity }>) {
  return (
    <section className="scorecard" aria-labelledby="scorecard-title">
      <div className="scorecard-heading">
        <div>
          <p className="eyebrow">Decision score</p>
          <h2 id="scorecard-title">{opportunity.score} out of 100</h2>
        </div>
        <p>
          This score is a filter for where to spend validation time. It is not a
          success probability or revenue forecast.
        </p>
      </div>

      <div className="score-grid">
        {scoreDimensions.map((dimension) => {
          const value = opportunity.scores[dimension.key];

          return (
            <div className="score-row" key={dimension.key}>
              <div className="score-row-label">
                <strong>{dimension.label}</strong>
                <span>{dimension.description}</span>
              </div>
              <div
                className="score-meter"
                role="meter"
                aria-label={dimension.label}
                aria-valuemin={1}
                aria-valuemax={10}
                aria-valuenow={value}
              >
                <span style={{ width: `${value * 10}%` }} />
              </div>
              <strong className="score-value">{value}/10</strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}
