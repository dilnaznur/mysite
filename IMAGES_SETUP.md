# Birthday Game - Image Setup Guide

Place the following images in the `/public/images/` directory:

## Required Images

1. **photo.jpg** - Main profile photo (circular, ~280x280px recommended)
   - Used on Welcome screen

2. **letter_mom.jpg** - Letter photo from mom
   - Used on Gift1 screen

3. **letter_dad.jpg** - Letter photo from dad
   - Used on Gift1 screen

4. **school1.jpeg** through **school5.jpeg** - School memories photos
   - Used on Gift2 screen in 2x2.5 grid

## Notes

- All images will gracefully fallback to pink gradient boxes with flower decorations if missing
- JPEG/JPG and PNG formats are supported
- Recommended dimensions for photos: 300x300px minimum for good quality
- The app is fully functional even without images (fallback UI will display)

## To Add Images

Simply place your image files in:
```
/public/images/
├── photo.jpg
├── letter_mom.jpg
├── letter_dad.jpg
├── school1.jpeg
├── school2.jpeg
├── school3.jpeg
├── school4.jpeg
└── school5.jpeg
```

The app will automatically use them!
