export type Program = {
  slug: string
  number: string
  title: string
  shortTitle: string
  image: string
  tagline: string
  focus: string[]
  paragraphs: string[]
}

export const programs: Program[] = [
  {
    slug: "ethnography-languages-cultures",
    number: "01",
    title: "Ethnography, Languages & Cultures",
    shortTitle: "Ethnography",
    image: "/Ethnography2-scaled.jpg",
    tagline: "Understanding how and why people think, behave, and interact — from the standpoint of those studied.",
    focus: ["Emic (insider) perspective", "Historical & local context", "Social forces & structures", "User-centred policy design"],
    paragraphs: [
      "African Academic Research Program for Ethnography, Languages and Cultures is a program dedicated to understanding how and why people think, behave, and interact as they do in Africa, and most importantly, to understand these things from the standpoint of those studied (known as an “emic perspective” or “insider standpoint”).",
      "Thus, the goal of the research is not just to develop an understanding of practices and interactions, but also what those things mean to the African population. Importantly, we also work to situate what we find in historical and local context, and to identify the connections between our findings and the larger social forces and structures of society.",
      "Combining our versed understanding of human diversity and research skills for collecting and making sense of information and communicating effectively, this program uses its collective expertise to provide policy-makers in African countries and elsewhere with impartial research findings and analyses to inform policy decisions when creating user-centered design projects.",
    ],
  },
  {
    slug: "politics-governance",
    number: "02",
    title: "Politics & Governance",
    shortTitle: "Governance",
    image: "/Politics-governance2-scaled.jpg",
    tagline: "Deepening our understanding of the forms and nature of political action in Africa.",
    focus: ["Political phenomena in Africa", "Theoretical tools", "Qualitative & quantitative methods", "Policy recommendations"],
    paragraphs: [
      "African Academic Research Institute for Politics and Governance is a classical program created to study political phenomena in Africa. Our goal is to deepen our understanding of the forms and nature of political actions in Africa and to develop theoretical tools for interpreting politically meaningful phenomena.",
      "Drawing from our strengths in qualitative and quantitative research skills and also with our analytical and critical-thinking skills, we provide logical conclusions from our findings to enable policy makers in Africa to make favorable decisions for their countries.",
    ],
  },
  {
    slug: "trade-economy-finance",
    number: "03",
    title: "Trade, Economy & Finance",
    shortTitle: "Economy",
    image: "/Trade-Economy-finance2-scaled.jpg",
    tagline: "Understanding economic impacts, trade relationships, and how financial policy affects different groups in Africa.",
    focus: ["Economic impact", "Trade relationships", "Financial policy", "Training future policy-makers"],
    paragraphs: [
      "African Academic Research Institute for Trade, Economics and Finance program was founded in order to deeply understand economic impacts and trade relationships in Africa. It also aims to study how financial policies affect different groups in Africa.",
      "With our strong background in other social sciences and good understanding of the complexity of the economic systems in Africa, this research uses its collective expertise to provide state economic policy-makers in Africa and elsewhere with quality research findings and analyses to inform economic and financial policy decisions. This program also provides facilitation and convening services around important economic policy issues.",
      "We work with various academic programs in different universities in Africa to train tomorrow’s economic policy-makers and financial services and trade policy researchers.",
    ],
  },
  {
    slug: "population-health",
    number: "04",
    title: "Population Health",
    shortTitle: "Health",
    image: "/Population-Health2-scaled.jpg",
    tagline: "Better health outcomes at lower cost, measured at the level of the population.",
    focus: ["Health inequalities", "Resource prioritisation", "Health promotion ethics", "Health policy & economics"],
    paragraphs: [
      "African Academic Research Institute for Population Health is a program dedicated to the development of systematic and transparent ways of delivering health services to improve the health status of the African population at a prospective price, ultimately delivering better outcomes at lower cost at the level of the population.",
      "Questions of interest range from the theoretical to the applied, for example how to conceptualize, measure and evaluate health inequalities or disease severity; how to prioritize resources between disease areas, rural and urban patients, and age cohorts or generations; the acceptability of paternalistic health promotion measures; and many others.",
      "Our approach emphasizes collaboration and interdisciplinarity, and seeks to inform and be informed by other fields of inquiry such as general ethics and philosophy, health policy, and health economics. We welcome innovative questions and methods and ambitious thinking, and value clear presentation of ideas, potentially using formal tools.",
    ],
  },
  {
    slug: "legal-system",
    number: "05",
    title: "Legal System",
    shortTitle: "Law",
    image: "/Legal-System2-scaled.jpg",
    tagline: "How laws maintain order, resolve conflict, and protect liberties across African countries.",
    focus: ["Judicial reasoning", "Fairness through consistency", "Conflict resolution", "Rights & liberties"],
    paragraphs: [
      "African Academic Research Institute for Legal System was developed with the goal of establishing a set of standards that outline what is to be considered minimally acceptable behavior. In our research we try to leverage past judicial reasoning, while also promoting fairness through consistency. We also look at how laws are used to maintain order in different African countries.",
      "Conflicts are to be expected given people’s varying needs, desires, objectives, value systems, and perspectives. Our research provides a formal means for resolving conflicts through the courts, in addition to the federal court and individual state systems.",
      "In African countries, constitutions and state laws provide people with many liberties and rights. Our research looks at how laws operate with the purpose and function of protecting these liberties and rights from violations by persons, companies, governments, or other entities in Africa.",
    ],
  },
  {
    slug: "science-technology-engineering-mathematics",
    number: "06",
    title: "Science, Technology, Engineering & Mathematics",
    shortTitle: "Science & Tech",
    image: "/Science-technology2.jpg",
    tagline: "Improving the positive impact of new scientific innovation in Africa.",
    focus: ["Technology policy", "Data science", "Artificial intelligence", "Local to international impact"],
    paragraphs: [
      "African Academic Research Institute for Science, Technology, Engineering & Mathematics was created with the aim of improving the positive impacts of new scientific innovations in Africa.",
      "This research activity evaluates and addresses the impacts of technology policy at local, national, and international levels. In the area of science and technology, this program plays a key role in advancing data science and artificial intelligence to support and improve the daily activities of the population.",
      "Our approach emphasizes collaboration and interdisciplinarity, and seeks to inform and be informed by other fields of inquiry such as general ethics and philosophy, health policy, and health economics. We welcome innovative questions and methods and ambitious thinking, and value clear presentation of ideas, potentially using formal tools.",
    ],
  },
]

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug)
}

export const contactEmail = "hello@aarinst.org"
