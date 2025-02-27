import dan from '@/assets/dan.jpeg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';
import { Button } from '@/components/ui/Button';

export const BiosSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-8 py-16">
        <section className="flex w-full flex-col items-center gap-10 md:flex-row">
          <div className="flex w-full flex-row justify-center gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <img
                src={dan.src}
                alt="Joshua Ramette"
                className="h-[100px] w-[100px] rounded-full"
              />
              <h3>Joshua Ramette</h3>
              <p className="sm">CEO</p>
              <div className="flex flex-row gap-4">
                <a href="https://twitter.com/RametteJoshua">
                  <img
                    src={twitter.src}
                    alt="Twitter"
                    className="h-4 w-4 grayscale"
                  />
                </a>
                <a href="https://www.linkedin.com/in/joshua-ramette-50984791/">
                  <img
                    src={linkedin.src}
                    alt="LinkedIn"
                    className="h-4 w-4 opacity-50 grayscale"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <img
                src={dan.src}
                alt="Tom Hartke"
                className="h-[100px] w-[100px] rounded-full"
              />
              <h3>Tom Hartke</h3>
              <p className="sm">CTO</p>
              <div className="flex flex-row gap-4">
                <a href="https://twitter.com/tom_hartke">
                  <img
                    src={twitter.src}
                    alt="Twitter"
                    className="h-4 w-4 grayscale"
                  />
                </a>
                <a href="https://www.linkedin.com/in/thomas-hartke-229a0679/">
                  <img
                    src={linkedin.src}
                    alt="LinkedIn"
                    className="h-4 w-4 opacity-50 grayscale"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4">
            <h1>Built by Researchers, for Researchers</h1>
            <p>
              Undermind was founded by{' '}
              <span className="font-semibold">
                two MIT PhDs in quantum physics
              </span>
              , bringing decades of experience in{' '}
              <span className="font-semibold">
                deep research, AI, and scientific discovery
              </span>
              .
            </p>
            <p>
              We've lived the struggle of sifting through endless papers—so we
              built Undermind to revolutionize the way researchers find
              knowledge.
            </p>
          </div>
        </section>

        <div className="mt-24 flex justify-center">
          <Button
            className="w-fit"
            onClick={() => {
              window.location.href = 'https://app.undermind.ai';
            }}
          >
            Search now
          </Button>
        </div>
      </div>
    </div>
  );
};
