import { footerHref, footerLinks, serviceLinks } from "./data";
import CornerBlocks from "./ui/CornerBlocks";
import SectionContainer from "../../assets/Negative.png";
import SectionContainer1 from "../../assets/Negative1.png";
import SectionContainer2 from "../../assets/Negative2.png";

function SiteFooter() {
  return (
    <footer id="contact" className="bg-white text-[#232536]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 pb-16 md:px-10 lg:px-16 xl:grid-cols-[452px_1fr] xl:px-[160px]">
        <div className="relative">
          <CornerBlocks className="-top-8 left-0" />
          <h2 className="text-4xl font-semibold leading-tight md:text-[48px] md:leading-[58px]">
            Let&apos;s make
            <br />
            something special
          </h2>
          <p className="mt-10 text-2xl font-semibold leading-9">
            Let&apos;s talk!
          </p>
          <div className="mt-6 flex flex-col gap-1 text-base font-medium leading-6">
            <a href="tel:+1234567890" className="text-[#232536] no-underline">
              +123 456-7890
            </a>
            <a
              href="mailto:hello@finsweet.com"
              className="text-[#232536] no-underline"
            >
              hello@finsweet.com
            </a>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex text-sm font-medium leading-5 text-[#232536] no-underline"
          >
            Built with Client-First Style System
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr] xl:justify-items-start xl:pt-2">
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={footerHref[link]}
                className="font-medium leading-6 text-[#232536] no-underline hover:text-amber-400"
              >
                {link}
              </a>
            ))}
          </nav>

          <div>
            <h3 className="text-base font-semibold leading-7">Services</h3>
            <div className="mt-3 flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/service${link.href}`}
                  className="text-sm leading-5 text-[#232536] hover:text-amber-400 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold leading-7">Resources</h3>
            <a
              href="#"
              className="mt-3 block text-sm leading-5 hover:text-amber-400 text-[#232536] no-underline"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FFE6D2]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 py-7 md:px-10 lg:px-16 xl:flex-row xl:items-center xl:justify-between xl:px-[160px]">
          <div className="flex flex-col gap-3 text-sm font-medium md:flex-row md:items-center md:gap-10">
            <a className="text-2xl font-semibold text-[#232536] no-underline" href="/">
              {"{Finsweet"}
            </a>
            <span>&copy;2023 Finsweet</span>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="#" className="text-[#232536] no-underline">
              <img src={SectionContainer} alt="Facebook" />
            </a>
            <a href="#" className="text-[#232536] no-underline">
              <img src={SectionContainer1} alt="Twitter" />
            </a>
            <a href="#" className="text-[#232536] no-underline">
              <img src={SectionContainer2} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
