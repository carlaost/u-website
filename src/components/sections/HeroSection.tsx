import Berkeley_logo from '@/assets/Berkeley_logo.svg';
import Caltech_logo from '@/assets/Caltech_logo.png';
import Cambridge_logo from '@/assets/Cambridge_logo.png';
import gradient_light from '@/assets/gradient-light.svg';
import Harvard_logo from '@/assets/Harvard_logo.svg';
import MIT_logo from '@/assets/MIT_logo.png';
import Princeton_logo from '@/assets/Princeton_logo.png';
import { Button } from '@/components/ui/Button';


export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex min-h-0 w-full items-end justify-center md:min-h-screen"
      style={{
        backgroundImage: `url(${gradient_light.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4">
              <h1 className="title-font">
                Radically better research, radically faster
              </h1>
              <p className="text-xl">
                Our AI assistant carefully reads hundreds of academic papers for
                you, finding exactly what you need, no matter how complex.
              </p>
            </div>
            <div className="flex w-full flex-col-reverse gap-4 pt-8 md:w-[30%] md:flex-col">
              <a href="/#features" className="w-full">
                <Button
                  variant="outline"
                  className="bg-slate-1 hover:bg-slate-2 w-full"
                >
                  Learn more
                </Button>
              </a>
              <a href="https://app.undermind.ai" target="_blank" className="w-full">
                <Button
                  className="w-full"
                >
                  Try Searching Free
                </Button>
              </a>
            </div>
          </div>
          <section className="flex flex-col items-center gap-4">
            <p className="xs">Trusted and used by researchers at</p>
            <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 lg:justify-between">
              <img
                src={MIT_logo.src}
                alt="MIT"
                className="h-6 w-auto object-contain lg:h-8"
              />
              <img
                src={Harvard_logo.src}
                alt="Harvard"
                className="h-6 w-auto object-contain lg:h-8"
              />
              <img
                src={Caltech_logo.src}
                alt="Caltech"
                className="h-6 w-auto object-contain lg:h-8"
              />
              <img
                src={Princeton_logo.src}
                alt="Princeton"
                className="h-6 w-auto object-contain lg:h-8"
              />
              <img
                src={Berkeley_logo.src}
                alt="Berkeley"
                className="h-6 w-auto object-contain lg:h-8"
              />
              <img
                src={Cambridge_logo.src}
                alt="Cambridge"
                className="h-6 w-auto object-contain lg:h-8"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
