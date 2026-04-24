import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import TeamTemplateHeader from "../components/team/TeamTemplateHeader";
import TeamTemplatePostsSection from "../components/team/TeamTemplatePostsSection";
import { getTeamMemberBySlug } from "../components/team/teamData";
import SiteFooter from "../components/shared/SiteFooter";

function TeamTemplatePage() {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <TeamTemplateHeader member={member} />
      <TeamTemplatePostsSection member={member} />
      <SiteFooter />
    </div>
  );
}

export default TeamTemplatePage;
