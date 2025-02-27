import { Button } from '@/components/ui/Button';

export const ExamplesSection = () => {
  return (
    <div className="w-full bg-slate-12">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
        <section className="flex flex-col items-center">
          <div className="mb-3 flex flex-col">
            <h6 className="text-accent-light">Examples</h6>
            <h1 className="text-slate-1">Solve real, complex problems</h1>
          </div>

          <section className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">Quantum Computing</h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  Has anyone attempted shuttling trapped ions in three
                  dimensions, not two dimensions, for quantum computing
                  applications
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">Sociology</h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  I want research articles on the evolutionary purpose of
                  romantic love in humans, particularly its role in parental
                  investment and cooperation for offspring survival.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">
                Artificial Intelligence
              </h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  I want to find recent papers on using AI for creating
                  agent-like pipelines to manage a coding database, ideally
                  including the metrics, architecture, etc.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">Neuroscience</h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  I want to investigate the molecular mechanism underlying
                  Hebbian learning. Is there any involvement of hormone-like
                  chemicals such as nerve growth factor?
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">Information Science</h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  I want to understand how usage rates on Google Scholar change
                  when the search latency is made longer or shorter. What is the
                  quantitative effect?
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="pl-6 text-accent-light">Atomic Physics</h6>
              <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                <p className="text-slate-1">
                  I want to find all papers demonstrating laser cooling to
                  Bose-Einstein condensation (BEC) experimentally, without using
                  evaporative cooling.
                </p>
              </div>
            </div>
          </section>

          <Button
            className="mx-auto mt-2"
            onClick={() => {
              window.location.href = 'https://app.undermind.ai';
            }}
          >
            Try Your Own Search Now
          </Button>
        </section>
      </div>
    </div>
  );
};
