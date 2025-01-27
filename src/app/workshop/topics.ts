import { Leaf, Sparkles, Shell, Calendar, MapPin, Github, Code, FileJson, Server, Database, Boxes, GitBranch, Globe, Bot, Cpu, Braces, CheckCheck } from 'lucide-react';

export interface WeeklyTopic {
  topic: string;
  icon: React.ElementType;
  covered: boolean;
}

export interface Resource {
  title: string;
  url: string;
}

export interface TopicResources {
  notes: Resource[];
  assignments: Resource[];
  extraResources: Resource[];
}

export const weeklyTopics: WeeklyTopic[] = [
  { topic: "Git and GitHub", icon: Github, covered: true },
  { topic: "HTML & CSS", icon: Code, covered: true },
  { topic: "JavaScript Intro", icon: Braces, covered: true },
  { topic: "JavaScript Basics 1", icon: FileJson, covered: true },
  { topic: "JavaScript Basics 2", icon: Boxes, covered: true },
  { topic: "JavaScript Advance+ Projects", icon: CheckCheck, covered: true },
  // { topic: "Linux and Dual Booting", icon: Shell, covered: false },
  // { topic: "Competitive Programming & DSA", icon: Cpu, covered: false },
  // { topic: "Node.js", icon: Server, covered: false },
  // { topic: "HTTP & Server Fundamentals", icon: Globe, covered: false },
  // { topic: "Databases (SQL)", icon: Database, covered: false },
  // { topic: "Express.js", icon: Server, covered: false },
  // { topic: "Backend Project", icon: Boxes, covered: false },
  // { topic: "React Basics & Projects", icon: Boxes, covered: false },
  // { topic: "Advanced React & Projects", icon: Boxes, covered: false },
  // { topic: "Advanced Git & Deployment", icon: GitBranch, covered: false },
  // { topic: "Open Source Contributions", icon: Github, covered: false },
  // { topic: "Next.js", icon: Server, covered: false },
  { topic: "Generative AI Projects", icon: Bot, covered: false },
];

export const topicResources: Record<string, TopicResources> = {
  "Git and GitHub": {
    notes: [
      { title: "Git Basics", url: "https://github.com/himanshuraimau/cn-workshop/blob/main/week1/git_github.pdf" },
    ],
    assignments: [

    ],
    extraResources: [
      { title: "Video on Git and Github", url: "https://youtu.be/RDxQEzXN8AU" },
      { title: "Git Cheat Sheet", url: "https://github.com/himanshuraimau/cn-workshop/blob/main/week1/git-cheat-sheet-education.pdf" },
      { title: "Chai aur code docs", url: "https://docs.chaicode.com/git-and-github/" },
      { title: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
    ],
  },
  "HTML & CSS": {
    notes: [
      { title: "Notion Notes", url: "https://scalloped-magazine-6c1.notion.site/HTML-AND-CSS-1354ee77527480ef88a9cfecb5e99b64?pvs=4" },
    ],
    assignments: [
      { title: "Assignment 1", url: "https://github.com/himanshuraimau/cn-workshop/tree/main/week2/assignment/assig1" },
      { title: "Assignment 2", url: "https://github.com/himanshuraimau/cn-workshop/tree/main/week2/assignment/assig2" }
    ],
    extraResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { title: "CSS Tricks", url: "https://css-tricks.com/" },
      { title: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
      { title: "Grid Garden", url: "https://cssgridgarden.com/" },
      { title: "HTML & CSS Cheatsheet", url: "https://htmlcheatsheet.com/" },


    ],
  },
  "JavaScript Intro": {
    notes: [
      { title: "Notion Notes", url: "https://scalloped-magazine-6c1.notion.site/JAVASCRIPT-13b4ee77527480db9d72f4fe06987115?pvs=4" },
    ],
    assignments: [
      { title: "Assignment 1", url: "https://github.com/himanshuraimau/cn-workshop/tree/main/week4/assignment" },
    ],
    extraResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "W3Schools", url: "https://www.w3schools.com/" },
      { title: "Codecademy", url: "https://www.codecademy.com/learn/introduction-to-javascript" },
      { title: "JavaScript Cheatsheet", url: "https://htmlcheatsheet.com/js/" },
    ],
  },
  "JavaScript Basics 1": {
    notes: [
      { title: "Javascript.info", url: "https://javascript.info/" },
    ],
    assignments: [
      { title: "Assignment", url: "https://github.com/himanshuraimau/cn-workshop/tree/main/week4/assignment" },
    ],
    extraResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "W3Schools", url: "https://www.w3schools.com/" },
      { title: "Codecademy", url: "https://www.codecademy.com/learn/introduction-to-javascript" },
      { title: "JavaScript Cheatsheet", url: "https://htmlcheatsheet.com/js/" },
    ],
  },
  "JavaScript Basics 2": {
    notes: [
      { title: "Javascript.info", url: "https://javascript.info/" },
    ],
    assignments: [
      { title: "Assignment", url: "https://github.com/himanshuraimau/cn-workshop/tree/main/week4/assignment" },
    ],
    extraResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "W3Schools", url: "https://www.w3schools.com/" },
      { title: "Codecademy", url: "https://www.codecademy.com/learn/introduction-to-javascript" },
      { title: "JavaScript Cheatsheet", url: "https://htmlcheatsheet.com/js/" },
    ],

  },
  "JavaScript Advance+ Projects": {
    notes: [
      { title: "Javascript.info", url: "https://javascript.info/" },
    ],
    assignments: [],
    extraResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "W3Schools", url: "https://www.w3schools.com/" },
      { title: "Codecademy", url: "https://www.codecademy.com/learn/introduction-to-javascript" },
      { title: "JavaScript Cheatsheet", url: "https://htmlcheatsheet.com/js/" },
    ],


  }

};