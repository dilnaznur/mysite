# Гаухардың Өмір Симуляторы - Birthday Game

A beautiful, interactive multi-screen birthday game built with React and Vite. Play through three levels of trivia, unlock special gift screens, and end with a heartfelt typewriter letter.

## 🎮 Game Features

### Screen Flow
1. **Welcome** - Introduction with profile photo
2. **Level 1 (Childhood)** - 3 trivia questions
   - Did she go to kindergarten?
   - What was her favorite toy?
   - What hairstyle did she give her sister?

3. **Gift 1** - Animated envelope with letters from parents
4. **Level 2 (School Years)** - 2 trivia questions
   - What were her favorite subjects? (multi-select)
   - When didn't she cry?

5. **Gift 2** - Photo grid of school memories + Music badge
6. **Level 3 (Present Time)** - 3 interactive questions
   - Escape button game (catch me if you can!)
   - What's her favorite city?
   - Who's the best in the family?

7. **Gift 3** - Final heartfelt letter with falling petals animation

### Features
✨ **Animated Transitions** - Smooth fade-in animations between screens  
🎨 **Beautiful Pink Theme** - Custom CSS variables and gradients  
🌸 **Interactive Questions** - Single choice, multi-select, and text input  
✏️ **Typewriter Effect** - Letter displays character by character  
🎭 **Animated Elements** - Envelope opening, button escape game, falling petals  
📱 **Responsive Design** - Works on mobile and desktop  
🎵 **Music Badge** - Reference to Ed Sheeran's Photograph  
🌼 **SVG Decorations** - Reusable flower decorations throughout  

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.jsx                 # Main state machine router
├── main.jsx               # React entry point
├── styles/
│   └── global.css         # All styles, animations, variables
├── components/
│   ├── FlowerDecor.jsx    # SVG flower component
│   ├── ProgressDots.jsx   # Level progress indicator
│   ├── QuestionCard.jsx   # Reusable question component
│   └── PhotoCard.jsx      # Photo with fallback
└── screens/
    ├── Welcome.jsx        # Start screen
    ├── Level1.jsx         # Childhood questions
    ├── Gift1.jsx          # Animated envelope + letters
    ├── Level2.jsx         # School questions
    ├── Gift2.jsx          # School photos grid
    ├── Level3.jsx         # Present time game
    └── Gift3.jsx          # Final letter with animation
```

## 🎨 Design System

### Color Palette
- Pink Light: `#fff0f5` (background)
- Pink Soft: `#ffe4ee`
- Pink Mid: `#ffc2d4`
- Pink Strong: `#ff85a1`
- Pink Accent: `#e8527a` (primary)
- Cream: `#fffaf7` (cards)
- Text Dark: `#4a2535`
- Text Mid: `#7a4560`

### Typography
- Headings: Playfair Display (serif)
- Body: Nunito (sans-serif)
- Both loaded from Google Fonts

### Animations
- `fadeIn` - Screen transitions
- `shake` - Wrong answer feedback
- `pulse` - Celebration text
- `envelopeOpen` - Letter envelope flap
- `slideUp` - Letter emerging
- `floatPetal` - Falling petals
- `blink` - Typewriter cursor

## 📝 Question Types

### Single Choice
User clicks one button. If correct, move to next. If wrong, shake animation + error message.

### Multi-Select
User checks boxes, then clicks "Растау ✓" button. All selections must match correct answers.

### Text Input
User types answer, clicks "Тексеру" button. Comparison is case-insensitive with trim.

## 🖼️ Setting Up Images

Place images in `/public/images/`:
- `photo.jpg` - Welcome screen profile photo
- `letter_mom.jpg` - Letter from mom
- `letter_dad.jpg` - Letter from dad  
- `school1.jpeg` through `school5.jpeg` - School memories

See `IMAGES_SETUP.md` for details. All images gracefully fallback to pink gradient + flower icon if missing.

## 🎬 Escape Button Game

Level 3's first question features an interactive escape button. When the button appears:
- Hover over it and it moves away (random position within 300px)
- You have 5 seconds to catch it
- After 5 seconds, the button becomes clickable and you advance

This creates a fun, playful interaction that tests reflexes!

## ✍️ Final Letter

The Gift3 screen displays a heartfelt Kazakh letter about the birthday person's journey. The letter:
- Displays character by character (typewriter effect)
- Takes ~30 seconds to fully appear
- Shows a blinking cursor while typing
- Displays a celebration message when complete
- Animated falling petals in background

## 🌐 Language

The entire game is in Kazakh (Cyrillic script). All text, questions, buttons, and the final letter are localized.

## 🔧 Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool & dev server
- **Plain CSS** - No CSS-in-JS or UI library
- **Google Fonts** - Playfair Display + Nunito

## 📦 Build Output

```
dist/
├── index.html           (0.64 KB)
├── assets/
│   ├── index-[hash].css (7.17 KB gzipped: 1.91 KB)
│   └── index-[hash].js  (204.71 KB gzipped: 64.66 KB)
```

Optimized for production with minimal bundle size.

## 🎯 Component APIs

### QuestionCard
```jsx
<QuestionCard
  type="single" | "multi" | "text"
  question="Question text"
  options={["Option 1", "Option 2"]}
  correct="Option 1" | ["Option 1", "Option 2"]
  onCorrect={() => nextScreen()}
/>
```

### PhotoCard
```jsx
<PhotoCard
  src="/images/photo.jpg"
  caption="Caption text"
/>
```

### ProgressDots
```jsx
<ProgressDots current={0} /> // 0, 1, or 2
```

### FlowerDecor
```jsx
<FlowerDecor
  size={40}
  color="var(--pink-mid)"
  position={{ position: 'absolute', top: '10px', left: '10px' }}
/>
```

## 🚦 State Management

The app uses React `useState` hooks for all state:
- `App.jsx` - Screen navigation (state machine)
- Level screens - Step counters for multi-question levels
- `Gift3.jsx` - Typewriter progression and celebration state
- `Level3.jsx` - Escape button game state

No global state management needed for this single-player game.

## ✨ Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

CSS variables and animations are widely supported. The app is fully responsive.

## 📄 License

Built as a special birthday gift. Feel free to customize for other occasions!

---

**Ready to play?** Run `npm run dev` and enjoy! 🎉
