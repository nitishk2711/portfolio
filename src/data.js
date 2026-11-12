import { Code2, Server, Database, Boxes, MessageSquare, Wrench } from 'lucide-react';

export const skills = [
  { title: 'Language', Icon: Code2, items: ['Java 8–17'] },
  { title: 'Backend', Icon: Server, items: ['Spring Boot', 'Spring MVC', 'Spring Cloud', 'JPA', 'Hibernate', 'REST APIs'] },
  { title: 'Databases', Icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MongoTemplate'] },
  { title: 'Microservices', Icon: Boxes, items: ['Eureka', 'Config Server', 'API Gateway', 'Feign Client', 'WebClient'] },
  { title: 'Messaging', Icon: MessageSquare, items: ['Kafka', 'RabbitMQ'] },
  { title: 'Tools and testing', Icon: Wrench, items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ', 'JUnit'] },
];

export const experience = [
  {
    company: 'Timelyze',
    role: 'Java Developer',
    period: 'Dec 2023 – Present',
    summary:
      'Backend developer on a distributed, microservices-based workforce management platform that processes employee activity data and generates analytical reports.',
    points: [
      'Built and maintained Java / Spring Boot REST APIs for employee, activity and reporting workflows across the Producer, Consumer and Report services.',
      'Implemented Kafka-based event-driven communication between producer and consumer services.',
      'Worked with MongoDB and MongoTemplate, including aggregation queries and pagination.',
      'Contributed to report generation and retrieval in Excel, CSV and PDF formats.',
      'Handled timezone-aware timestamps in employee activity and screenshot APIs.',
      'Created a Docker Compose setup to run all services locally, and built service-to-service APIs with WebClient.',
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Kafka', 'MongoDB', 'Docker'],
  },
  {
    company: 'Servapps',
    role: 'Junior Software Engineer',
    period: 'Jan 2024 – Jun 2024',
    summary: '',
    points: [
      'Designed and developed core REST APIs for business modules.',
      'Contributed to backend service integration and wrote JUnit tests.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'JUnit'],
  },
];

export const projects = [
  {
    name: 'SecurePay',
    subtitle: 'Payment microservices platform',
    status: 'In progress',
    summary:
      'A personal project exploring payment-oriented backend services and microservices architecture with Java and Spring Boot.',
    areas: [
      'Transaction APIs and idempotency handling',
      'Merchant onboarding and management',
      'Payment processing and settlement workflows',
      'Notification APIs and role-based access control',
    ],
    stack: ['Java', 'Spring Boot', 'Docker Compose', 'Eureka', 'API Gateway', 'Config Server', 'Kafka', 'MySQL', 'PostgreSQL', 'MongoDB'],
    services: ['auth', 'merchant', 'payment', 'ledger', 'settlement', 'notification'],
  },
  {
    name: 'Mintok Platform',
    subtitle: 'Modular microservices',
    summary:
      'Contributed to several modules of a modular microservices platform, working on user-facing and core business features.',
    areas: [
      'Secure login and signup',
      'Customer management',
      'Optimized database interactions',
    ],
    stack: ['Spring Boot', 'REST APIs', 'MySQL', 'JUnit'],
  },
  {
    name: 'Book Summarizer',
    subtitle: 'Text summarization service',
    summary: 'Built from scratch as a set of Spring Boot REST APIs around text summarization logic.',
    areas: ['REST APIs built from scratch', 'JUnit test coverage', 'Clean architecture'],
    stack: ['Spring Boot', 'REST APIs', 'JUnit'],
  },
];

export const certifications = [
  'Master Microservices with Spring Boot & Spring Cloud, Udemy',
  'Master Spring Boot 3 & Spring Framework 6 with Java, Udemy',
  'Full Stack Development, JSpiders Bangalore (2022–2023)',
];