# Priyanka Kumari — Personal Portfolio Website

A modern, high-performance dark-themed portfolio built for **Priyanka Kumari** inspired by the aesthetics of [jayeshlohani.tech](https://jayeshlohani.tech).

## 🚀 Built With
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS Starfield Pattern & Glassmorphism
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: CSS Keyframe Glows & Micro-interactions
- **Deployment**: Vercel-ready (`vercel.json` included)

---

## 🛠️ Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📝 How to Update Your Portfolio Content

All personal content (skills, project descriptions, experience, certifications, and social links) is centrally configured in:
👉 [`src/data/portfolioData.ts`](file:///c:/Users/priya/Desktop/PRIYAPORT/src/data/portfolioData.ts)

### 📌 Updating Project Live Demos & GitHub Links
In `src/data/portfolioData.ts`, update the `liveUrl` and `githubUrl` fields for **ResumeIQ**, **Verified RAG**, and **TripNova**:

```typescript
{
  id: "resumeiq",
  title: "ResumeIQ",
  // ...
  liveUrl: "https://your-resumeiq-demo.vercel.app", // Drop live demo link here
  githubUrl: "https://github.com/priyankaofficial0407-boop/resumeiq" // Drop GitHub repo link here
}
```

### 📄 Adding Your Resume PDF
1. Place your actual resume PDF file into the [`public/`](file:///c:/Users/priya/Desktop/PRIYAPORT/public) folder named `resume.pdf`.
2. The "Resume ↗" button in the Navbar will automatically open `/resume.pdf` in a new tab.

---

## 🌐 Social Profile Links Integrated
- **GitHub**: https://github.com/priyankaofficial0407-boop
- **LinkedIn**: https://www.linkedin.com/in/priyanka-kumari-03b539356/
- **LeetCode**: https://leetcode.com/u/6XXqsQfmlM/
