import Logo from '@/assets/logo.png';

export const FooterSection = () => {
  return (
    <div className="h-fit min-h-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl px-8">
        <div className="flex w-full flex-col items-end justify-between py-10 md:flex-row">
          <div className="flex flex-col gap-2">
            <img src={Logo.src} alt="Undermind Logo" className="h-10 w-10" />
            <h3>Undermind - Deep Scientific Research</h3>
            <div className="flex flex-row items-center gap-4">
              <a className="text-slate-11 hover:text-slate-10">Terms of Use</a>
              <a className="text-slate-11 hover:text-slate-10">
                Privacy Policy
              </a>
              <p className="text-slate-11">© 2025 Undermind</p>
            </div>
          </div>

          <div className="mt-2 flex flex-row items-center gap-4 md:mt-0">
            <a
              href="https://twitter.com/UndermindAI"
              className="text-slate-11 hover:text-slate-10"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/undermind-ai"
              className="text-slate-11 hover:text-slate-10"
            >
              LinkedIn
            </a>
            <a
              href="mailto:support@undermind.ai"
              className="text-slate-11 hover:text-slate-10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
