import icon1 from '../assets/Icon Div.png'
import icon2 from '../assets/Group 1755.png'
import icon3 from '../assets/Icon Div (1).png'

const services = [
  {
    key: 'support',
    title: 'Technical support',
    featured: true,
  },
  {
    key: 'testing',
    title: 'Testing Management',
    featured: false,
  },
  {
    key: 'development',
    title: 'Development',
    featured: false,
  },
]

function ServiceIcon({ type }) {
  if (type === 'testing') {
    return (
      <img src={icon2} alt="Testing" />
    )
  }

  if (type === 'development') {
    return (
      <img src={icon3} alt="Development" />
    )
  }

  return (
    <img src={icon1} alt="Support" />
  )
}

function Services() {
  return (
    <section className="w-full bg-[#FFE6D2]">
      <div className="mx-auto w-full max-w-[1608px] px-5 py-16 md:px-10 lg:px-16 xl:h-[917px] xl:px-[160px] xl:py-24">
        <div className="max-w-[777px]">
          <p className="text-sm font-medium uppercase tracking-[3px] text-black/90">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
            We build software solutions that solve client&apos;s business
            challenges
          </h2>

          <button
            type="button"
            className="group relative mt-10 inline-flex h-16 w-[214px] items-center justify-between bg-[#444CFC] px-8 text-white"
          >
            <span className="text-base font-medium leading-6 text-white/90">
              Start a Project
            </span>
            <span className="text-sm transition-transform group-hover:translate-x-1">
              {'-->'}
            </span>

            <span className="absolute left-0 top-0 h-[27px] w-[29px]">
              <span className="absolute left-0 top-0 h-[11px] w-[29px] bg-[#666DFF]" />
              <span className="absolute bottom-0 left-0 h-2 w-2 bg-[#666DFF]" />
              <span className="absolute left-0 top-0 h-[19px] w-[19px] bg-[#FFA155]" />
              <span className="absolute left-0 top-0 h-[11px] w-[11px] bg-[#FFD3AF]" />
            </span>
          </button>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:mt-20 xl:grid-cols-3 xl:gap-8">
          {services.map((service) => (
            <article
              key={service.key}
              className={`h-[335px] bg-white px-12 py-12 ${
                service.featured
                  ? 'shadow-[0_60px_68px_-30px_rgba(255,161,85,0.35)]'
                  : ''
              }`}
            >
              <div className="flex h-[47px] w-[47px] items-center justify-center rounded-none bg-[#FFA155]/10">
                <ServiceIcon type={service.key} />
              </div>

              <h3 className="mt-4 text-base font-semibold leading-7 text-black">
                {service.title}
              </h3>

              <p className="mt-2 max-w-[326px] text-base leading-6 text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-3 text-base font-medium leading-6 text-[#444CFC] no-underline"
              >
                Read more
                <span className="text-sm text-black">{'-->'}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
