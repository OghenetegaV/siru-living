"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function StartYourJourney() {
  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch bg-white rounded-[16px] overflow-hidden">

          {/* Left content */}
          <div className="p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <FadeUp>
                <h2 className="text-[56px] font-semibold text-[var(--color-ink)]">
                  Start Your Journey
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="mt-4 text-[22px] leading-relaxed text-[var(--color-ink)]/80 max-w-[420px]">
                  Tell us about your project, and we’ll guide you towards the
                  most suitable next step.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-[24px] font-semibold  tracking-wide text-[var(--color-ink)]">
                    What happens next?
                  </h3>

                  <ul className="mt-4 space-y-3 text-[22px] text-[var(--color-ink)]/80">
                    <li className="flex gap-3">
                      <span className="font-medium text-[var(--color-brand-brown)]">1.</span>
                      We review your project details.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-[var(--color-brand-brown)]">2.</span>
                      We recommend the best journey for you.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-[var(--color-brand-brown)]">3.</span>
                      We arrange a discovery call.
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right form */}
          <FadeUp delay={0.15}>
            <form
              className="p-10 lg:p-14 bg-white flex flex-col gap-6"
              aria-label="Start your journey form"
            >
              <div>
                <label className="block text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-[8px] border border-[var(--color-ink)]/20 px-4 py-3 text-[16px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-[8px] border border-[var(--color-ink)]/20 px-4 py-3 text-[16px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Brief Description
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-[8px] border border-[var(--color-ink)]/20 px-4 py-3 text-[16px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div className="pt-4">
                <Button type="submit">
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}
