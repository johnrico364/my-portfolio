import { profile, projects, skillGroups } from "./data/portfolio";
import { usePortfolioTheme } from "./hooks/usePortfolioTheme";
import BackgroundBlurs from "./components/BackgroundBlurs";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const { theme, toggleTheme } = usePortfolioTheme();

  return (
    <div className="portfolio-shell relative min-h-screen overflow-hidden text-base-content">
      <BackgroundBlurs />

      <Header name={profile.name} theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10">
        <HeroSection profile={profile} />

        <SkillsSection skillGroups={skillGroups} />

        <ProjectsSection projects={projects} theme={theme} />

        <ServicesSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
