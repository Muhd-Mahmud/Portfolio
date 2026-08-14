import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// TypeScript may complain about side-effect CSS imports when no declarations exist.
// Ignore the type error for this side-effect import.
// @ts-ignore
import "./index.css";
import App from "./App";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { PublicationsPage } from "@/pages/Publications";
import { ProjectsPage } from "@/pages/Projects";
import { BlogPage } from "@/pages/Blog";
import { ResumePage } from "@/pages/Resume";
import { ContactPage } from "@/pages/Contact";
import { LabPage } from "@/pages/Lab";
import { LabProjectPage } from "@/pages/LabProject";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="lab" element={<LabPage />} />
          <Route path="lab/:slug" element={<LabProjectPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
