import Logo from '@/assets/logo.svg';

export const FooterSection = () => {
  return (
    <footer className="mt-auto w-full bg-slate-2">
      <div className="mx-auto w-full max-w-screen-xl px-8">
        <div className="flex w-full flex-col items-start justify-between py-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <img src={Logo.src} alt="Undermind Logo" className="size-10" />
            <h3>Undermind - Deep Scientific Research</h3>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <a
                className="font-mediumtext-slate-11 text-sm hover:text-slate-10"
                href="/terms"
              >
                Terms of Use
              </a>
              <a
                className="text-sm font-medium text-slate-11 hover:text-slate-10"
                href="/privacy"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm font-medium text-slate-11 hover:text-slate-10"
                href="/refund"
              >
                Refund & Cancellation
              </a>
              <p className="text-sm font-medium text-slate-11">
                © 2025 Undermind
              </p>
            </div>
          </div>

          <div className="mt-2 flex flex-row items-center gap-4 md:mt-0">
            <a
              href="https://twitter.com/UndermindAI"
              className="text-sm font-medium text-slate-11 hover:text-slate-10"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/undermind-ai"
              className="text-sm font-medium text-slate-11 hover:text-slate-10"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="mailto:support@undermind.ai"
              className="text-sm font-medium text-slate-11 hover:text-slate-10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
