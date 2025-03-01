import Logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 w-full bg-slate-alpha-1 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4 px-8 ">
        <a href="/">
          <img src={Logo.src} alt="Logo" className="size-6" />
        </a>
        <div className="flex flex-row items-center gap-8 text-sm">
          <a
            className="text-slate-11 hover:text-slate-10"
            href="/pricing"
            onClick={() => {
              if (window.posthog) {
                window.posthog.capture('pricing_link_clicked', {
                  source: 'header',
                });
              }
            }}
          >
            Pricing
          </a>
          <a
            className="hidden text-sm text-slate-11 hover:text-slate-10 md:block"
            href="https://app.undermind.ai/?auth=login"
            target="_blank"
            onClick={() => {
              if (window.posthog) {
                window.posthog.capture('login_button_clicked', {
                  source: 'header',
                });
              }
            }}
          >
            Login
          </a>
          <a
            href="https://app.undermind.ai/?auth=register"
            target="_blank"
            onClick={() => {
              if (window.posthog) {
                window.posthog.capture('signup_button_clicked', {
                  source: 'header',
                });
              }
            }}
          >
            <Button>Sign up</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
