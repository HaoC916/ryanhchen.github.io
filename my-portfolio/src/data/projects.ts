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
    title: 'Vancouver Property Value Prediction System',
    period: 'Jan 2026 – Apr 2026',
    category: 'Full-Stack · ML',
    tone: 'fullstack',
    blurb:
      'Type a Vancouver address — down to a specific condo unit — and get a grounded estimate of the property\'s assessed value, backed by real municipal data.',
    highlights: [
      'Cleaned and reshaped 1.5M+ public property records into a training set the model could actually learn from.',
      'Predicts total property value (land + building), and tells individual condo units apart using each unit\'s own assessment history — median error around 6%.',
      'Address-driven UI — a generative chat or a search form — talking to a FastAPI model server, both deployed to the cloud as a live demo.',
    ],
    tags: ['React', 'Python', 'FastAPI', 'Machine Learning', 'Docker'],
    overview: [
      'Property prices in Vancouver are famously hard to pin down, so I built a tool that takes an address and returns a grounded estimate of the total assessed value — land plus the building on top — not just the land underneath.',
      'The hard part was the data: over 1.5 million public property records, full of gaps and inconsistencies, that had to be cleaned and reshaped before a model could make sense of them. The trickiest case was condos, where every unit in a building shares the same address, zoning, and age — so the only thing that tells them apart is each unit\'s own prior assessment. Leaning on that signal brought the median error down to around 6%.',
      'On top of the model I built a FastAPI service and a React front-end with two ways in: a generative chat that asks for an address (and a unit number, if it is a building) and types its answer back, and a plain search form. Both the API and the UI are deployed to the cloud, so it is a real working demo rather than a screenshot.',
    ],
    repoUrl: 'https://github.com/HaoC916/Vancouver-Land-Value-Prediction-System',
    demoUrl: 'https://hello-ryan-vancouver-property-value.static.hf.space',
  },
  {
    slug: 'microservices-game-backend',
    title: 'Cloud Deployment & Microservices Game Backend',
    period: 'Mar 2026 – Apr 2026',
    category: 'Cloud · Distributed Systems',
    tone: 'cloud',
    blurb:
      'A four-service game backend deployed three ways on Google Cloud — one VM, many VMs, and Kubernetes — load-tested to see exactly what each deployment choice costs in latency and throughput.',
    highlights: [
      'Built a four-service backend — a Nakama + Postgres game core plus FastAPI admin, event-hub, and dashboard services — kept loosely coupled over HTTP with no shared database.',
      'Benchmarked three deployment topologies (single-VM, multi-VM, Kubernetes) against synchronous vs asynchronous coupling on Google Cloud, sweeping 25 to 150 concurrent users.',
      'Quantified the trade-offs: async cut end-to-end latency from the ~80–190 ms sync band down to ~20–60 ms; Kubernetes held the flattest tail at high load, while multi-VM\'s cross-zone hops were the worst.',
      'Turned the results into an interactive dashboard — compare coupling, deployment, and percentile yourself.',
    ],
    tags: ['GCP', 'Kubernetes', 'Docker', 'FastAPI', 'Nakama', 'PostgreSQL', 'Load testing'],
    overview: [
      'Online games are a good stress test for distributed design: players want low latency, while operators still need control for things like anti-cheat gates and telemetry. I built a small game-ops backend around Nakama and Postgres, plus three FastAPI services — an admin gate, an event hub with its own database, and a read-only dashboard — specifically to ask one question: how much do deployment topology and sync-versus-async coupling actually change client-observed performance?',
      'I ran the same workload across three deployments — a single VM, services split across multiple VMs and zones, and Google Kubernetes Engine — under two coupling modes: synchronous, where the client waits on an admin gate before matchmaking, and asynchronous, where it doesn\'t. A custom load driver ramped concurrent virtual users from 25 to 150 and recorded end-to-end latency (mean, p95, p99) and throughput from the client side.',
      'There\'s no single winner, just clear trade-offs. Sync coupling is far costlier than async (~80–190 ms versus ~20–60 ms end-to-end) because the client blocks on an extra round trip. Multi-VM carries the worst tail latency as cross-zone hops pile up, Kubernetes scales the most gracefully under load, and a single VM stays competitive cheaply until it saturates around 100 users. The live demo lets you flip between these conditions and watch the curves move.',
    ],
    repoUrl: 'https://github.com/HaoC916/Microservices-Game-Backend',
    demoUrl: 'https://haoc916.github.io/Microservices-Game-Backend/',
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
