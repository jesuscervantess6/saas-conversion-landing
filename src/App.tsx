import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Check,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  Layers,
  Clock
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How fast can our team migrate to NexFlow?',
    answer:
      'Most teams import their existing workspaces and connect Slack, GitHub, and Stripe in under 15 minutes using our one-click integrations—zero engineering overhead required.'
  },
  {
    question: 'Can we switch between monthly and annual billing anytime?',
    answer:
      'Yes. You can upgrade, downgrade, or switch to annual billing (saving 20%) at any moment from your workspace settings. Unused time is automatically prorated.'
  },
  {
    question: 'Is our company data encrypted and SOC2 compliant?',
    answer:
      'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). NexFlow is SOC2 Type II certified and GDPR ready out of the box.'
  },
  {
    question: 'Do you offer a free trial without a credit card?',
    answer:
      'Every plan includes a full-featured 14-day free trial. No credit card is required to start, and you can cancel or export your data anytime.'
  }
];

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <Zap className="h-5 w-5" />
            </div>
            <span>NexFlow</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#metrics" className="transition hover:text-white">Results</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#pricing" className="text-sm font-medium text-slate-300 transition hover:text-white">
              Sign in
            </a>
            <a
              href="#demo"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-500"
            >
              Start Free Trial
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">Features</a>
              <a href="#metrics" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">Results</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">FAQ</a>
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NexFlow 2.0 is live — Automated Revenue Workflows</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
            Ship faster and convert{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              3x more leads
            </span>{' '}
            without busywork.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            NexFlow unifies your product analytics, automated onboarding, and customer billing into one fast workspace built for high-growth SaaS teams.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 sm:w-auto"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-base font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
            >
              View Live Pricing
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            14-day free trial · No credit card required · Cancel anytime
          </p>

          {/* Interactive Dashboard Preview Mockup */}
          <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/70 p-2 shadow-2xl shadow-indigo-950/50 backdrop-blur">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left">
              <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-medium text-slate-400">app.nexflow.io/overview</span>
                </div>
                <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  ● Live Sync Active
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4">
                  <p className="text-xs font-medium text-slate-400">Monthly Recurring Revenue</p>
                  <p className="mt-2 text-2xl font-bold text-white">$148,920</p>
                  <p className="mt-1 text-xs text-emerald-400">+28.4% vs last month</p>
                </div>
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4">
                  <p className="text-xs font-medium text-slate-400">Trial-to-Paid Conversion</p>
                  <p className="mt-2 text-2xl font-bold text-white">42.8%</p>
                  <p className="mt-1 text-xs text-emerald-400">+9.1% after automation</p>
                </div>
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4">
                  <p className="text-xs font-medium text-slate-400">Avg. Onboarding Time</p>
                  <p className="mt-2 text-2xl font-bold text-white">4m 12s</p>
                  <p className="mt-1 text-xs text-indigo-400">64% faster setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section id="metrics" className="border-y border-slate-800/80 bg-slate-900/40 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <p className="text-3xl font-extrabold text-white">12,000+</p>
            <p className="mt-1 text-sm text-slate-400">Active SaaS Teams</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">99.99%</p>
            <p className="mt-1 text-sm text-slate-400">Guaranteed Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">3.2x</p>
            <p className="mt-1 text-sm text-slate-400">Faster Lead Activation</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">4.9 / 5</p>
            <p className="mt-1 text-sm text-slate-400">Customer Rating on G2</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to scale revenue
            </h2>
            <p className="mt-4 text-slate-400">
              Replace five disconnected tools with a single platform engineered for speed and clarity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Real-Time Funnel Analytics</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Track every signup, activation milestone, and churn risk in real time without writing SQL queries.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Automated Playbooks</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Trigger personalized in-app checklists and Slack alerts the instant a high-intent lead signs up.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Instant Billing & Upgrades</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Native Stripe integration with self-serve plan upgrades, proration, and automated dunning recovery.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Enterprise-Grade Security</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Role-based access control, SSO, audit logs, and SOC2 Type II compliance built right in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="pricing" className="border-t border-slate-800/80 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-slate-400">
              Start free for 14 days. Switch plans or cancel anytime with one click.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-950 p-1.5">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  !annualBilling ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  annualBilling ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <div>
                <h3 className="text-lg font-semibold text-white">Starter</h3>
                <p className="mt-1 text-sm text-slate-400">For early-stage founders launching fast.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">${annualBilling ? '29' : '36'}</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Up to 2,500 monthly active users</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Core funnel analytics</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Slack & Email notifications</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Standard email support</li>
                </ul>
              </div>
              <a
                href="#demo"
                className="mt-8 block rounded-xl border border-slate-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start 14-Day Trial
              </a>
            </div>

            {/* Growth Plan (Highlighted) */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-indigo-500 bg-slate-900/90 p-8 shadow-2xl shadow-indigo-950/60">
              <span className="absolute -top-3.5 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">Growth</h3>
                <p className="mt-1 text-sm text-slate-300">For scaling SaaS teams optimizing conversion.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">${annualBilling ? '79' : '99'}</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Up to 25,000 monthly active users</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Unlimited automated playbooks</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Stripe & HubSpot 2-way sync</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> A/B onboarding experiments</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Priority 24/7 chat support</li>
                </ul>
              </div>
              <a
                href="#demo"
                className="mt-8 block rounded-xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
              >
                Start Free Trial
              </a>
            </div>

            {/* Scale Plan */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <div>
                <h3 className="text-lg font-semibold text-white">Scale</h3>
                <p className="mt-1 text-sm text-slate-400">For established organizations with custom needs.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">${annualBilling ? '199' : '249'}</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Unlimited active users</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> SAML SSO & SOC2 reports</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Custom warehouse exports</li>
                  <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-indigo-400" /> Dedicated customer success manager</li>
                </ul>
              </div>
              <a
                href="#demo"
                className="mt-8 block rounded-xl border border-slate-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Book Enterprise Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-800/80 px-6 py-4 text-sm leading-relaxed text-slate-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section id="demo" className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 p-8 text-center sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to accelerate your SaaS growth?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Join 12,000+ product teams turning signups into loyal paying customers with NexFlow.
            </p>

            {submitted ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-300">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>Workspace invite sent! Check your inbox to launch your trial.</span>
              </div>
            ) : (
              <form
                onSubmit={handleDemoSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
                >
                  Start Free Trial
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-10 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} NexFlow Inc. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;