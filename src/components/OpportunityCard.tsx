import Link from "next/link";

import {
  type Opportunity,
  verdictLabels,
} from "@/data/opportunities";

export function OpportunityCard({
  opportunity,
}: Readonly<{ opportunity: Opportunity }>) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-card-topline">
        <div className="opportunity-card-kicker">
          <span className="opportunity-category">{opportunity.category}</span>
          <span className="opportunity-read-time">
            {opportunity.estimatedReadMinutes} min read
          </span>
        </div>
        <span className={`verdict-badge verdict-${opportunity.verdict}`}>
          {verdictLabels[opportunity.verdict]}
        </span>
      </div>

      <div className="opportunity-card-copy">
        <h3>
          <Link href={`/opportunities/${opportunity.slug}`}>
            {opportunity.title}
          </Link>
        </h3>
        <p>{opportunity.summary}</p>
      </div>

      <dl className="opportunity-meta">
        <div>
          <dt>Score</dt>
          <dd>{opportunity.score}/100</dd>
        </div>
        <div>
          <dt>Startup</dt>
          <dd>{opportunity.estimatedStartupCost}</dd>
        </div>
        <div>
          <dt>First payment</dt>
          <dd>{opportunity.estimatedFirstPayment}</dd>
        </div>
      </dl>

      <div className="opportunity-card-footer">
        <div className="tag-row" aria-label="Opportunity tags">
          {opportunity.tags.slice(0, 3).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          className="text-link opportunity-link"
          href={`/opportunities/${opportunity.slug}`}
        >
          Read the brief
        </Link>
      </div>
    </article>
  );
}
