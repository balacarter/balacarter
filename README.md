# Personal Portfolio Website

A modern, full-stack portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing frontend engineering skills with backend capabilities via Next.js API routes.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
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
│   │       └── route.ts      # POST handler
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/
│   ├── api-utils.ts          # API helpers (responses, rate limiting)
│   └── email.ts              # Email service (Resend)
└── types/
    └── contact.ts            # Type definitions & validation schemas
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

### Backend Infrastructure
- ✅ Type-safe API routes with TypeScript
- ✅ Input validation with Zod
- ✅ Email service integration (Resend)
- ✅ Rate limiting (in-memory)
- ✅ Standardized API responses
- ✅ Error handling

### Frontend (Coming Soon)
- Portfolio sections
- Project showcases
- Contact form UI
- Dark/light mode
- Animations & interactions

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

- Never commit `.env.local` to version control
- Keep your API keys secret
- Rate limiting is currently in-memory (use Redis/Upstash for production)
- Consider adding CORS protection for API routes

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend API Docs](https://resend.com/docs)
