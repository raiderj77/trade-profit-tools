import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteUrl } from "@/config/urls";

const SLUG = "lead-value-calculator-teardown";
const TITLE =
  "Lead Value Calculator: A Teardown of the Three Leaks in a Typical Contractor Landing Page";
const DESCRIPTION =
  "Most contractor lead-gen pages count leads and never count profit. A teardown of the three leaks: untracked calls, no per-job profit math, and markup used where margin belongs, and the calculator that plugs two of them.";
const DEPOSIT_LINK = "https://buy.stripe.com/7sY28q9Afd3O5kZdqu6J20e";

export const metadata: Metadata = {
  title: "Lead Value Calculator Teardown",
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: `/${SLUG}`,
    publishedTime: "2026-11-10",
    modifiedTime: "2026-11-10",
    authors: ["Jason Ramirez"],
  },
};

export default function TeardownArticlePage() {
  const siteUrl = getSiteUrl();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Person", name: "Jason Ramirez" },
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    mainEntityOfPage: `${siteUrl}/${SLUG}`,
    image: `${siteUrl}/images/lead-value-calculator-demo.png`,
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <article className="container legal-content article-content">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <p className="eyebrow">For agencies serving home-service contractors</p>
          <h1>{TITLE}</h1>
          <p className="byline">
            By Jason Ramirez · Published November 10, 2026 · Updated November
            10, 2026
          </p>

          <p>
            <strong>The short answer.</strong> Most contractor lead-gen pages
            count leads. Nobody on the page counts profit. A lead is worth the
            gross profit on the jobs it closes, times the close rate, and a
            typical landing page does none of that math. It leaks in three
            places: untracked calls, no per-job profit math, and markup being
            used where margin belongs. A lead value calculator plugs the second
            and third leaks directly, and gives the first one a measurable page
            to land on.
          </p>
          <p>
            <strong>Try the thing this article is about:</strong> the live demo
            is running at <Link href="/demo">tradeprofittools.com</Link>. Run
            your own numbers through it before you read the teardown.
          </p>

          <figure className="article-figure">
            <Image
              src="/images/lead-value-calculator-demo.png"
              alt="The lead value calculator demo with example numbers filled in: monthly leads, calls answered, job value, ad spend, and gross margin"
              width={1280}
              height={1150}
            />
            <figcaption>
              The live demo with its example numbers in place. Job cost, price,
              close rate, and lead cost go in; the dollar value of one lead
              comes out.
            </figcaption>
          </figure>

          <h2>What a lead value calculator is, and what it is not</h2>
          <p>
            A lead value calculator is a page where a contractor enters job
            cost, price, close rate, and lead cost, and gets back what one lead
            is actually worth in gross profit dollars. It is not a contact form
            with a new headline. It is not a free quote widget with no math
            behind it. It is not the ad platform dashboard, because the ad
            platform has never seen your client&apos;s job costs, and job costs
            are where the answer lives.
          </p>

          <h2>How the teardown math works</h2>
          <ul>
            <li>
              <strong>Lead value:</strong> average gross profit per job,
              multiplied by the close rate. That is the most a lead can cost
              before the marketing loses money.
            </li>
            <li>
              <strong>Gross margin:</strong> (price minus job cost) divided by
              price.
            </li>
            <li>
              <strong>Markup:</strong> (price minus job cost) divided by job
              cost. Same profit dollars, different denominator, very different
              percentage.
            </li>
            <li>
              <strong>Cost per lead:</strong> total spend divided by every
              lead, calls included, not just form fills.
            </li>
            <li>
              <strong>On the example numbers below:</strong> they are one
              example scenario with the arithmetic shown so you can check it.
              They are not a client&apos;s results, and no client&apos;s
              results are quoted anywhere in this piece.
            </li>
          </ul>

          <h2>Leak 1: the calls nobody counted</h2>
          <p>
            On most contractor sites, the phone number is the loudest call to
            action on the page. Then the monthly report counts form submissions
            and calls it lead volume.
          </p>
          <p>
            Run the arithmetic on a simple example. A campaign produces 100
            real leads in a month. Sixty come by phone, forty come through the
            form. If the report only counts the form, cost per lead gets
            calculated on 40 leads instead of 100, so it reads two and a half
            times worse than reality. The agency looks like it is failing. The
            contractor cuts budget or churns. Nobody in that chain made a math
            error on purpose; the page just never gave the calls a counted
            place to land.
          </p>
          <p>
            The fix has two parts. Count calls with a tracked number and put
            them in the same cost per lead line as form leads. And run traffic
            to a page built to convert and be measured, which is where the
            calculator earns its keep below.
          </p>

          <h2>Leak 2: leads counted, profit never mentioned</h2>
          <p>
            Say an agency delivers leads at $180 each and the contractor closes
            one in four. The report says cost per lead is fine. Fine compared
            to what?
          </p>
          <p>
            Finish the math. If the average job brings $800 in gross profit, a
            lead is worth $800 times 25 percent, which is $200. At $180 a lead,
            the marketing clears $20 a lead before overhead. Tight but alive.
            Now change one input: if the real close rate is one in five, lead
            value drops to $160, and every lead the agency delivers at $180
            loses the contractor $20. Same report, same lead cost, opposite
            conclusion. Without per-job profit math on the page and in the
            report, the agency is flying on one instrument, and it is the wrong
            one.
          </p>
          <p>
            This is also the retention angle, and it is the part agencies feel.
            A contractor who cannot see profit per lead judges the agency on
            the only number he does see, which is how the phone felt this week.
            A branded page that shows him his own profit math makes the
            agency&apos;s value visible in dollars instead of vibes.
          </p>

          <h2>Leak 3: markup wearing margin&apos;s clothes</h2>
          <p>
            This one is quiet and it is expensive. A contractor wants a 40
            percent margin on a job that costs $1,000 to deliver. He adds 40
            percent to the cost and prices it at $1,400. That is a 40 percent
            markup. His actual margin is $400 divided by $1,400, which is 28.6
            percent. He is not making the 40 percent he thinks he is making, on
            every job, all year.
          </p>
          <p>
            Priced at a true 40 percent margin, that job costs the customer
            $1,000 divided by 0.60, which is $1,667. The gap is $267 on one
            job. Ten jobs a month at that size and the shop leaves about $2,670
            a month on the table, then wonders why marketing is not producing
            profit. The marketing may be fine. The pricing math is eating the
            return before the ads get a vote.
          </p>
          <p>
            When the agency spots this in a client&apos;s numbers, the agency
            stops being a vendor and becomes the person who found real money. A
            lead value calculator forces this conversation, because it asks for
            job cost and price as separate inputs and shows margin for what it
            is.
          </p>
          <p>
            <strong>Run the demo with a client&apos;s real numbers:</strong>{" "}
            <Link href="/demo">tradeprofittools.com</Link>. The markup and
            margin gap shows up in about thirty seconds of typing.
          </p>

          <h2>The options, side by side</h2>
          <div className="article-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>What it counts</th>
                  <th>Per-job profit math</th>
                  <th>Cost</th>
                  <th>Time to launch</th>
                  <th>Best for / not for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Keep the current page</td>
                  <td>Form submissions</td>
                  <td>None</td>
                  <td>$0 in new spend</td>
                  <td>Already live</td>
                  <td>
                    Best for nobody with a retention problem. Not for an agency
                    that reports on profit.
                  </td>
                </tr>
                <tr>
                  <td>Agency spreadsheet</td>
                  <td>Whatever someone types in</td>
                  <td>Yes, if the formulas are maintained</td>
                  <td>$0 license, agency labor every month</td>
                  <td>Days to build, upkeep forever</td>
                  <td>
                    Best for one client and an operator who likes spreadsheets.
                    Not for five clients and a monthly reporting cadence.
                  </td>
                </tr>
                <tr>
                  <td>Generic form or quiz tool</td>
                  <td>Form entries and quiz completions</td>
                  <td>No, it was not built for job costing</td>
                  <td>Monthly subscription</td>
                  <td>Days</td>
                  <td>
                    Best for collecting contact details. Not for showing a
                    contractor what a lead is worth.
                  </td>
                </tr>
                <tr>
                  <td>White-label lead value calculator (Trade Profit Tools)</td>
                  <td>Calculator leads, delivered to the inbox by email</td>
                  <td>Yes, margin, markup, and lead value built in</td>
                  <td>$1,000 one time, no monthly fee</td>
                  <td>Installed in 5 business days</td>
                  <td>
                    Best for agencies that sell and report on profit. Not for
                    agencies whose clients will not share job costs, because
                    the math needs real cost inputs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to choose</h2>
          <ul>
            <li>
              <strong>If your only problem is reporting accuracy,</strong> fix
              call tracking first. It costs little and it might change every
              conclusion in your next client report. Do that before you buy
              anything, including this.
            </li>
            <li>
              <strong>If you run one or two contractor accounts</strong> and
              the spreadsheet gets updated on time, keep the spreadsheet. It
              breaks later than people admit.
            </li>
            <li>
              <strong>If clients churn because they cannot see the value,</strong>{" "}
              that is the calculator&apos;s job. It puts your branding on a
              page that proves, in the client&apos;s own numbers, what your
              leads are worth.
            </li>
            <li>
              <strong>If your clients guard their job costs,</strong> stop
              here. No tool fixes a client who will not share the inputs, and a
              calculator running on guessed costs is worse than none.
            </li>
          </ul>

          <h2>The obvious objection: can&apos;t we just build this ourselves?</h2>
          <p>
            You can, if you have a developer. Price it honestly before you
            decide: the build hours, the revisions when the first client wants
            his own cost categories, and the maintenance every time something
            changes. Then compare it to a flat $1,000, installed in 5 business
            days, with no monthly fee. The other version of the objection is
            that contractors will not type their costs into a calculator. In
            practice the agency loads the numbers with the client once, during
            onboarding, out of the invoicing app the client already uses. After
            that the page does the talking with prospects, and the client
            checks his own math more often than he checks his ad report.
          </p>

          <h2>FAQ</h2>
          <h3>What is a lead value calculator?</h3>
          <p>
            It is a page that turns job cost, price, and close rate into the
            dollar value of one lead. It exists so a contractor, and the agency
            sending him leads, can compare lead cost against lead value instead
            of guessing.
          </p>
          <h3>What is the difference between markup and margin?</h3>
          <p>
            Markup is profit divided by cost. Margin is profit divided by
            price. A 40 percent markup on a $1,000 job is a 28.6 percent
            margin, and pricing with one while expecting the other quietly
            underprices every job.
          </p>
          <h3>How much does the white-label install cost?</h3>
          <p>
            $1,000 total: $250 to start, $750 after install. No monthly fee.
            The first 3 installs are a founding pilot, and delivery is 5
            business days from the deposit.
          </p>
          <h3>What does the agency need to hand over for an install?</h3>
          <p>
            Branding, meaning logo and colors, and one working session to load
            a client&apos;s real job numbers. The calculator goes on the
            client&apos;s site under the agency&apos;s brand, and leads are
            delivered by email.
          </p>
          <h3>Does the calculator replace call tracking?</h3>
          <p>
            No. Count calls with a tracked number and report them next to form
            leads. The calculator handles the profit math and gives campaigns a
            page that converts and measures; call tracking is a separate, cheap
            fix that this article recommends doing either way.
          </p>

          <h2>What the founding install looks like</h2>
          <p>
            Three founding pilot installs are open. $250 starts yours, the
            calculator is installed under your brand in 5 business days, and
            the remaining $750 is due after install. No monthly fee after that.
            If your clients price on markup and wonder where the profit went,
            this is the page that shows them, with your logo on it.
          </p>
          <p>
            <a className="button button-primary" href={DEPOSIT_LINK}>
              Start with the $250 deposit
            </a>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
