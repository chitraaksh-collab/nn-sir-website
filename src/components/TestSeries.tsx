import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Laptop,
  CheckCircle2,
  Clock,
  BarChart3,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { TEST_SERIES_DATA, TEST_SERIES_PORTAL_URL, FACULTY_DATA } from '../data/contentData';

interface TestSeriesProps {
  onNavigate: (sectionId: string) => void;
  onSelectProgram?: (programId: string) => void;
}

export default function TestSeries({ onNavigate, onSelectProgram }: TestSeriesProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'features'>('preview');

  return (
    <section id="test-series" className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Math Grid Pattern */}
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-amber-500"></span>
            <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest font-mono">
              Computer-Based Test (CBT) Engine
            </span>
            <span className="h-1 w-6 bg-amber-500"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Online CBT Test Series &amp; Portal
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Real NTA JEE Main and IIT JEE Advanced exam simulation designed to eliminate exam fear, train calculation speed, and ensure zero negative marking.
          </p>
        </div>

        {/* Hero Portal Launch Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-sm bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-slate-800 text-white p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Subtle grid on banner */}
          <div className="absolute inset-0 math-grid opacity-15 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Portal Active &amp; Live
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] font-mono uppercase tracking-wider">
                  <Laptop className="w-3 h-3" />
                  nn-sir-cbt.onrender.com
                </span>
                <span className="px-2.5 py-1 rounded-sm bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  JEE Main &amp; Advanced Patterns
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Launch the NN Sir CBT Test Portal
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Access your scheduled mock tests, chapter-wise topic drills, and comprehensive performance scorecards on the official Computer-Based Test portal.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="btn-launch-cbt-portal"
                  href={TEST_SERIES_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 text-xs font-black uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 group cursor-pointer"
                >
                  <Laptop className="w-4 h-4 text-slate-950" />
                  <span>Open Test Series Portal</span>
                  <ExternalLink className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  id="btn-enquire-test-access"
                  onClick={() => onNavigate('contact')}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Student Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="p-4 sm:p-5 rounded-sm bg-white/5 border border-white/10 backdrop-blur-xs space-y-3 font-mono text-xs">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>Portal Quick Info</span>
                  <span className="text-emerald-400">Online</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="text-slate-400">Exam Engine:</span>
                  <span className="font-semibold text-white">NTA JEE / Advanced</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="text-slate-400">Curated By:</span>
                  <span className="font-semibold text-amber-300">Mr. Niranjan Naik (IITD)</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="text-slate-400">Analytics:</span>
                  <span className="font-semibold text-sky-300">Rank &amp; Time Diagnostics</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="text-slate-400">Web Portal:</span>
                  <a
                    href={TEST_SERIES_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Direct Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive CBT Interface Simulation Box */}
        <div className="mb-14 rounded-sm bg-slate-900 border border-slate-800 text-slate-100 shadow-xl overflow-hidden">
          {/* Top Bar simulating real CBT browser window */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                JEE Advanced CBT Simulation — Paper 1 (Mathematics)
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-sm border border-amber-400/20">
                <Clock className="w-3.5 h-3.5" />
                <span>Time Left: 02:41:35</span>
              </div>
              <a
                href={TEST_SERIES_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 uppercase tracking-wider"
              >
                <span>Live Test Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* CBT Screen Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Question Workspace */}
            <div className="lg:col-span-8 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                <span className="font-bold text-white uppercase tracking-wider">
                  Question No. 14 • Single Correct Type (+3, -1)
                </span>
                <span className="text-sky-400 font-semibold">Subject: Mathematics (Calculus)</span>
              </div>

              {/* Sample Question Math Formulation */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Let <span className="font-mono text-amber-300">f: [0, ∞) → ℝ</span> be a continuous function such that
                </p>
                <div className="p-3.5 rounded-sm bg-slate-950/80 border border-slate-800 font-mono text-sm text-sky-300 overflow-x-auto">
                  f(x) = 1 + ∫₀ˣ (t · f(t)) dt &nbsp; for all x ≥ 0
                </div>
                <p className="text-sm text-slate-200">
                  Then the value of <span className="font-mono text-amber-300">ln(f(2))</span> is equal to:
                </p>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-sm bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-3 hover:border-slate-700 cursor-pointer">
                    <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-bold">A</span>
                    <span>1</span>
                  </div>
                  <div className="p-3 rounded-sm bg-sky-950/50 border border-sky-600 text-white flex items-center gap-3 cursor-pointer">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold">B</span>
                    <span className="font-bold text-sky-200">2 (Selected)</span>
                  </div>
                  <div className="p-3 rounded-sm bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-3 hover:border-slate-700 cursor-pointer">
                    <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-bold">C</span>
                    <span>4</span>
                  </div>
                  <div className="p-3 rounded-sm bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-3 hover:border-slate-700 cursor-pointer">
                    <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-bold">D</span>
                    <span>e²</span>
                  </div>
                </div>
              </div>

              {/* Bottom control strip */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-sm bg-slate-800 text-slate-300 uppercase tracking-wider text-[10px]">
                    Save &amp; Next
                  </span>
                  <span className="px-3 py-1.5 rounded-sm bg-purple-950/80 border border-purple-500/40 text-purple-300 uppercase tracking-wider text-[10px]">
                    Mark for Review
                  </span>
                </div>
                <a
                  href={TEST_SERIES_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider"
                >
                  <span>Practice On Real Engine</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Question Palette Sidebar */}
            <div className="lg:col-span-4 p-6 sm:p-7 bg-slate-950/60 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Question Palette
                </span>
                <span className="text-[10px] font-mono text-slate-500">30 Questions</span>
              </div>

              {/* Palette Legend */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-xs bg-emerald-500"></span>
                  <span>Answered (8)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-xs bg-rose-500"></span>
                  <span>Not Answered (2)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-xs bg-purple-500"></span>
                  <span>Review (3)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-xs bg-slate-700"></span>
                  <span>Not Visited (17)</span>
                </div>
              </div>

              {/* 30-button Question Grid */}
              <div className="grid grid-cols-6 gap-1.5 font-mono text-[11px] pt-1">
                {Array.from({ length: 30 }).map((_, idx) => {
                  const qNum = idx + 1;
                  let bg = 'bg-slate-800 text-slate-400 border border-slate-700';
                  if (qNum <= 8) bg = 'bg-emerald-600 text-white font-bold';
                  else if (qNum === 9 || qNum === 10) bg = 'bg-rose-600 text-white font-bold';
                  else if (qNum === 11 || qNum === 12 || qNum === 13) bg = 'bg-purple-600 text-white font-bold';
                  else if (qNum === 14) bg = 'bg-sky-500 text-slate-950 font-black ring-2 ring-sky-300';

                  return (
                    <div
                      key={qNum}
                      className={`h-7 rounded-xs flex items-center justify-center transition-all ${bg}`}
                    >
                      {qNum}
                    </div>
                  );
                })}
              </div>

              {/* Direct Portal Jump */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <p className="text-[11px] text-slate-400 leading-snug">
                  Experience full simulated timer tests with instant result analysis and rank generation.
                </p>
                <a
                  href={TEST_SERIES_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Go to Test Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of NN Sir Test Series */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {TEST_SERIES_DATA.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-sm bg-slate-50 border border-slate-200 border-l-4 border-l-sky-600 hover:shadow-md transition-all group"
            >
              <div className="w-9 h-9 rounded-sm bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 mb-3 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                {idx === 0 && <Laptop className="w-4 h-4" />}
                {idx === 1 && <Layers className="w-4 h-4" />}
                {idx === 2 && <BarChart3 className="w-4 h-4" />}
                {idx === 3 && <Award className="w-4 h-4" />}
              </div>
              <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cohort-Wise Test Series Packages */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900">
              Test Series Formats by Target Cohort
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Every student enrolled in our offline (Dwarka) or live online batches receives full integrated access to the CBT portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEST_SERIES_DATA.seriesTiers.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-sm bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-sky-50 text-sky-800 border border-sky-200">
                      {tier.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-700">
                      {tier.testsCount}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold uppercase text-slate-900 tracking-tight">
                    {tier.name}
                  </h4>

                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {tier.target}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {tier.focus}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={TEST_SERIES_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 uppercase tracking-wider flex items-center gap-1 group"
                  >
                    <span>Open in Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={() => {
                      if (onSelectProgram) {
                        onSelectProgram(idx === 0 ? 'class-11' : idx === 1 ? 'class-12' : 'droppers');
                      } else {
                        onNavigate('contact');
                      }
                    }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider"
                  >
                    Enquire Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Direct Redirection */}
        <div className="p-6 sm:p-8 rounded-sm bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-tight">
              Ready to Test Your JEE Mathematics Preparation?
            </h4>
            <p className="text-xs text-slate-600">
              Sign in to the CBT portal to attempt scheduled tests, check solution keys, and view rank cards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="bottom-cbt-redirect"
              href={TEST_SERIES_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Visit Portal (nn-sir-cbt)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              Contact Sir
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
