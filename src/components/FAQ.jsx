import React from 'react';

const faqs = [
  {
    q: 'What is “flashing” in crypto contexts?',
    a: 'It typically refers to temporary representations of assets or transactions used in demos, testing, or OTC scenarios. Claims vary widely and can be misleading—always proceed with caution and due diligence.'
  },
  {
    q: 'Is this site offering financial advice or services?',
    a: 'No. This is a design-forward, educational overview summarizing claims found in public materials. It does not provide services, advice, or endorsements.'
  },
  {
    q: 'Are these tools legal and safe to use?',
    a: 'Legality, risk, and platform policies vary by jurisdiction and provider. Always verify the legitimacy of any tool and comply with applicable laws and exchange rules before conducting any activity.'
  },
  {
    q: 'Does this page connect to any blockchain or backend?',
    a: 'No. There are no active transactions here—this is purely a static UI demonstration built with a 3D Spline hero and Tailwind styling.'
  }
];

const FAQ = () => {
  return (
    <div id="faq" className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
      <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {faqs.map((item) => (
          <details key={item.q} className="group p-6 open:bg-white/5">
            <summary className="cursor-pointer list-none text-base font-medium text-white">
              {item.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
