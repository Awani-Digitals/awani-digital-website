/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly identifier for the post
      - `excerpt` (text) - Short summary of the blog post
      - `content` (text) - Full blog post content
      - `author` (text) - Author name
      - `category` (text) - Blog post category
      - `image_url` (text) - Featured image URL
      - `read_time` (text) - Estimated read time
      - `published_at` (timestamp) - Publication date
      - `created_at` (timestamp) - Record creation date
      - `updated_at` (timestamp) - Last update date

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access (blog posts are publicly readable)
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  read_time text NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url, read_time, published_at) VALUES
(
  'The Future of Web Development: Trends to Watch in 2025',
  'future-of-web-development-2025',
  'Explore the emerging technologies and methodologies that are reshaping how we build for the web. From AI integration to new frameworks, discover what''s next.',
  '<h2>Introduction</h2><p>The web development landscape is evolving at an unprecedented pace. In 2025, we''re witnessing a convergence of artificial intelligence, edge computing, and developer experience improvements that are fundamentally changing how we build applications.</p><h2>AI Integration in Development</h2><p>AI-powered tools are becoming essential in every developer''s toolkit. From code generation to automated testing, AI is accelerating development cycles and improving code quality. Tools like GitHub Copilot and similar solutions are no longer novelties but industry standards.</p><h2>Edge Computing</h2><p>Edge computing is moving application logic closer to users. This shift enables faster response times and reduces latency, creating better user experiences. Frameworks and platforms supporting edge computing are becoming increasingly popular.</p><h2>Developer Experience</h2><p>The focus on developer experience continues to be a priority. Better tooling, clearer documentation, and more intuitive APIs are making it easier for developers to build complex applications with less friction.</p><h2>Conclusion</h2><p>The future of web development is bright, with numerous opportunities for those ready to adapt and learn these emerging technologies.</p>',
  'Sarah Chen',
  'Technology',
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
  '5 min read',
  now() - interval '3 days'
),
(
  'Building Scalable Applications: Best Practices for Modern Teams',
  'building-scalable-applications',
  'Learn the essential patterns and practices that help engineering teams build applications that can grow with your business needs.',
  '<h2>Introduction</h2><p>Scalability is one of the most critical concerns for modern applications. As your user base grows, your application must handle increased load while maintaining performance and reliability.</p><h2>Architecture Patterns</h2><p>Microservices, event-driven architecture, and serverless computing are popular patterns for building scalable systems. Each has its own trade-offs and considerations.</p><h2>Database Design</h2><p>Proper database design is crucial for scalability. Normalization, indexing, and choosing the right database type for your use case are fundamental considerations.</p><h2>Caching Strategies</h2><p>Implementing effective caching at multiple levels—application, database, and HTTP—can dramatically improve performance and reduce load on your infrastructure.</p><h2>Monitoring and Observability</h2><p>You can''t improve what you can''t measure. Comprehensive monitoring, logging, and tracing are essential for understanding system behavior and identifying bottlenecks.</p><h2>Conclusion</h2><p>Building scalable applications requires thoughtful planning, architectural decisions, and continuous monitoring and optimization.</p>',
  'Michael Torres',
  'Development',
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
  '8 min read',
  now() - interval '6 days'
),
(
  'Design Systems: Creating Consistency at Scale',
  'design-systems-consistency',
  'Discover how design systems can transform your product development process and create a unified user experience across all touchpoints.',
  '<h2>Introduction</h2><p>Design systems are comprehensive sets of documentation and components that enable teams to design and build consistently across products and platforms.</p><h2>Components and Patterns</h2><p>A well-defined set of reusable components creates consistency and accelerates development. Design tokens ensure visual consistency across your entire product ecosystem.</p><h2>Documentation</h2><p>Clear documentation is the backbone of a successful design system. It should guide developers and designers on how to use components correctly and when to apply each pattern.</p><h2>Governance</h2><p>Establishing clear governance around your design system ensures it remains useful and doesn''t become stale. Regular reviews and updates keep the system relevant.</p><h2>Team Collaboration</h2><p>Design systems are most effective when designers and developers collaborate closely. Regular feedback loops ensure the system serves both disciplines well.</p><h2>Conclusion</h2><p>A well-implemented design system is an investment that pays dividends through increased consistency, reduced development time, and improved user experiences.</p>',
  'Emily Rodriguez',
  'Design',
  'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
  '6 min read',
  now() - interval '9 days'
);
