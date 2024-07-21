import Banner from "@/layouts/Banner/Banner";
import Header from "@/layouts/Header/Header";
import SkillAndTechnology from "@/layouts/SkillAndTechnology/SkillAndTechnology";
import Education from "@/layouts/Education/Education";
import Projects from "@/layouts/Projects/Projects";
import Certificates from "@/layouts/Certificates/Certificates";
import WorkExperience from "@/layouts/WorkExperience/WorkExperience";
import Footer from "@/layouts/Footer/Footer";
import CopyRight from "@/layouts/CopyRight/CopyRight";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Education />
      <Certificates />
      <SkillAndTechnology />
      <Projects />
      <WorkExperience />
      <Footer />
      <CopyRight />
    </main>
  );
}
