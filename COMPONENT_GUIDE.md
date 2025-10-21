# Component & Hook Reference Guide

Quick reference for all new reusable components and hooks.

---

## 🎨 UI Components

### GlassCard
**Location**: `/src/components/ui/GlassCard.tsx`

Reusable glass morphism card with consistent styling.

```tsx
import GlassCard from '@/components/ui/GlassCard';

// Basic usage
<GlassCard className="p-8">
  <h2>Title</h2>
  <p>Content</p>
</GlassCard>

// As a section
<GlassCard as="section" className="p-6 mb-4">
  Content
</GlassCard>
```

**Props**:
- `children`: ReactNode (required)
- `className`: string (optional) - Additional Tailwind classes
- `as`: 'div' | 'section' | 'article' (optional, default: 'div')

---

### SkipLink
**Location**: `/src/components/ui/SkipLink.tsx`

Accessibility skip navigation link (should be first element in layout).

```tsx
import SkipLink from '@/components/ui/SkipLink';

<SkipLink />
```

**Features**:
- Hidden until focused (keyboard navigation)
- Jumps to `#main-content`
- WCAG 2.1 AA compliant

---

### ErrorBoundary
**Location**: `/src/components/ui/ErrorBoundary.tsx`

React error boundary to catch and handle component errors.

```tsx
import ErrorBoundary from '@/components/ui/ErrorBoundary';

// Wrap risky components
<ErrorBoundary>
  <ThreeJSComponent />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={<div>Custom error message</div>}>
  <Component />
</ErrorBoundary>
```

**Props**:
- `children`: ReactNode (required)
- `fallback`: ReactNode (optional) - Custom error UI

---

## 🪝 Custom Hooks

### useMediaQuery
**Location**: `/src/hooks/useMediaQuery.ts`

Track media query matches for responsive design.

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

**Parameters**:
- `query`: string - CSS media query

**Returns**: boolean

---

### useScrollLock
**Location**: `/src/hooks/useScrollLock.ts`

Lock/unlock body scroll (useful for modals, sidebars).

```tsx
import { useScrollLock } from '@/hooks/useScrollLock';

function Component() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  return <Modal isOpen={isOpen} />;
}
```

**Parameters**:
- `isLocked`: boolean - Whether to lock scroll

**Features**:
- Preserves scroll position
- Prevents body scroll
- Automatic cleanup

---

### useIntersectionObserver
**Location**: `/src/hooks/useIntersectionObserver.ts`

Detect when element enters/exits viewport.

```tsx
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useRef } from 'react';

function Component() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div ref={ref}>
      {isVisible ? 'Visible!' : 'Not visible'}
    </div>
  );
}
```

**Parameters**:
- `elementRef`: RefObject<Element> - Ref to observe
- `options`: object (optional)
  - `threshold`: number | number[] - Visibility threshold (0-1)
  - `root`: Element | null - Root element
  - `rootMargin`: string - Margin around root

**Returns**: boolean - Is element intersecting

---

### useHoverColor
**Location**: `/src/hooks/useHoverColor.ts`

Manage hover color states without inline handlers.

```tsx
import { useHoverColor } from '@/hooks/useHoverColor';

function Component() {
  const { color, handleMouseEnter, handleMouseLeave } = useHoverColor(
    'var(--text-muted)',
    'var(--accent-primary)'
  );

  return (
    <a
      style={{ color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me
    </a>
  );
}
```

**Parameters**:
- `defaultColor`: string - Color when not hovering
- `hoverColor`: string - Color when hovering

**Returns**: object
- `color`: string - Current color
- `handleMouseEnter`: () => void
- `handleMouseLeave`: () => void

---

## 📊 Data Files

### Skills
**Location**: `/src/data/skills.ts`

```tsx
import { skills } from '@/data/skills';

// Type
interface Skill {
  title: string;
  description: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

// Usage
{skills.map(skill => (
  <SkillCard key={skill.title} {...skill} />
))}
```

---

### Experience
**Location**: `/src/data/experience.ts`

```tsx
import { experiences } from '@/data/experience';

// Type
interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  achievements: string[];
  skills: string[];
}

// Usage
{experiences.map(exp => (
  <ExperienceCard key={exp.company} {...exp} />
))}
```

---

### Terminal Commands
**Location**: `/src/data/terminal-commands.ts`

```tsx
import { TERMINAL_COMMANDS, VALID_SECTIONS } from '@/data/terminal-commands';

// Access commands
const helpCommand = TERMINAL_COMMANDS.help;

// Validate sections
if (VALID_SECTIONS.includes(section)) {
  // Valid section
}
```

---

## 🎭 Section Components

### HeroSection
**Location**: `/src/components/sections/HeroSection.tsx`

```tsx
import HeroSection from '@/components/sections/HeroSection';

<HeroSection isSidebarVisible={true} />
```

**Features**:
- Lazy-loaded 3D shape (Three.js)
- Error boundary wrapped
- Responsive text sizing

---

### AboutSection
**Location**: `/src/components/sections/AboutSection.tsx`

```tsx
import AboutSection from '@/components/sections/AboutSection';

<AboutSection />
```

**Features**:
- Uses GlassCard component
- Semantic HTML
- Responsive typography

---

### SkillsSection
**Location**: `/src/components/sections/SkillsSection.tsx`

```tsx
import SkillsSection from '@/components/sections/SkillsSection';

<SkillsSection />
```

**Features**:
- Loads data from `/src/data/skills.ts`
- Responsive grid layout
- Hover effects

---

### ExperienceSection
**Location**: `/src/components/sections/ExperienceSection.tsx`

```tsx
import ExperienceSection from '@/components/sections/ExperienceSection';

<ExperienceSection />
```

**Features**:
- Loads data from `/src/data/experience.ts`
- Timeline layout
- Skill tags

---

### ContactSection
**Location**: `/src/components/sections/ContactSection.tsx`

```tsx
import ContactSection from '@/components/sections/ContactSection';

<ContactSection />
```

**Features**:
- Includes ContactForm
- Accessible form fields
- Error handling

---

## 🔒 Security

### Environment Validation
**Location**: `/src/lib/env.ts`

```tsx
import { env } from '@/lib/env';

// Type-safe access
const apiKey = env.RESEND_API_KEY;
const emailTo = env.CONTACT_EMAIL_TO;
```

**Features**:
- Validates at build time
- Type-safe access
- Clear error messages

**Required Variables**:
```env
RESEND_API_KEY=your_key
CONTACT_EMAIL_TO=your@email.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
```

---

## 📝 Best Practices

### When to Use GlassCard
✅ **Use for**:
- Content sections with glass effect
- Cards that need consistent styling
- Any element with glass morphism

❌ **Don't use for**:
- Elements that need different backgrounds
- Non-glass UI elements

### When to Use Custom Hooks
✅ **Use for**:
- Reusable logic across components
- Side effects that need cleanup
- State management patterns

❌ **Don't use for**:
- One-off logic
- Simple state (use useState directly)

### When to Extract Data
✅ **Extract when**:
- Content changes frequently
- Multiple components use same data
- Data has complex structure

❌ **Don't extract when**:
- Data is component-specific
- Data is very simple (1-2 fields)

---

## 🐛 Troubleshooting

### GlassCard not showing background
- Check that CSS variables are loaded
- Verify `backdrop-blur-md` is supported in browser

### useMediaQuery not updating
- Check that query string is valid CSS
- Verify browser supports matchMedia

### useScrollLock not working
- Ensure hook is called at component level
- Check for conflicting scroll styles

### Environment validation failing
- Verify all required variables in `.env.local`
- Check variable names match exactly
- Restart dev server after adding variables

---

## 📚 Additional Resources

- [AUDIT_REPORT.md](./AUDIT_REPORT.md) - Full audit findings
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - What was implemented
- [README.md](./README.md) - Project setup and overview
