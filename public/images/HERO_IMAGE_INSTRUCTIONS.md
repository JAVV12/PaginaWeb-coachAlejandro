# Hero Image Instructions

## Current Setup
The hero section is currently using an SVG placeholder (`hero.svg`). 

## Recommended Image Specifications

To replace the placeholder with your actual hero image:

### File Requirements
- **Format**: JPG or WebP (JPG recommended for compatibility)
- **Filename**: `hero.jpg` (place in `/public/images/`)
- **Dimensions**: 1200x800px minimum (or 3:2 aspect ratio)
- **File Size**: Optimized for web (under 500KB recommended)

### Image Content Suggestions
The hero image should be:
- Professional headshot of Alejandro Valencia, OR
- A professional coaching/leadership themed image
- High quality, well-lit, professional photography
- Should convey trust, professionalism, and leadership

### Design Considerations
- The image will be displayed with a dark navy blue gradient overlay in some sections
- Ensure the subject is well-lit and stands out
- Consider the text overlay - ensure good contrast
- The image should work well with the navy blue (#0A1A2F) and gold (#D4A017) color scheme

### How to Replace
1. Add your image as `hero.jpg` to `/public/images/`
2. The component will automatically use it (it's already configured to look for `hero.jpg`)
3. If you use a different filename, update `app/(marketing)/components/Hero.tsx`

### Image Optimization
Before uploading, optimize your image using:
- [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Ensure it's compressed but maintains quality
- Consider creating a WebP version for better performance

### Alternative: Use the SVG
The current SVG placeholder is professional and matches your brand colors. You can keep it if you prefer a minimalist approach, or use it as a fallback while sourcing the perfect image.
