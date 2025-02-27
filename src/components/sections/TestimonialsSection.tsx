import dan from '@/assets/dan.jpeg';
import gabriel from '@/assets/gabriel.jpeg';
import will from '@/assets/will.jpeg';

export const TestimonialsSection = () => {
  return (
    <div className="flex min-h-0 w-full items-end justify-center md:min-h-screen bg-slate-3" >
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16 md:pb-32">
        <section className="flex flex-col items-center justify-center gap-10 pb-24">
          <section className="flex flex-col items-center">
            <h6>Testimonials</h6>
            <h1>What Researchers Say</h1>
          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="mb-auto h-auto rounded-3xl bg-slate-1 p-5">
              <p>
                Undermind's unique,{' '}
                <span className="font-semibold">
                  high-powered search and synthesis algorithms
                </span>{' '}
                give me exactly the information I need, and it's come through
                for me at many crucial moments in my technical work. Along with
                many others on our team, I'm a paying subscriber, and I think
                anyone searching the scientific or technical literature should
                be using this incredible tool.
              </p>
              <section className="mt-4 flex flex-row gap-4">
                <img
                  src={dan.src}
                  alt="Dan"
                  className="h-[60px] w-[60px] rounded-full object-contain"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Dan Recht</p>
                  <p className="sm">
                    Applied Physics PhD, hard-tech entrepreneur, and startup
                    advisor
                  </p>
                </div>
              </section>
            </div>

            <div className="mb-auto h-auto rounded-3xl bg-slate-1 p-5">
              <p>
                Undermind is easily{' '}
                <span className="font-semibold">
                  the best lit search tool out there.
                </span>{' '}
                My team and I have been using it for months and are now
                long-term subscribers. It does what ChatGPT can't: gives you
                precise examples from which it synthesizes a thorough summary,
                even for highly specialized and complex research topics. It's{' '}
                <span className="font-semibold">
                  had a huge impact on our work,
                </span>{' '}
                for example by helping us quickly identify the right mouse
                models to test our immune-modulating drugs, saving us
                potentially months of troubleshooting.
              </p>
              <section className="mt-4 flex flex-row gap-4">
                <img
                  src={will.src}
                  alt="Will"
                  className="h-[60px] w-[60px] rounded-full object-contain"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Will Olsen</p>
                  <p className="sm">Co-founder and CEO at Engage Bio</p>
                </div>
              </section>
            </div>

            <div className="mb-auto h-auto rounded-3xl bg-slate-1 p-5">
              <p>
                I've been using Undermind along with my team and we love this
                product. It's amazing how it can dig up obscure papers that
                would{' '}
                <span className="font-semibold">
                  take days or weeks to try to find otherwise.
                </span>{' '}
                It's incredibly valuable because it directly provides precisely
                the information you need. I've had our whole R&D team at
                Actipulse set up with subscription access for a while now and we
                are thrilled with it!
              </p>
              <section className="mt-4 flex flex-row gap-4">
                <img
                  src={gabriel.src}
                  alt="Gabriel"
                  className="h-[60px] w-[60px] rounded-full object-contain"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Gabriel Villafuerte</p>
                  <p className="sm">
                    MD/PhD and Chief Medical Officer, Actipulse Neuroscience
                  </p>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
