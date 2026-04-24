import Stripe from "./ui/Stripe";

function ProcessCard({ item, showBottomStripe = false, showTopStripe = false }) {
  return (
    <article className="relative min-h-[164px] border border-[#2325362b] bg-white px-8 py-8">
      {showTopStripe && <Stripe position="top" />}
      {showBottomStripe && <Stripe position="bottom" />}

      <p className="absolute right-4 top-3 text-2xl font-semibold leading-8 text-[#232536]/20">
        {item.number}
      </p>

      <div className="flex items-start gap-4 pr-8">
        <img
          src={item.icon}
          alt={item.alt}
          className="mt-1 h-[47px] w-[47px] shrink-0 object-contain"
        />
        <div>
          <h3 className="text-base font-semibold leading-7 text-black">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-5 text-[#5D5F6D]">
            We aim to attain the greatest satisfaction for our clients and be
            one of the prominent.
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProcessCard;
