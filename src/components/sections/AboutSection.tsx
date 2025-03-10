import branchesLogo from '@/assets/branches-logo.png';
import { Button } from '@/components/ui/Button';

export const AboutSection = () => {
  return (
    <div className="flex min-h-0 w-full items-center justify-center md:min-h-[1024px]">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16 md:py-32">
        <section className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img
            src={branchesLogo.src}
            alt="Undermind Logo"
            className="hidden h-auto w-full md:block"
          />

          <div className="flex flex-col gap-5">
            <section className="flex flex-col gap-2.5">
              <h6>About Us</h6>
              <h1>A Next Generation, AI-Powered Research System</h1>
            </section>

            <div className="flex flex-col gap-1">
              <p>
                Undermind isn't just a search engine — it{' '}
                <span className="font-semibold">
                  autonomously researches an entire complex topic for you.
                </span>
              </p>
              <p>
                Mimicking a human's careful, systematic discovery process,
                Undermind uses advanced language models to recognize crucial
                information and learn while it does research. It runs down
                citation trails, and adapts its search strategy based on what it
                finds, leading to unprecedented accuracy and comprehensiveness.
              </p>
              <p>
                We{' '}
                <a href="/whitepaper.pdf" target="_blank">
                  benchmarked
                </a>{' '}
                the first version of Undermind to be{' '}
                <span className="font-semibold">10-50x</span> better than Google
                Scholar, and we've been improving ever since.
              </p>
            </div>

            <a href="/whitepaper.pdf" target="_blank">
              <Button className="w-fit">Learn more</Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
