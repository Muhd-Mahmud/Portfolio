import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { getLabProject } from "@/data/lab-projects";
import { ArrowLeft } from "lucide-react";

export function LabProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getLabProject(slug) : undefined;

  return (
    <div className="min-h-screen bg-black text-white relative">
      <WavyBackground className="w-full">
        <div className="pt-28 px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/lab"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Lab
            </Link>

            <Card className="mt-4 w-full bg-black/[0.96] relative overflow-hidden">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="p-8 md:p-12">
                {project ? (
                  <>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {project.focus}
                    </div>
                    <h1 className="mt-4 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      {project.title}
                    </h1>
                    <p className="mt-2 text-sm text-white/60">
                      {project.morphology} · {project.simulation}
                    </p>
                    <p className="mt-6 max-w-2xl text-lg text-neutral-300">
                      {project.overview}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
                      <p className="text-white/70">
                        Full write-up, build log, demo video, and code are on the way.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
                        Coming soon
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      Project not found
                    </h1>
                    <p className="mt-4 text-neutral-300">
                      That project doesn't exist yet. Head back to the Lab to browse the
                      12-week roadmap.
                    </p>
                    <Link
                      to="/lab"
                      className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                    >
                      Back to Lab
                    </Link>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
