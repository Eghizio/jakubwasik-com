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
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <ProfileCard
        name="Jakub Wąsik"
        description="Your tagline or brief description"
        links={links}
      />
    </main>
  );
}
