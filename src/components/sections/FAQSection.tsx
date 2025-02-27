import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export const FAQSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
        <section className="flex w-full flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2.5">
            <h6>FAQ</h6>
            <h1>Frequently Asked Questions</h1>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-[600px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What scientific databases do you search?
              </AccordionTrigger>
              <AccordionContent>
                We cover all fields of science using the{' '}
                <a href="https://www.semanticscholar.org/" target="_blank">
                  Semantic Scholar
                </a>{' '}
                database of over 200 million articles, which contains PubMed,
                ArXiv, and{' '}
                <a
                  href="https://www.semanticscholar.org/about/publishers"
                  target="_blank"
                >
                  many other databases.
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why does it take 3-5 minutes to complete?
              </AccordionTrigger>
              <AccordionContent>
                Undermind is thoroughly researching your topic, not just running
                a quick search. During those few minutes, it's scanning through
                hundreds of papers, cross comparing and ranking sources, and
                adapting its strategy as it learns about your topic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you search full texts, or just abstracts?
              </AccordionTrigger>
              <AccordionContent>
                Undermind Free Tier searches abstracts and metadata. In
                addition, for users who upgrade to our Pro tier, we provide more
                compute to also search the full texts of nearly all open access
                and preprint articles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What makes Undermind different?
              </AccordionTrigger>
              <AccordionContent>
                Every other "search engine" you've used before just returns
                approximate recommendations, not precisely relevant results. As
                researchers ourselves, we know what you need is often so complex
                that you have to wade through hundreds of results. It's painful.
                You should think of Undermind as sending a talented colleague to
                do a few days of research for you, working hard to find exactly
                what you need.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>I didn't find my paper. Why?</AccordionTrigger>
              <AccordionContent>
                <p>
                  If you're looking for a very specific paper, there's a small
                  chance it isn't present in the{' '}
                  <a href="https://www.semanticscholar.org/" target="_blank">
                    Semantic Scholar
                  </a>{' '}
                  database of over 200 million articles which we draw from.
                </p>
                <br />
                <p>
                  Another possibility is that the Undermind search has not yet
                  converged. Unlike in a traditional search engine, where all
                  results are returned at once, ordered from best to worst, we
                  perform a search in stages, like you would as you carefully
                  search the literature. We look at a the most promising set of
                  papers first, and depending on the difficulty of finding
                  relevant results within these papers, we may not discover all
                  the relevant papers in this first pass. By statistically
                  modeling this process, we can determine what fraction of
                  relevant papers we have likely found. If your paper didn't
                  show up at first, it's likely the search system knows it has
                  not yet found everything (and the report summary will tell
                  you). You can deploy more computation ("extend" the search) to
                  find the rest. See our{' '}
                  <a href="/whitepaper.pdf" target="_blank">
                    whitepaper
                  </a>{' '}
                  for additional explanation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Why the name Undermind?</AccordionTrigger>
              <AccordionContent>
                Undermind represents the intelligence that supports and
                underpins your work. Like the roots of a tree, it provides a
                deep, rich foundation of knowledge, helping you uncover insights
                that fuel discovery.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
};
