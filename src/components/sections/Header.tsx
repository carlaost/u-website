import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 w-full bg-slate-alpha-1 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4 px-8 ">
        <a href="/">
          <img src={Logo.src} alt="Logo" className="size-6" />
        </a>
        <div className="flex flex-row items-center gap-8">
          <a className="text-slate-11 hover:text-slate-10" href="/pricing">
            Pricing
          </a>
          <a
            className="hidden text-slate-11 hover:text-slate-10 md:block"
            href="https://app.undermind.ai/?auth=ogin"
            target="_blank"
          >
            Login
          </a>
          <a href="https://app.undermind.ai/?auth=register" target="_blank">
            <Button>Sign up</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
