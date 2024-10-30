type TeamMember = {
  name: string;
  photo: string;
  branch: string;
  year: number;
  skills: string[];
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "HIMANSHU RAI",
    photo: "/himanshu.jpg?height=150&width=150",
    branch: "AI & DS",
    year: 2,
    skills: ["FULL STACK","DEVOPS"],
    github: "https://github.com/himanshuraimau",
    linkedin: "https://linkedin.com/in/https://www.linkedin.com/in/himanshu-rai-246121278/",
    twitter: "https://x.com/himanshura_i",
    website: "https://enghimanshu.tech",
  },
  {
    name: "Jane Smith",
    photo: "/placeholder.svg?height=100&width=100",
    branch: "Information Technology",
    year: 2,
    skills: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    website: "https://janesmith.com",
  },
  // Add more team members here
];
