# Personal Portfolio Website

A modern, full-stack portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing frontend engineering skills with backend capabilities via Next.js API routes.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.5 (App Router with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js + React Three Fiber
- **Backend**: Next.js API Routes (Node.js)
- **Email**: Resend API
- **Validation**: Zod
- **Linting**: ESLint 9

## 📋 Prerequisites

- Node.js 20+ (LTS)
- npm
- A [Resend](https://resend.com) account and API key (for contact form)

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd balacarter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your values:
   ```env
   RESEND_API_KEY=re_your_actual_key_here
   CONTACT_EMAIL_TO=your-email@example.com
   CONTACT_EMAIL_FROM=noreply@yourdomain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   │       └── route.ts      # POST handler with validation
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page with all sections
│   └── globals.css           # Global styles and CSS variables
├── components/
│   ├── Background.tsx        # Animated grid background with cursor glow
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── ExperienceCard.tsx    # Work experience display
│   ├── Header.tsx            # Navigation header
│   ├── HeroImage.tsx         # 3D animated hero shape
│   ├── InitialsIcon.tsx      # Logo/branding icon
│   ├── Sidebar.tsx           # Collapsible sidebar with terminal
│   ├── SkillCard.tsx         # Skill display cards
│   └── Terminal.tsx          # Interactive CLI terminal
├── lib/
│   ├── api-client.ts         # Generic API client with error handling
│   ├── api-utils.ts          # API helpers (responses, rate limiting)
│   └── email.ts              # Email service with XSS protection
├── services/
│   └── contact.service.ts    # Contact form business logic
└── types/
    └── contact.ts            # Type definitions & Zod schemas
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

### Frontend
- ✅ **Responsive Design**: Mobile-first, works on all screen sizes
- ✅ **3D Hero Animation**: Interactive Three.js geometric shape
- ✅ **Interactive Terminal**: CLI-style navigation and info display
- ✅ **Animated Background**: Cursor-following grid with glow effects
- ✅ **Collapsible Sidebar**: Desktop/mobile adaptive navigation
- ✅ **Contact Form**: Client & server-side validation
- ✅ **Dark Mode**: Automatic based on system preference
- ✅ **Smooth Scrolling**: Section navigation with active states
- ✅ **Glassmorphism UI**: Modern frosted glass effects

### Backend Infrastructure
- ✅ **Type-safe API routes** with TypeScript
- ✅ **Input validation** with Zod schemas
- ✅ **Email service** integration (Resend)
- ✅ **XSS Protection**: HTML sanitization in emails
- ✅ **Rate limiting** (in-memory with cleanup)
- ✅ **Standardized responses** and error handling
- ✅ **RESTful API** design patterns

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS
- DigitalOcean

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from Resend | Yes |
| `CONTACT_EMAIL_TO` | Where contact form emails are sent | Yes |
| `CONTACT_EMAIL_FROM` | Sender email address | Yes |

## 🔐 Security Notes

- ✅ **XSS Protection**: All user inputs are sanitized before email rendering
- ✅ **Input Validation**: Client and server-side validation with Zod
- ✅ **Rate Limiting**: 5 requests per minute per IP (with memory cleanup)
- ⚠️ Never commit `.env.local` to version control
- ⚠️ Keep your API keys secret
- ⚠️ Rate limiting is in-memory (use Redis/Upstash for production scale)
- ⚠️ Consider adding CORS protection for public API routes
- ⚠️ IP detection via `x-forwarded-for` can be spoofed (use behind trusted proxy)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend API Docs](https://resend.com/docs)
