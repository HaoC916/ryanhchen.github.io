export type ProjectTone = 'fullstack' | 'cloud' | 'data' | 'backend'

export type Project = {
  slug: string
  title: string
  period: string
  category: string
  tone: ProjectTone
  /** One-line hook, shown on the card and the detail hero. */
  blurb: string
  /** Short bullet points, shown on the card and the detail page. */
  highlights: string[]
  tags: string[]
  /** Fuller write-up paragraphs for the detail page. */
  overview: string[]
  /** Optional links — render only when set. */
  repoUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'vancouver-land-value',
    title: 'Vancouver Land Value Prediction System',
    period: 'Jan 2026 – Apr 2026',
    category: 'Full-Stack · ML',
    tone: 'fullstack',
    blurb:
      'Punch in a Vancouver address and get back what the land underneath is likely worth — backed by real municipal data and a model that learned from it.',
    highlights: [
      'Cleaned and reshaped 1.5M+ property records into a training set the model could actually learn from.',
      'Wired the whole path together: a REST API serving predictions to a React UI where you explore estimates on a map.',
    ],
    tags: ['React', 'Python', 'REST API', 'Machine Learning'],
    overview: [
      'Land in Vancouver is famously hard to price, so I built a tool that takes an address and returns a grounded estimate of what the land underneath is worth — separate from whatever sits on top of it.',
      'The hard part was the data: over 1.5 million public property records, full of gaps and inconsistencies, that had to be cleaned and reshaped before a model could make sense of them. From there I trained the predictor, wrapped it in a REST API, and built a React front-end with a map so you can explore estimates visually instead of reading a table.',
    ],
  },
  {
    slug: 'microservices-game-backend',
    title: 'Cloud Deployment & Microservices Game Backend',
    period: 'Mar 2026 – Apr 2026',
    category: 'Cloud & DevOps',
    tone: 'cloud',
    blurb:
      'A multiplayer game backend deliberately torn into separate services and deployed to Google Cloud, just to see how it holds up under pressure.',
    highlights: [
      'Split gameplay, telemetry, and control into independent services so each can scale — and fail — on its own.',
      'Benchmarked multi-VM against Kubernetes and sync against async coupling to find where the real bottlenecks lived.',
    ],
    tags: ['GCP', 'Docker', 'FastAPI', 'PostgreSQL', 'Microservices'],
    overview: [
      'This started as a question: when you break a game backend into microservices and put it under load, where does it actually fall over? So I built one specifically to find out.',
      'I split gameplay, telemetry, and control into independent services, containerized them, and deployed to Google Cloud. Then I ran the interesting comparisons — multi-VM versus Kubernetes, synchronous versus asynchronous service coupling — and measured where latency and failures crept in, rather than guessing.',
    ],
  },
  {
    slug: 'reddit-sentiment-analysis',
    title: 'Reddit Political Sentiment Analysis',
    period: 'Sep 2025 – Dec 2025',
    category: 'Data Engineering',
    tone: 'data',
    blurb:
      'Took a firehose of Reddit comments and turned it into a read on how Canadians felt heading into the 2025 election.',
    highlights: [
      'Streamed and compressed 225GB+ of raw dumps (1B+ comments) down to a focused dataset with Python, Zstandard, and Spark.',
      'Scored sentiment with VADER and transformer models, then checked it against real polls to see how closely online mood tracked reality.',
    ],
    tags: ['Python', 'Apache Spark', 'ETL', 'VADER', 'Transformer'],
    overview: [
      'The idea was to see whether the mood on Reddit lined up with how Canadians actually voted in the 2025 election — which first meant taming an enormous amount of raw data.',
      'I built a streaming ETL pipeline that pulled 225GB+ of dumps (over a billion comments) down to a focused political dataset using Python, Zstandard, and Apache Spark. Then I scored sentiment with both VADER and transformer models and compared the trends against real polling, so the conclusions rested on a check against reality rather than vibes.',
    ],
  },
  {
    slug: 'course-planner',
    title: 'Course Planner',
    period: 'Nov 2024 – Jan 2025',
    category: 'Backend',
    tone: 'backend',
    blurb:
      'A backend that makes a sprawling university course catalog searchable, so students can plan a semester without losing their minds.',
    highlights: [
      'Designed RESTful Spring Boot services that query 10,000+ course offerings without breaking a sweat.',
      'Kept it modular with a clean MVC split so new query features slot in without rewrites.',
    ],
    tags: ['Java', 'Spring Boot', 'RESTful API', 'MVC'],
    overview: [
      'Planning a semester usually means juggling a clunky catalog of thousands of course offerings. This backend makes that catalog actually queryable.',
      'I designed RESTful services in Java and Spring Boot that handle 10,000+ offerings quickly, organized around a clean MVC structure. The goal was maintainability as much as speed — new query features can be added without untangling the core.',
    ],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
