import branchesLogo from '@/assets/branches-logo.png';
import { Button } from '@/components/ui/Button';

export const AboutSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-screen-xl px-8">
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

            <div className="flex flex-col gap-5">
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
                <a
                  href="https://www.undermind.ai/static/Undermind_whitepaper.pdf"
                  target="_blank"
                  className="underline"
                >
                  benchmarked
                </a>{' '}
                the first version of Undermind to be{' '}
                <span className="font-semibold">10-50x</span> better than Google
                Scholar, and we've been improving ever since.
              </p>
            </div>

            <Button
              className="w-fit"
              onClick={() => {
                window.location.href = '';
              }}
            >
              Learn more
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
