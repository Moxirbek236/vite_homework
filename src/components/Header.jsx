import heroImage from '../assets/hero.png'
import logo1 from '../assets/Logo.png'
import logo2 from '../assets/Logo (1).png'
import logo3 from '../assets/Logo (2).png'
import logo4 from '../assets/Logo (3).png'
import logo5 from '../assets/Logo (4).png'
import PrimaryButton from './shared/ui/PrimaryButton'

const clientLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
]

function Header() {
  return (
    <section className="relative mt-20 h-[898px] overflow-hidden bg-[#232536] text-white">
      <div className="mx-auto grid h-full w-full max-w-[1600px] grid-cols-1 px-5 md:px-10 lg:px-16 xl:grid-cols-[624px_1fr] xl:px-[160px]">
        <div className="pt-16 md:pt-20 xl:pt-[152px]">
          <div className="mb-6 h-6 w-6 bg-white/[0.06]" />

          <h1 className="max-w-[624px] text-4xl font-semibold leading-tight md:text-5xl xl:text-[56px] xl:leading-[68px]">
            Transform Your Idea Into Reality with Finsweet
          </h1>

          <p className="mt-6 max-w-[528px] text-base leading-6 text-white/60">
            The entire Finsweet team knows what&apos;s good with Webflow and you
            can too with 1 week and a good attitude.
          </p>

          <div className="mt-10">
            <PrimaryButton>Request Quote</PrimaryButton>
          </div>
        </div>

        <div className="relative hidden xl:block">
          <div className="absolute right-0 top-24 h-[632px] w-[563px]">

            <img
              src={heroImage}
              alt="Header illustration"
              className="absolute right-[24px] top-0 h-[632px] w-[523px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 px-5 pb-8 md:px-10 lg:px-16 xl:px-[160px]">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm font-medium leading-5 text-white/60">
              Our Clients
            </p>
            <p className="mt-0.5 text-lg font-medium leading-7">
              We&apos;ve Worked with
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 opacity-80 sm:grid-cols-3 lg:grid-cols-5 xl:max-w-[1061px]">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
