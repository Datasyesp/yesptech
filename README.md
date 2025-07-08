# YESP Tech Landing Page with Sanity CMS

A professional business landing page built with Next.js and Sanity CMS, featuring modern animations, responsive design, and comprehensive blog system.

## Features

- 🎨 Modern blue-white theme with professional design
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 📧 Contact form with email functionality
- 📝 Blog system powered by Sanity CMS
- 🔍 SEO-optimized content
- 🚀 Optimized for performance
- 📅 Calendly integration for meeting booking
- 💬 WhatsApp integration for quick contact

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **CMS**: Sanity CMS
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Deployment**: Netlify/Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file with:
   \`\`\`
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   \`\`\`

4. Set up Sanity:
   - Create a new Sanity project at [sanity.io](https://sanity.io)
   - Get your project ID and dataset name
   - Create an API token with read/write permissions
   - Update the environment variables

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

7. Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)

## Sanity CMS Setup

### Content Types

The blog system includes the following content types:

1. **Blog Post** - Main blog content with SEO fields
2. **Category** - Blog categories with colors
3. **Author** - Author information and bio
4. **FAQ** - Frequently asked questions
5. **SEO** - SEO metadata for posts

### Adding Content

1. Go to `/studio` to access Sanity Studio
2. Create categories first (Web Development, eCommerce, etc.)
3. Create authors
4. Create blog posts with rich content
5. Add FAQs to blog posts for better SEO

## SEO Features

- Meta titles and descriptions
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Local SEO optimization
- Keyword targeting
- FAQ schema for rich snippets

## Blog System

- Dynamic blog post pages
- Category-based organization
- Rich text content with Portable Text
- Image optimization
- SEO-optimized URLs
- FAQ sections
- Related posts
- Social sharing

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Vercel
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Customization

- Update company information in components
- Modify colors in `tailwind.config.js`
- Add/remove services in Sanity Studio
- Update contact information
- Customize blog post templates

## License

© 2024 YESP Tech. All rights reserved.
