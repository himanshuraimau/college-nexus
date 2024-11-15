import {
    Leaf,
    Sparkles,
    Shell,
    Calendar,
    MapPin,
    Github,
    Code,
    FileJson,
    Server,
    Database,
    Boxes,
    GitBranch,
    Globe,
    Bot,
    Cpu,
    Braces,
    CheckCheck
  } from "lucide-react";


export const weeklyTopics = [
    { topic: "Git and GitHub", icon: Github,covered: true },
    { topic: "HTML & CSS", icon: Code,covered: true },
    { topic: "JavaScript Basics", icon: Braces,covered: true },
    { topic: "Advanced JavaScript", icon: FileJson ,covered:false},
    { topic: "JavaScript Projects & Advanced Concepts", icon: Boxes,covered:false },
    { topic: "Linux and Dual Booting", icon: Shell,covered:false },
    { topic: "Competitive Programming & DSA", icon: Cpu,covered:false },
    { topic: "Node.js", icon: Server,covered:false },
    { topic: "HTTP & Server Fundamentals", icon: Globe ,covered:false},
    { topic: "Databases (SQL)", icon: Database,covered:false },
    { topic: "Express.js", icon: Server,covered:false },
    { topic: "Backend Project", icon: Boxes,covered:false },
    { topic: "React Basics & Projects", icon: Boxes ,covered:false},
    { topic: "Advanced React & Projects", icon: Boxes ,covered:false},
    { topic: "Advanced Git & Deployment", icon: GitBranch,covered:false },
    { topic: "Open Source Contributions", icon: Github ,covered:false},
    { topic: "Next.js", icon: Server ,covered:false},
    { topic: "Generative AI Projects", icon: Bot,covered:false },
  ];

export const topicResources = {
    "Git and GitHub": {
      notes: [
        { title: "Git Basics", url: "https://example.com/git-basics" },
        { title: "GitHub Workflow", url: "https://example.com/github-workflow" },
      ],
      assignments: [
        { title: "Create a Repository", url: "https://example.com/git-assignment-1" },
        { title: "Collaborate on a Project", url: "https://example.com/git-assignment-2" },
      ],
      extraResources: [
        { title: "Git Cheat Sheet", url: "https://example.com/git-cheat-sheet" },
        { title: "GitHub Learning Lab", url: "https://lab.github.com/" },
      ],
    },
    "HTML & CSS": {
      notes: [
        { title: "HTML Structure", url: "https://example.com/html-structure" },
        { title: "CSS Fundamentals", url: "https://example.com/css-fundamentals" },
      ],
      assignments: [
        { title: "Build a Simple Webpage", url: "https://example.com/html-css-assignment-1" },
        { title: "Create a Responsive Layout", url: "https://example.com/html-css-assignment-2" },
      ],
      extraResources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
        { title: "CSS Tricks", url: "https://css-tricks.com/" },
      ],
    },
    // Add more topics here...
  }