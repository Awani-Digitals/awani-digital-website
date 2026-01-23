# Awani Digitals

A modern, full-stack marketing agency website built with **Next.js 15**, featuring a blog management system with authentication, a client brief submission system, and beautiful UI animations.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Third-Party Integrations](#third-party-integrations)
  - [Supabase](#supabase)
  - [Cloudinary](#cloudinary)
  - [EmailJS](#emailjs)
- [Blog System](#blog-system)
- [Send Brief Feature](#send-brief-feature)
- [Authentication](#authentication)
- [Deployment](#deployment)

---

## Features

- **🏠 Marketing Website** – Beautiful landing pages showcasing the agency's services, portfolio, and about section
- **📝 Blog System** – Full CRUD functionality for blog posts with rich text editing
- **🔐 Authentication** – Secure admin login to manage blog posts
- **📬 Client Brief Submission** – Contact form allowing clients to send project briefs
- **📁 File Upload** – Support for document uploads (PDF, DOCX, ZIP) in briefs
- **🎨 Modern UI** – Animated components using Framer Motion and GSAP
- **📱 Responsive Design** – Mobile-first design with Tailwind CSS

---

## Technology Stack

| Category         | Technology                                        |
| ---------------- | ------------------------------------------------- |
| **Framework**    | Next.js 15 (App Router with Turbopack)            |
| **Language**     | TypeScript                                        |
| **Styling**      | Tailwind CSS 4                                    |
| **Animations**   | Framer Motion, GSAP                               |
| **Database**     | Supabase (PostgreSQL)                             |
| **Auth**         | Supabase Authentication                           |
| **File Storage** | Supabase Storage (documents), Cloudinary (images) |
| **Email**        | EmailJS                                           |
| **Rich Editor**  | React Quill                                       |
| **Icons**        | Lucide React, React Icons                         |

---

## Project Structure

```
awani_digitals/
├── app/
│   ├── about/              # About page
│   ├── admin/              # Admin login & signup pages
│   ├── blogs/              # Blog listing, detail, and new blog pages
│   │   ├── [slug]/         # Dynamic blog post page
│   │   ├── new-blog/       # Create/edit blog form
│   │   └── manage-blogs/   # Blog management dashboard
│   ├── contact/            # Contact page
│   ├── lib/                # Utility libraries
│   │   ├── supabase.ts     # Supabase client configuration
│   │   └── cloudinary.ts   # Cloudinary upload utility
│   ├── send-brief/         # Client brief submission page
│   ├── services/           # Services page
│   ├── works/              # Portfolio/works pages
│   ├── Workdata/           # Static works data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
├── contexts/               # React contexts
│   └── AuthContext.tsx     # Authentication context provider
├── public/                 # Static assets
├── supabase/               # Supabase configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Cloudinary account
- EmailJS account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Pauleye12/awani-digital.git
   cd awani_digitals
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

---

## Third-Party Integrations

### Supabase

Supabase is used for three core functions:

#### 1. Authentication

- Email/password authentication for admin users
- Managed via `contexts/AuthContext.tsx`
- Provides `signUp`, `signIn`, and `signOut` methods
- Session persistence and auth state listening

#### 2. Database (PostgreSQL)

Two main tables:

**`blog_posts`** – Stores all blog content
| Column | Type | Description |
| ------------- | --------- | ------------------------------ |
| id | uuid | Primary key |
| title | text | Blog title |
| slug | text | URL-friendly slug |
| excerpt | text | Short summary |
| content | text | HTML content from rich editor |
| category | text | Blog category |
| image_url | text | Cloudinary image URL |
| read_time | text | Estimated read time |
| author | text | Author email |
| published_at | timestamp | Publication date |
| updated_at | timestamp | Last update date |

**`briefs`** – Stores client brief submissions
| Column | Type | Description |
| ------------- | ---------- | ------------------------------ |
| id | uuid | Primary key |
| full_name | text | Client's full name |
| company_name | text | Company/brand name |
| email | text | Client's email |
| phone | text | Phone number |
| services | text[] | Selected services array |
| project_goals | text | Project description |
| budget_range | text | Budget in NGN |
| file_url | text | URL to uploaded file |
| consent_given | boolean | Privacy consent flag |
| created_at | timestamp | Submission timestamp |

#### 3. Storage

- Bucket: `Awani Digitals Docs`
- Used for storing client-uploaded documents (PDF, DOCX, ZIP)
- Maximum file size: 10MB
- Public URLs are generated and sent via EmailJS

**Client Setup:**

```typescript
// app/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

### Cloudinary

Cloudinary is used exclusively for **blog post featured images**.

**Configuration:**

- Upload preset: `awaniDigitals` (unsigned upload)
- Maximum image size: 5MB
- Supported formats: PNG, JPG, GIF

**How it works:**

1. User selects an image when creating a blog post
2. Image is uploaded to Cloudinary via the upload API
3. Cloudinary returns a `secure_url`
4. This URL is stored in the `blog_posts.image_url` column

**Upload Utility:**

```typescript
// app/lib/cloudinary.ts
export async function uploadImageToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "awaniDigitals");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData },
  );

  const data = await response.json();
  return data.secure_url;
}
```

**Cloudinary Dashboard Setup:**

1. Go to Settings → Upload
2. Create an upload preset named `awaniDigitals`
3. Set signing mode to **Unsigned**

---

### EmailJS

EmailJS is used to send **email notifications** when a client submits a brief.

**How it works:**

1. Client fills out the brief form
2. Form data is saved to Supabase `briefs` table
3. If a file is uploaded, it's stored in Supabase Storage and a public URL is generated
4. EmailJS sends an email to the agency with all brief details including the file URL

**Email Template Variables:**
The following variables should be configured in your EmailJS template:

- `{{fullName}}` – Client's name
- `{{companyName}}` – Company name
- `{{email}}` – Client's email
- `{{phone}}` – Phone number
- `{{services}}` – Comma-separated list of services
- `{{projectGoals}}` – Project description
- `{{budgetRange}}` – Budget in NGN format
- `{{fileUrl}}` – Public link to uploaded document

**EmailJS Setup:**

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create a template with the variables listed above
4. Copy Service ID, Template ID, and Public Key to your `.env`

---

## Blog System

### Features

- **Create** – Rich text editor (React Quill) with formatting options
- **Read** – Blog listing with category filtering and individual post pages
- **Update** – Edit existing posts with pre-filled form
- **Delete** – Remove posts from the manage blogs dashboard

### Categories

- Social Media
- Content
- Branding & Design
- Traditional
- Experiential
- Career
- Digital Marketing
- News

### Blog Workflow

1. Admin logs in at `/admin`
2. Navigate to `/blogs/new-blog` to create a post
3. Fill in title, excerpt, category, read time, featured image, and content
4. Click "Publish Blog"
5. Image is uploaded to Cloudinary, post is saved to Supabase
6. Blog appears on the public `/blogs` page

---

## Send Brief Feature

The "Send Us a Brief" feature (`/send-brief`) allows potential clients to submit project inquiries.

### Form Fields

| Field         | Required | Description                              |
| ------------- | -------- | ---------------------------------------- |
| Full Name     | ✅       | Client's full name                       |
| Company Name  | ✅       | Company or brand name                    |
| Email         | ✅       | Contact email                            |
| Phone         | ✅       | Phone number                             |
| Services      | ✅       | Multi-select service categories          |
| Project Goals | ✅       | Detailed project description             |
| Budget Range  | ✅       | Budget in NGN (formatted automatically)  |
| File Upload   | ❌       | Optional document (PDF, DOCX, ZIP ≤10MB) |
| Consent       | ✅       | Privacy policy agreement                 |

### Submission Flow

1. Client fills out the form
2. Validation runs on all required fields
3. If file included, upload to Supabase Storage → get public URL
4. Insert all data into Supabase `briefs` table
5. Send email via EmailJS with all details + file URL
6. Show success message to client

---

## Authentication

Authentication is handled via Supabase Auth and managed through the `AuthContext`.

### Auth Context (`contexts/AuthContext.tsx`)

Provides:

- `user` – Current authenticated user
- `session` – Current session object
- `loading` – Auth loading state
- `signUp(email, password)` – Register new user
- `signIn(email, password)` – Login existing user
- `signOut()` – Logout current user

### Protected Routes

The following routes require authentication:

- `/blogs/new-blog` – Create new blog post
- `/blogs/manage-blogs` – Delete blog posts
- `/blogs/[slug]/edit` – Edit existing blog post

Unauthenticated users are redirected to `/admin`.

---

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Recommended Platforms

- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

### Checklist Before Deployment

- [ ] Set all environment variables in your hosting platform
- [ ] Create Supabase tables with proper RLS policies
- [ ] Configure Cloudinary upload preset as unsigned
- [ ] Set up EmailJS template with all required variables
- [ ] Configure Supabase Storage bucket as public

---

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is private and proprietary to Awani Digitals.

---

## Contact

For support or inquiries, visit [Awani Digitals](https://awani-digitals.vercel.app) or use the "Send Us a Brief" feature on the website.
