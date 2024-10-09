import { ProfileCard } from "@/components/ProfileCard";
import { Github, Linkedin, Mail } from "lucide-react";
/* https://simpleicons.org/?q=linkedin */

const links = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jacob-wasik",
    Icon: <Linkedin />,
  },
  { name: "GitHub", url: "https://github.com/Eghizio", Icon: <Github /> },
  { name: "Email", url: "mailto:eghizio@gmail.com", Icon: <Mail /> },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yourusername",
  //   Icon: <Twitter />,
  // },
];

export default function Home() {
  return (
    <main>
      <ProfileCard
        name="Jakub Wąsik"
        description="Full-Stack Software Engineer | Mentor IT | Lecturer | Public Speaker"
        links={links}
      />
    </main>
  );
}
