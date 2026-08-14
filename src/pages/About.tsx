import profilePic from "@/assets/profile.jpg";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const FACTS = [
  { label: "Based in", value: "Belgorod, Russia" },
  { label: "Studying", value: "B.Eng. Robotics & Mechatronics" },
  { label: "University", value: "Belgorod State (НИУ «БелГУ»)" },
  { label: "Founder of", value: "CityWeave" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <WavyBackground className="w-full">
        <div className="pt-28 px-6 pb-20">
          <div className="mx-auto max-w-5xl">
            <Card className="w-full bg-black/[0.96] border border-white/10 relative overflow-hidden p-8 md:p-12">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start">
                {/* Profile photo */}
                <div className="mx-auto md:mx-0">
                  <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-2xl border border-white/15 bg-neutral-900">
                    <img
                      src={profilePic}
                      alt="Mahmud Muhammed"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                    <a
                      href="https://github.com/Muhd-Mahmud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="https://linkedin.com/in/mahmud-muhammed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="mailto:mahmudmuhammed811@gmail.com"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    About me
                  </div>
                  <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Mahmud Muhammed
                  </h1>

                  <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed">
                    <p>
                      I'm a Robotics and Mechatronics Engineering student who learns by
                      building. My focus is autonomous systems — how machines perceive,
                      decide, and coordinate — with a particular pull toward multi-agent
                      robotics, UAV swarms, SLAM, and embodied AI on real hardware.
                    </p>
                    <p>
                      Right now I'm founding{" "}
                      <span className="text-white">CityWeave</span>, applying a UAV swarm
                      framework to city-scale 3D mapping; contributing to embodied-AI and
                      industrial humanoid work at{" "}
                      <span className="text-white">Flolabs</span>; and researching
                      decentralized UAV swarm coordination at{" "}
                      <span className="text-white">KFUPM</span>. Alongside that I lead the
                      Nigerian student community in Belgorod and run media and public
                      relations for ANSSIR.
                    </p>
                    <p>
                      My approach is deliberate: build the smallest version that works,
                      debug it, measure it, document it, then move on. I'd rather ship a
                      complete miniature research system than a pile of half-finished
                      features. My simulation lab is where that philosophy lives.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                    {FACTS.map((f) => (
                      <div
                        key={f.label}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        <div className="text-xs uppercase tracking-wide text-white/50">
                          {f.label}
                        </div>
                        <div className="mt-1 text-sm text-white/90">{f.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* What I'm looking for */}
                  <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-5">
                    <h2 className="text-lg font-semibold text-white">
                      What I'm looking for
                    </h2>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      I'm open to research internships and collaborations in autonomous
                      systems, multi-robot coordination, and embodied AI, and to graduate
                      research opportunities in these areas. If you're working on something
                      in this space, I'd like to hear about it.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="mailto:mahmudmuhammed811@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300 transition-colors hover:bg-blue-500/20"
                      >
                        <Mail size={14} /> Get in touch
                      </a>
                      <a
                        href={`${import.meta.env.BASE_URL}Muhammed_Mahmud_CV.pdf`}
                        download
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 transition-colors hover:bg-white/10"
                      >
                        <Download size={14} /> Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
