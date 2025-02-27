import accurate_results from '@/assets/accurate-results.svg';
import brainstorm_copilot from '@/assets/brainstorm.svg';
import complex_topics from '@/assets/complex-topics.svg';
import comprehensive_discovery from '@/assets/comprehensive-discovery.svg';

export const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="flex min-h-0 w-full items-center justify-center md:min-h-screen"
    >
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
        <section className="flex h-full flex-col justify-center gap-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-end">
            <div className="flex flex-col pb-0.5">
              <h6>Features</h6>
              <h1>An Intelligent Assistant</h1>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                Imagine having a research assistant who works tirelessly for
                you.
              </p>
              <p>
                Instead of spending hours searching for answers, you'd have the
                best knowledge and solutions at your fingertips—instantly.
              </p>
              <p>Now, with cutting-edge AI, it's a reality.</p>
            </div>
          </div>

          <section className="flex flex-col gap-5 md:flex-row">
            <div className="flex w-full flex-col gap-3 md:w-1/4">
              <img
                src={complex_topics.src}
                alt="Complex Topics"
                className="size-[100px] object-contain"
              />
              <h3 className="ml-3">Incredibly complex topics</h3>
              <p className="ml-3">
                Talk to Undermind like you would a smart colleague.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/4">
              <img
                src={accurate_results.src}
                alt="Accurate Results"
                className="size-[100px] object-contain"
              />
              <h3 className="ml-3">Accurate results</h3>
              <p className="ml-3">
                Undermind finds the precise papers you need, with clear
                explanations about why they matter.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/4">
              <img
                src={comprehensive_discovery.src}
                alt="Comprehensive Discovery"
                className="size-[100px] object-contain"
              />
              <h3 className="ml-3">Comprehensive discovery</h3>
              <p className="ml-3">
                Undermind analyzes hundreds of papers, learning as it goes — and
                knows how far it needs to look to find everything.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/4">
              <img
                src={brainstorm_copilot.src}
                alt="Brainstorm Copilot"
                className="size-[100px] object-contain"
              />
              <h3 className="ml-3">Powerful analysis</h3>
              <p className="ml-3">
                Ask followup questions to deeply and quickly understand the
                results.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
