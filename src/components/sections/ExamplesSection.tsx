import { Button } from '@/components/ui/Button';

export const ExamplesSection = () => {
  return (
    <div className="flex min-h-0 w-full items-center justify-center bg-dark-bg md:min-h-[1024px]">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16 md:py-32">
        <section className="flex flex-col items-center">
          <div className="mb-3 flex flex-col">
            <h6 className="text-accent-light">Examples</h6>
            <h1 className="text-slate-1">Solve real, complex problems</h1>
          </div>

          <section className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
            <a
              href="https://app.undermind.ai/report/b3767fb7b65e9a7e90273d02558b2cc376258d1b9e58376f0b7c0924b85f694a/"
              target="_blank"
            >
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
            </a>

            <a
              href="https://app.undermind.ai/report/c87c6d79747cdbb877bdbc0ce840c86c21a3f9adbeade7c7a08f33d54b8ad01c/"
              target="_blank"
            >
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
            </a>

            <a
              href="https://app.undermind.ai/report/66b70a0fa6b78d00d94aeb0788b30925f90b801022ccb433317f933c9390891d/"
              target="_blank"
            >
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
            </a>

            <a
              href="https://app.undermind.ai/report/0484b7604bc82e77a2d88c729b0808b5791ca14f61e6c37db00c35428d0ec232/"
              target="_blank"
            >
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
            </a>

            <a
              href="https://app.undermind.ai/report/c53d4f34e990e057c729d7cb34d97ba0c70aeae524fd9ca7a66c3807a3f37c10/"
              target="_blank"
            >
              <div className="flex flex-col gap-2">
                <h6 className="pl-6 text-accent-light">Information Science</h6>
                <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                  <p className="text-slate-1">
                    I want to understand how usage rates on Google Scholar
                    change when the search latency is made longer or shorter.
                    What is the quantitative effect?
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://app.undermind.ai/report/c5f77f862ae783b7738e9931db42a8590b5567af4ba9759e1d4b7ca5b65dc9f5/"
              target="_blank"
            >
              <div className="flex flex-col gap-2">
                <h6 className="pl-6 text-accent-light">Atomic Physics</h6>
                <div className="flex flex-col gap-5 rounded-3xl border border-[#6D6FFD48] bg-[#525BFF23] p-6">
                  <p className="text-slate-1">
                    I want to find all papers demonstrating laser cooling to
                    Bose-Einstein condensation (BEC) experimentally, without
                    using evaporative cooling.
                  </p>
                </div>
              </div>
            </a>
          </section>

          <a href="https://app.undermind.ai" target="_blank">
            <Button className="mx-auto mt-2">Try Your Own Search Now</Button>
          </a>
        </section>
      </div>
    </div>
  );
};
