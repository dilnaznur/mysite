# 🚀 Quick Start Guide

## Installation & Running

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open your browser to:
# http://localhost:5173
```

## 📸 Adding Your Photos

1. Create 8 images and place them in `/public/images/`:
   - `photo.jpg` - Profile photo (280x280px recommended)
   - `letter_mom.jpg` - Letter from mom
   - `letter_dad.jpg` - Letter from dad
   - `school1.jpeg` to `school5.jpeg` - School memories

2. The game works perfectly even without images (will show pink gradient + flowers as fallback)

## 🎯 Game Walkthrough

| Screen | What to Do | Next |
|--------|-----------|------|
| Welcome | Click "Ойынды бастау 🌸" | → Level 1 |
| Level 1 Q1 | Answer: "Жоқ" (No kindergarten) | → Q2 |
| Level 1 Q2 | Answer: "Пупс с ванной" (Doll) | → Q3 |
| Level 1 Q3 | Type: "Челка" (Bangs) | → Gift 1 |
| Gift 1 | Wait for envelope to open | → Level 2 |
| Level 2 Q1 | Select all 3 subjects, click "Растау ✓" | → Q2 |
| Level 2 Q2 | Answer: "Сабаққа кешіккенде" (Late to class) | → Gift 2 |
| Gift 2 | View school photos, click "Жалғастыру →" | → Level 3 |
| Level 3 Q1 | Catch the button within 5 seconds | → Q2 |
| Level 3 Q2 | Answer: "Цюрих" (Zurich) | → Q3 |
| Level 3 Q3 | Choose any option (all correct) | → Gift 3 |
| Gift 3 | Watch letter appear, celebrate! | 🎉 |

## 📝 Customizing for Your Person

Edit the following files to personalize:

### Questions
- `src/screens/Level1.jsx` - Childhood questions
- `src/screens/Level2.jsx` - School years questions
- `src/screens/Level3.jsx` - Present time questions

### Final Letter
- `src/screens/Gift3.jsx` - Replace the `fullText` content

### Colors (Optional)
- `src/styles/global.css` - Modify CSS variables in `:root`

### Text Labels
- All button labels and titles can be customized in respective screen files

## 🎨 File Locations Quick Reference

```
mysite/
├── src/
│   ├── App.jsx ...................... State machine / routing
│   ├── main.jsx ..................... Entry point
│   ├── styles/global.css ............ All CSS & animations
│   ├── components/
│   │   ├── FlowerDecor.jsx
│   │   ├── ProgressDots.jsx
│   │   ├── QuestionCard.jsx
│   │   └── PhotoCard.jsx
│   └── screens/
│       ├── Welcome.jsx ............. Start screen
│       ├── Level1.jsx .............. Childhood
│       ├── Gift1.jsx ............... Envelope + letters
│       ├── Level2.jsx .............. School
│       ├── Gift2.jsx ............... Photos grid
│       ├── Level3.jsx .............. Present + game
│       └── Gift3.jsx ............... Final letter
├── public/
│   └── images/ ..................... Place photos here
├── index.html ....................... Add Google Fonts
├── package.json ..................... Dependencies
├── vite.config.js ................... Build config
└── README.md ........................ Full documentation
```

## ⚡ Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Build for production
npm run preview  # Preview production build
```

## ✨ Key Features

- ✅ No UI library dependencies (plain CSS only)
- ✅ Fully responsive (mobile + desktop)
- ✅ Smooth animations & transitions
- ✅ Graceful image fallbacks
- ✅ ~65KB gzipped (very fast)
- ✅ Zero configuration needed
- ✅ All in Kazakh language

## 🐛 Troubleshooting

**Images not showing?**
- Place them in `/public/images/` with correct names
- The app still works without images (fallback UI displays)

**Port 5173 already in use?**
- Vite will automatically use next available port
- Check console output for the URL

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)

**Build errors?**
- Run `npm install` again
- Delete `node_modules` and `.vite` folders, then reinstall

---

**Need help?** See `README.md` for full documentation or `IMAGES_SETUP.md` for image setup details.
