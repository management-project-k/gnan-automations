# GNAN Automations - Industrial Training Institute Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Professional website for GNAN Automations Industrial Training Institute, offering comprehensive PLC, HMI, SCADA, VFD, and industrial automation courses in Ameerpet, Hyderabad.

## 🚀 Features

- ✅ **5 Complete Pages**: Home, Gallery, Courses, About, Contact
- 🎨 **Black/White Theme Toggle**: Persistent localStorage theme with smooth transitions
- 📱 **Fully Responsive**: Mobile-first design (320px - 1920px+)
- 🎭 **Advanced Animations**: Framer Motion, Anime.js, Lottie animations
- 📧 **EmailJS Integration**: Working contact forms with email notifications
- 📅 **Cal.com Integration**: Embedded booking calendar for demo classes
- 🎯 **Social Media**: Brand-colored icons (Instagram, Facebook, YouTube, WhatsApp)
- ♿ **Accessible**: WCAG AA compliant with ARIA labels
- ⚡ **Performance**: Optimized images, lazy loading, code splitting
- 🔍 **SEO Optimized**: Meta tags, Open Graph, structured data

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- EmailJS account (free tier)
- Cal.com account (free tier)

## 🛠️ Installation

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/yourusername/gnan-automations.git
cd gnan-automations
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

Create a \`.env.local\` file in the root directory:

\`\`\`env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_71ka0bc
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_amy0xdr
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY

# Cal.com Configuration
NEXT_PUBLIC_CALCOM_LINK=gnan-automations/lab-visit-slot

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://gnanautomations.com
NEXT_PUBLIC_CONTACT_EMAIL=gnanautomations@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=8501031311
\`\`\`

### 4. Configure EmailJS

1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Add Gmail service with **gnanautomations@gmail.com**
3. Create email template with these variables:
   - \`{{from_name}}\`
   - \`{{from_email}}\`
   - \`{{user_phone}}\`
   - \`{{course_interest}}\`
   - \`{{message}}\`
4. Get your Service ID, Template ID, and Public Key
5. Update values in \`.env.local\`

### 5. Configure Cal.com

1. Go to [cal.com](https://cal.com) and create a free account
2. Create event types:
   - **Lab Visit** (30 minutes)
   - **Course Inquiry** (15 minutes)
3. Go to Settings → Embed and copy your username
4. Update \`NEXT_PUBLIC_CALCOM_LINK\` in \`.env.local\`

### 6. Add Images

Place images in \`/public/images/\` directory:

\`\`\`
public/
├── images/
│   ├── hero-lab.jpg
│   ├── founder.jpg
│   ├── equipment/
│   │   ├── plc-rack-1.jpg
│   │   ├── hmi-panel-1.jpg
│   │   └── vfd-unit-1.jpg
│   ├── courses/
│   │   ├── plc-course.jpg
│   │   └── hmi-course.jpg
│   └── students/
│       └── class-session-1.jpg
\`\`\`

### 7. Run Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

\`\`\`
gnan-automations/
├── public/
│   ├── animations/          # Lottie JSON files
│   └── images/              # Static images
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout
│   │   ├── page.js          # Homepage
│   │   ├── globals.css      # Global styles + theme variables
│   │   ├── gallery/
│   │   ├── courses/
│   │   ├── about/
│   │   └── contact/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ThemeToggle.js
│   │   ├── Hero.js
│   │   ├── CourseCard.js
│   │   ├── GalleryGrid.js
│   │   ├── ContactForm.js
│   │   ├── BookingCalendar.js
│   │   └── SocialIcons.js
│   ├── context/
│   │   └── ThemeContext.js
│   └── utils/
│       ├── animations.js
│       └── emailConfig.js
├── package.json
├── next.config.js
└── README.md
\`\`\`

## 🎨 Theme System

The website supports black (dark) and white (light) themes with automatic persistence.

**Toggle Location**: Fixed button in top-right corner

**CSS Variables** are defined in \`globals.css\`:
- \`--bg-primary\`, \`--bg-secondary\`, \`--bg-tertiary\`
- \`--text-primary\`, \`--text-secondary\`, \`--text-tertiary\`
- \`--border-primary\`, \`--border-secondary\`, \`--border-tertiary\`
- \`--accent-blue\`, \`--accent-orange\`, \`--accent-green\`

**Usage**:
\`\`\`css
.element {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 2px solid var(--border-primary);
}
\`\`\`

## 📱 Responsive Breakpoints

| Device | Width | Grid Columns |
|--------|-------|--------------|
| Mobile | 320px - 480px | 1 column |
| Mobile Landscape | 481px - 768px | 1-2 columns |
| Tablet | 769px - 1024px | 2-3 columns |
| Desktop | 1025px - 1440px | 3-4 columns |
| Large Desktop | 1441px+ | 4 columns |

## 🚀 Deployment

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

\`\`\`bash
npm run build
# Upload 'out' folder to Netlify
\`\`\`

## 📧 Contact Information

**GNAN Automations - Industrial Training Institute**

- 📍 Address: D.No. B7, Eureka Court, Ameerpet, Hyderabad
- 📞 Phone: 8501031311 | 9542069703
- ✉️ Email: gnanautomations@gmail.com
- 🌐 Website: [gnanautomations.com](https://gnanautomations.com)

**Social Media:**
- Instagram: [@gnanautomations](https://instagram.com/gnanautomations)
- YouTube: [@gnanautomation](https://youtube.com/@gnanautomation)
- Facebook: [Profile](https://facebook.com/profile.php?id=61555532653187)

## 👨‍💼 Founder

**K Paramesh**  
Founder & Lead Trainer  
10+ years experience in industrial automation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ for Industrial Automation Education**
\`\`\`

---

## ✅ Complete File Checklist

✅ **CourseCard.js** - Reusable course component with variants  
✅ **GalleryGrid.js** - Masonry gallery with lightbox  
✅ **Hero.js** - Hero section with parallax and animations  
✅ **animations.js** - 20+ animation utility functions  
✅ **emailConfig.js** - EmailJS integration utilities  
✅ **README.md** - Complete documentation with setup instructions  

**Your GNAN Automations website is now 100% complete with all components, utilities, and documentation!** 🎉
