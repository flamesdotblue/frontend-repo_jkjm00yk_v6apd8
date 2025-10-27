import React from 'react';
import { Rocket, Shield, Wallet, Server } from 'lucide-react';

const tools = [
  {
    name: 'BTC Flash Core',
    icon: Rocket,
    description:
      'High daily limits and long durations reported in community write-ups; often referenced for testing large flows. This content is informational only.',
    highlights: ['Up to 10,000 BTC daily (claimed)', 'Duration up to 100 days', 'BTC & USDT support'],
  },
  {
    name: 'OnChain Flash',
    icon: Server,
    description:
      'Multi-chain concept covering BTC, ETH, XRP, and Tron with configurable durations and security options as described in public materials.',
    highlights: ['Multi-chain support', 'Durations up to 365 days', 'Encryption & proxy options'],
  },
  {
    name: 'CryptoFlashingTool.com',
    icon: Shield,
    description:
      'Claims indistinguishable, spendable assets for testing and OTC contexts. Always verify legality and platform rules before any activity.',
    highlights: ['Spendability claims', 'Multiple wallet types', 'Multiple protocols'],
  },
  {
    name: 'Turbo Flash Tool',
    icon: Wallet,
    description:
      'Aims for versatility across several coins with reported compatibility with popular wallets; descriptions vary by source.',
    highlights: ['Multi-asset support', 'Wallet compatibility', 'All-sent amounts spendable (claimed)'],
  },
  {
    name: 'USDT FLASH APP',
    icon: Shield,
    description:
      'Described as enabling very large stablecoin flows with long validity periods. Treat these claims critically and ethically.',
    highlights: ['Up to $50M daily (claimed)', 'Validity ~300 days', 'Works with major exchanges (claimed)'],
  },
];

const ToolsGrid = () => {
  return (
    <div id="tools" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <div
            key={tool.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{tool.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{tool.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              {tool.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />
          </div>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
