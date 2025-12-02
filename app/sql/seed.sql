-- seed.sql: Seed data for wemake database
-- Using existing profile_id: 2eceec4a-de4a-466d-a8aa-f654ac2ca906
-- Note: profiles table is not seeded - using existing profile from auth

-- ========================================
-- CATEGORIES TABLE
-- ========================================
INSERT INTO categories (name, description, created_at, updated_at)
VALUES
  ('Productivity', 'Tools and apps to boost your productivity and get more done.', NOW(), NOW()),
  ('Developer Tools', 'Essential tools for developers to build better software faster.', NOW(), NOW()),
  ('Design', 'Design tools, resources, and inspiration for creators.', NOW(), NOW()),
  ('Marketing', 'Marketing tools and platforms to grow your business.', NOW(), NOW()),
  ('AI & Machine Learning', 'Artificial intelligence and machine learning products.', NOW(), NOW());

-- ========================================
-- PRODUCTS TABLE
-- ========================================
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at)
VALUES
  ('TaskMaster Pro', 'Your ultimate productivity companion', 'TaskMaster Pro helps you organize tasks, set priorities, and track your progress with an intuitive interface. Perfect for individuals and teams looking to boost productivity.', 'Simply create an account, add your tasks, organize them into projects, and start completing them. Use tags and filters to stay organized.', 'https://api.dicebear.com/7.x/shapes/svg?seed=taskmaster', 'https://taskmasterpro.example.com', '{"views": 1250, "reviews": 18}', '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 1, NOW(), NOW()),
  ('CodeSnap', 'Beautiful code screenshots in seconds', 'Create stunning screenshots of your code with customizable themes, fonts, and backgrounds. Perfect for documentation, social media, and presentations.', 'Paste your code, choose a theme, customize the appearance, and download your beautiful screenshot. No signup required for basic features.', 'https://api.dicebear.com/7.x/shapes/svg?seed=codesnap', 'https://codesnap.example.com', '{"views": 3420, "reviews": 45}', '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 2, NOW(), NOW()),
  ('DesignKit', 'All-in-one design system builder', 'Build and maintain consistent design systems with DesignKit. Export to Figma, Sketch, and code with a single click.', 'Start with pre-built components, customize them to match your brand, and export to your favorite design tool or directly to code.', 'https://api.dicebear.com/7.x/shapes/svg?seed=designkit', 'https://designkit.example.com', '{"views": 2180, "reviews": 32}', '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 3, NOW(), NOW()),
  ('GrowthMetrics', 'Analytics that actually help you grow', 'Stop drowning in data. GrowthMetrics shows you exactly what matters and what actions to take next.', 'Connect your data sources, set your growth goals, and let our AI-powered analytics guide you to better decisions.', 'https://api.dicebear.com/7.x/shapes/svg?seed=growth', 'https://growthmetrics.example.com', '{"views": 1890, "reviews": 28}', '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 4, NOW(), NOW()),
  ('SmartAI Assistant', 'Your personal AI productivity assistant', 'Automate repetitive tasks, get intelligent suggestions, and work smarter with our AI-powered assistant that learns from you.', 'Install the extension, connect your apps, and let SmartAI learn your workflow. It will start suggesting automations and improvements automatically.', 'https://api.dicebear.com/7.x/shapes/svg?seed=smartai', 'https://smartai.example.com', '{"views": 5670, "reviews": 67}', '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 5, NOW(), NOW());

-- ========================================
-- PRODUCT_UPVOTES TABLE (Bridge table)
-- ========================================
INSERT INTO product_upvotes (product_id, profile_id)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906');

-- ========================================
-- REVIEWS TABLE
-- ========================================
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 5, 'Absolutely love TaskMaster Pro! It has transformed how I manage my daily tasks. The interface is clean and intuitive.', NOW(), NOW()),
  (2, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 5, 'CodeSnap is a game-changer for creating documentation. The themes are beautiful and easy to customize.', NOW(), NOW()),
  (3, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 4, 'DesignKit has helped our team maintain consistency across all our products. Highly recommended!', NOW(), NOW()),
  (4, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 5, 'GrowthMetrics provides actionable insights that actually help drive growth. Highly recommend!', NOW(), NOW()),
  (5, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 4, 'SmartAI has saved me hours of work every week. The automation suggestions are spot on.', NOW(), NOW());

-- ========================================
-- GPT_IDEAS TABLE
-- ========================================
INSERT INTO gpt_ideas (idea, views, claimed_at, claimed_by, created_at)
VALUES
  ('A Chrome extension that summarizes long articles using AI and presents key points in under 2 minutes.', 245, NULL, NULL, NOW()),
  ('Social media scheduler that uses AI to determine the best time to post based on your audience engagement patterns.', 189, NOW(), '2eceec4a-de4a-466d-a8aa-f654ac2ca906', NOW()),
  ('Fitness app that generates personalized workout plans based on available equipment and time constraints.', 312, NULL, NULL, NOW()),
  ('Language learning app that creates custom vocabulary lists from your favorite books and movies.', 178, NULL, NULL, NOW()),
  ('Budget tracker that automatically categorizes expenses and provides insights on spending habits.', 267, NULL, NULL, NOW());

-- ========================================
-- GPT_IDEAS_LIKE TABLE (Bridge table)
-- ========================================
INSERT INTO gpt_ideas_like (gpt_idea_id, profile_id)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906');

-- ========================================
-- TOPICS TABLE
-- ========================================
INSERT INTO topics (name, slug, created_at)
VALUES
  ('Product Launch', 'product-launch', NOW()),
  ('Getting Feedback', 'getting-feedback', NOW()),
  ('Technical Discussion', 'technical-discussion', NOW()),
  ('Marketing Strategies', 'marketing-strategies', NOW()),
  ('Funding & Investment', 'funding-investment', NOW());

-- ========================================
-- POSTS TABLE
-- ========================================
INSERT INTO posts (title, content, created_at, updated_at, topic_id, profile_id)
VALUES
  ('Launching my first SaaS product tomorrow!', 'After 6 months of development, I am finally launching TaskMaster Pro tomorrow. Any tips for a successful Product Hunt launch?', NOW(), NOW(), 1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906'),
  ('How do you handle negative feedback?', 'Just received some harsh criticism on my product. How do you all deal with negative feedback constructively?', NOW(), NOW(), 2, '2eceec4a-de4a-466d-a8aa-f654ac2ca906'),
  ('React vs Vue: Which one for 2024?', 'Starting a new project and debating between React and Vue. What are your experiences with both frameworks?', NOW(), NOW(), 3, '2eceec4a-de4a-466d-a8aa-f654ac2ca906'),
  ('Growth hacking strategies that actually work', 'Sharing some growth strategies that helped me get to 10k users in 3 months. AMA!', NOW(), NOW(), 4, '2eceec4a-de4a-466d-a8aa-f654ac2ca906'),
  ('Raised my first seed round!', 'Just closed our $2M seed round. Happy to share lessons learned from the fundraising process.', NOW(), NOW(), 5, '2eceec4a-de4a-466d-a8aa-f654ac2ca906');

-- ========================================
-- POST_UPVOTES TABLE (Bridge table)
-- ========================================
INSERT INTO post_upvotes (post_id, profile_id)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906');

-- ========================================
-- POST_REPLIES TABLE
-- ========================================
INSERT INTO post_replies (post_id, parent_id, profile_id, content, created_at, updated_at)
VALUES
  (1, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Congrats on the launch! Make sure to have a clear, compelling tagline and great visuals.', NOW(), NOW()),
  (2, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Negative feedback is tough but valuable. Try to separate personal feelings from actionable insights.', NOW(), NOW()),
  (3, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'React has a larger ecosystem, but Vue is easier to learn. Depends on your team size and experience.', NOW(), NOW()),
  (4, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Would love to hear more about your strategies! What channels worked best?', NOW(), NOW()),
  (5, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Congratulations on the funding! What was the biggest challenge in the fundraising process?', NOW(), NOW());

-- ========================================
-- JOBS TABLE
-- ========================================
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range, created_at, updated_at)
VALUES
  ('Senior Full Stack Developer', 'Join our growing team to build the next generation of productivity tools.', 'Develop and maintain web applications, Write clean and efficient code, Collaborate with design team, Review code from team members', 'BS in Computer Science or equivalent, 5+ years of full-stack development, Experience with React and Node.js, Strong problem-solving skills', 'Health insurance, 401k matching, Unlimited PTO, Remote work flexibility, Learning budget', 'React, Node.js, TypeScript, PostgreSQL, AWS', 'TaskMaster Inc', 'https://api.dicebear.com/7.x/identicon/svg?seed=taskmaster', 'San Francisco, CA', 'https://jobs.example.com/apply/1', 'full-time', 'hybrid', '$120,000 - $150,000', NOW(), NOW()),
  ('Product Designer', 'Help us create beautiful and intuitive user experiences for millions of users.', 'Design user interfaces and experiences, Create prototypes and wireframes, Conduct user research, Collaborate with developers', 'Portfolio demonstrating UI/UX work, 3+ years of product design experience, Proficiency in Figma, Understanding of design systems', 'Competitive salary, Stock options, Health benefits, Professional development, Flexible schedule', 'Figma, Sketch, Prototyping, User Research, Design Systems', 'DesignKit Labs', 'https://api.dicebear.com/7.x/identicon/svg?seed=designkit', 'New York, NY', 'https://jobs.example.com/apply/2', 'full-time', 'remote', '$100,000 - $120,000', NOW(), NOW()),
  ('Marketing Manager', 'Lead our marketing efforts and help us reach the next 100k users.', 'Develop marketing strategies, Manage social media presence, Create content calendars, Analyze campaign performance', '5+ years in digital marketing, Experience with SaaS products, Strong analytical skills, Excellent communication', 'Health insurance, Performance bonuses, Remote work, Conference budget, Team retreats', 'SEO, Content Marketing, Analytics, Social Media, Email Marketing', 'GrowthMetrics', 'https://api.dicebear.com/7.x/identicon/svg?seed=growth', 'Austin, TX', 'https://jobs.example.com/apply/3', 'full-time', 'remote', '$70,000 - $100,000', NOW(), NOW()),
  ('Frontend Developer Intern', 'Learn from experienced developers while contributing to real-world projects.', 'Implement UI components, Fix bugs, Write tests, Participate in code reviews', 'Currently pursuing CS degree, Knowledge of React, Passion for web development, Good communication skills', 'Mentorship program, Learning opportunities, Potential full-time offer, Flexible hours', 'React, JavaScript, CSS, Git', 'CodeSnap', 'https://api.dicebear.com/7.x/identicon/svg?seed=codesnap', 'Remote', 'https://jobs.example.com/apply/4', 'internship', 'remote', '$0 - $50,000', NOW(), NOW()),
  ('Freelance Content Writer', 'Create engaging technical content for our blog and documentation.', 'Write blog posts, Create tutorials, Edit documentation, Research technical topics', 'Strong writing skills, Technical background, Experience with developer tools, Portfolio of published work', 'Flexible schedule, Remote work, Competitive rates, Byline on popular tech blog', 'Technical Writing, SEO, Content Strategy, Developer Tools', 'SmartAI', 'https://api.dicebear.com/7.x/identicon/svg?seed=smartai', 'Remote', 'https://jobs.example.com/apply/5', 'freelance', 'remote', '$50,000 - $70,000', NOW(), NOW());

-- ========================================
-- TEAM TABLE
-- ========================================
INSERT INTO team (product_name, team_size, equity_split, product_stage, roles, product_description, created_at, updated_at)
VALUES
  ('AI Recipe Generator', 3, 33, 'idea', 'Backend Developer, UI Designer', 'An AI-powered app that generates personalized recipes based on ingredients you have at home and dietary preferences.', NOW(), NOW()),
  ('Fitness Social Network', 2, 50, 'prototype', 'Full Stack Developer', 'Social platform connecting fitness enthusiasts to share workouts, track progress, and motivate each other.', NOW(), NOW()),
  ('Remote Team Collaboration', 4, 25, 'mvp', 'Product Manager, Frontend Developer', 'Video conferencing tool optimized for remote teams with built-in project management features.', NOW(), NOW()),
  ('EcoTrack', 5, 20, 'product', 'Marketing Manager, Backend Developer', 'Carbon footprint tracker that helps individuals and companies measure and reduce their environmental impact.', NOW(), NOW()),
  ('Learning Management System', 3, 33, 'mvp', 'UX Designer, DevOps Engineer', 'Modern LMS platform with AI-powered personalized learning paths and interactive content.', NOW(), NOW());

-- ========================================
-- MESSAGE_ROOMS TABLE
-- ========================================
INSERT INTO message_rooms (created_at)
VALUES
  (NOW()),
  (NOW()),
  (NOW()),
  (NOW()),
  (NOW());

-- ========================================
-- MESSAGE_ROOM_MEMBERS TABLE (Bridge table)
-- ========================================
INSERT INTO message_room_members (message_room_id, profile_id, created_at)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', NOW());

-- ========================================
-- MESSAGES TABLE
-- ========================================
INSERT INTO messages (message_room_id, sender_id, content, seen, created_at)
VALUES
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Hey! I saw your product on the leaderboard. Congratulations!', false, NOW()),
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Thank you so much! It has been an amazing journey.', true, NOW()),
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'I would love to learn more about your design process.', false, NOW()),
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Sure! Happy to share. Do you have time for a quick call this week?', true, NOW()),
  (1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'Absolutely! How about Thursday afternoon?', false, NOW());

-- ========================================
-- NOTIFICATIONS TABLE
-- ========================================
INSERT INTO notifications (source_id, product_id, post_id, target_id, type, "createdAt")
VALUES
  ('2eceec4a-de4a-466d-a8aa-f654ac2ca906', NULL, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'follow', NOW()),
  ('2eceec4a-de4a-466d-a8aa-f654ac2ca906', 1, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'review', NOW()),
  ('2eceec4a-de4a-466d-a8aa-f654ac2ca906', NULL, 1, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'reply', NOW()),
  ('2eceec4a-de4a-466d-a8aa-f654ac2ca906', NULL, 2, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'mention', NOW()),
  ('2eceec4a-de4a-466d-a8aa-f654ac2ca906', 2, NULL, '2eceec4a-de4a-466d-a8aa-f654ac2ca906', 'review', NOW());

