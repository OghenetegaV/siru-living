import Link from "next/link";

export const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h2 className="mt-10 text-[32px] sm:text-[36px] font-semibold text-[var(--color-brand-brown)]">
        {children}
      </h2>
    ),
    h2: ({ children }: any) => (
      <h3 className="mt-10 text-[26px] sm:text-[30px] font-semibold text-[var(--color-brand-brown)]">
        {children}
      </h3>
    ),
    h3: ({ children }: any) => (
      <h4 className="mt-8 text-[22px] sm:text-[24px] font-semibold text-[var(--color-brand-brown)]">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mt-5 text-[18px] leading-relaxed text-[var(--color-ink)]/80">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="mt-8 rounded-[10px] border-l-[4px] border-[var(--color-brand-brown)]/50 bg-white/60 p-6 text-[18px] italic text-[var(--color-ink)]/80">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-5 list-disc pl-6 text-[18px] leading-relaxed text-[var(--color-ink)]/80">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-5 list-decimal pl-6 text-[18px] leading-relaxed text-[var(--color-ink)]/80">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => <li className="mt-2">{children}</li>,
    number: ({ children }: any) => <li className="mt-2">{children}</li>,
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-[var(--color-ink)]">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      const isExternal = /^https?:\/\//.test(href);

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-brown)] underline underline-offset-4 hover:opacity-80"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-[var(--color-brand-brown)] underline underline-offset-4 hover:opacity-80"
        >
          {children}
        </Link>
      );
    },
  },
};
