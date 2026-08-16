import belgiImg from "@/assets/belgi.jpg";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { NowStatusCard } from "@/components/ui/now-card";
import { Timeline3D } from "@/components/ui/timeline";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WavyBackground className="w-full">
        <div className="pt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <Card className="w-full bg-black/[0.96] border border-white/10 relative overflow-hidden">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="relative h-[240px] sm:h-[300px] md:h-[460px] lg:h-[560px]">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
                <div className="pointer-events-none relative md:absolute md:inset-0 p-6 md:p-12 md:flex md:items-center">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Belgorod State University · Robotics & Mechatronics
                    </div>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      Mahmud Muhammed
                    </h1>
                    <div className="mt-2 text-sm md:text-base text-white/70">
                      Autonomous Systems | Embodied AI | Swarm Intelligence | SLAM | UAV Systems
                    </div>
                    <p className="mt-4 text-lg text-neutral-300 max-w-xl">
                      Robotics and Mechatronics Engineering student focused on autonomous systems, 
                      embodied AI, and multi-agent robotics. Founder of CityWeave, contributing to 
                      humanoid robotics at Flolabs, and researching UAV swarms at KFUPM.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Autonomous Systems", "Swarm Intelligence", "Embodied AI", "SLAM", "UAV Systems"].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    {/* Social & CV Download Buttons */}
                    <div className="pointer-events-auto mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={`${import.meta.env.BASE_URL}Muhammed_Mahmud_CV.pdf`}
                        download
                        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <Download size={14} /> Download CV
                      </a>
                      <a
                        href="https://github.com/Muhd-Mahmud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href="https://linkedin.com/in/mahmud-muhammed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="mailto:mahmudmuhammed811@gmail.com"
                        className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </WavyBackground>

            <div className="px-6 pt-10 pb-20">
        <div className="mx-auto max-w-6xl space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <NowStatusCard />
            </div>
            <div>
              <Card className="w-full bg-black/[0.96] border border-white/10 relative overflow-hidden p-10">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                <div className="mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Research interests
                  </h2>
                </div>
                <div className="flex flex-col gap-3 md:grid md:[grid-template-areas:'stack'] md:place-items-center md:gap-0 opacity-100 animate-in fade-in-0 duration-700 md:min-h-[320px]">
                  {[
                    {
                      title: "UAV & Multi-Robot Swarms",
                      description: "Decentralized coordination and exploration at scale.",
                      className:
                        "md:[grid-area:stack] md:hover:-translate-y-10 md:before:absolute md:before:w-[100%] md:before:outline-1 md:before:rounded-xl md:before:outline-white/20 md:before:h-[100%] md:before:content-[''] md:before:bg-blend-overlay md:before:bg-black/50 md:grayscale-[100%] md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
                    },
                    {
                      title: "SLAM & Cooperative 3D Mapping",
                      description: "Distributed perception fused into unified 3D maps.",
                      className:
                        "md:[grid-area:stack] md:translate-x-16 md:translate-y-10 md:hover:-translate-y-1 md:before:absolute md:before:w-[100%] md:before:outline-1 md:before:rounded-xl md:before:outline-white/20 md:before:h-[100%] md:before:content-[''] md:before:bg-blend-overlay md:before:bg-black/50 md:grayscale-[100%] md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
                    },
                    {
                      title: "Embodied AI & Humanoids",
                      description: "Perception-to-decision pipelines on real hardware.",
                      className:
                        "md:[grid-area:stack] md:translate-x-32 md:translate-y-20 md:hover:translate-y-10",
                    },
                    {
                      title: "Compute-Efficient Autonomy",
                      description: "Embedded decision systems and reinforcement learning.",
                      className:
                        "md:[grid-area:stack] md:translate-x-48 md:translate-y-28 md:hover:translate-y-16",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`relative z-10 flex h-auto w-full flex-col justify-between rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 transition-all duration-700 md:h-36 md:w-[22rem] md:-skew-y-[8deg] md:select-none md:after:absolute md:after:-right-1 md:after:top-[-5%] md:after:h-[110%] md:after:w-[20rem] md:after:bg-gradient-to-l md:after:from-black md:after:to-transparent md:after:content-[''] md:hover:z-30 md:hover:border-white/20 md:hover:bg-white/10 ${card.className}`}
                    >
                      <div>
                        <p className="text-lg font-medium text-white">{card.title}</p>
                      </div>
                      <p className="text-sm text-white/80 md:whitespace-nowrap">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Timeline - unchanged */}
          <section>
            <Timeline3D
              events={[
                // ... (your timeline events from previous code)
                // I'll keep it short for brevity, but you should paste the full list from earlier
                {
                  id: "t-prep",
                  date: "Preparatory Year",
                  title: "Honor Student & Russian Language Olympiad Winner",
                  description: "Preparatory year at Kursk State University.\nRecognized as Honor Student / Face of the Faculty.\nWinner of the Russian Language Olympiad.",
                  image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=60",
                  category: "Achievement",
                },
                {
                  id: "t-2023",
                  date: "Sep 2023",
                  title: "Started B.Eng. Robotics & Mechatronics",
                  description: "Enrolled at Belgorod State National Research University (НИУ «БелГУ»).\nAurora Scholarship recipient.\nBEA Scholarship Winner (Federal Government of Nigeria).",
                  image: belgiImg,
                  category: "Education",
                },
                {
                  id: "t-2024",
                  date: "Jan 2024",
                  title: "Joined ANSSIR Belgorod — P.R.O",
                  description: "Appointed Public Relations Officer for the 2024–2025 administration.\nMember of Media Team & Social Committee.\nBuilt a structured student database and grew the association's social media presence.",
                  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=60",
                  category: "Leadership",
                },
                {
                  id: "t-2025",
                  date: "Jan 2025",
                  title: "Head of Media Team & P.R.O — ANSSIR",
                  description: "Head of Media Team for general ANSSIR (2025–2026).\nRe-appointed Public Relations Officer for the 2025–2026 administration.\nLed public relations and represented the association to the public.",
                  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=60",
                  category: "Leadership",
                },
                {
                  id: "t-2026-1",
                  date: "Jan 2026",
                  title: "AI & Robotics Intern — Flolabs",
                  description: "Contributing to CAIPO embodied AI project (IoT) and industrial humanoid development.\nBuilt LED state management library (17 states) with Python GUI for ESP32-S3.",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=60",
                  category: "Experience",
                },
                {
                  id: "t-2026-2",
                  date: "2026",
                  title: "UAV Swarm Researcher — KFUPM",
                  description: "Conducting research on decentralized UAV swarm coordination under Prof. Ayman Muhammad Abdallah.\nDesigning multi-agent simulation environments for cooperative navigation.",
                  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60",
                  category: "Research",
                },
                {
                  id: "t-2026-3",
                  date: "2026",
                  title: "Founder — CityWeave",
                  description: "Startup applying AVCE UAV swarm framework to city-scale 3D mapping.\nReached 88.2% simulated coverage; patent filing in progress.\nPrepared seed-round pitch targeting $750K funding.",
                  image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=60",
                  category: "Startup",
                },
                {
                  id: "t-2026-4",
                  date: "Jun 2026",
                  title: "President — Nigerian Community in Belgorod",
                  description: "Leading the Nigerian student community in Belgorod.\nRepresenting students' interests, organizing cultural/academic events, and supporting new arrivals.",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=60",
                  category: "Leadership",
                },
              ]}
            />
          </section>

          {/* Toolbox */}
          <section>
            <Card className="w-full bg-black/[0.96] border border-white/10 relative overflow-hidden p-10">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Toolbox
                </h2>
                <div className="mt-3 grid gap-2 text-sm text-white/70 md:grid-cols-4">
                  <div>
                    <span className="text-white/90">Robotics:</span> ROS 2, Gazebo, PyBullet, CoppeliaSim, Isaac Sim
                  </div>
                  <div>
                    <span className="text-white/90">ML/RL:</span> Stable-Baselines3 (PPO), Scikit-learn, OpenCV, Open3D
                  </div>
                  <div>
                    <span className="text-white/90">Autonomy:</span> Swarm (Boids), A*, RRT, SLAM fundamentals
                  </div>
                  <div>
                    <span className="text-white/90">Languages:</span> Python, C++
                  </div>
                  <div>
                    <span className="text-white/90">Embedded:</span> ESP32-S3, Arduino, MSP430, TMC2209/DRV8833
                  </div>
                  <div>
                    <span className="text-white/90">CAD:</span> FreeCAD, URDF/Xacro
                  </div>
                </div>
              </div>
              <div className="relative">
                <OrbitingSkills />
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}