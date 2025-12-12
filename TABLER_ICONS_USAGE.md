# Tabler Icons Usage Guide

This project uses [Tabler Icons](https://tabler.io/icons) - a free and open-source icon library with 4964+ icons.

## Installation

The package is already installed:
```bash
npm install @tabler/icons-react
```

## Basic Usage

Import the icons you need and use them as React components:

```tsx
import { IconTarget, IconUsers, IconBriefcase } from '@tabler/icons-react';

// Use in your component
<IconTarget size={48} stroke={2} className="text-[#D4A017]" />
```

## Common Props

- `size`: Icon size in pixels (default: 24)
- `stroke`: Stroke width (default: 2)
- `color`: Icon color (can also use className with Tailwind)
- `className`: Additional CSS classes

## Examples

### With Custom Styling
```tsx
import { IconMail, IconPhone } from '@tabler/icons-react';

<IconMail size={24} className="text-[#D4A017] hover:text-[#B89014]" />
<IconPhone size={32} stroke={2.5} color="#0A1A2F" />
```

### In Buttons
```tsx
import { IconCalendar } from '@tabler/icons-react';

<Button>
  <IconCalendar size={20} className="mr-2" />
  Agendar Sesión
</Button>
```

### In Feature Cards
```tsx
import { IconTarget } from '@tabler/icons-react';

<FeatureCard
  title="Coaching Ejecutivo"
  icon={<IconTarget size={48} stroke={2} />}
/>
```

## Available Icons

Browse all available icons at: https://tabler.io/icons

Common icons for this project:
- `IconTarget` - Goals, objectives
- `IconUsers` - Teams, groups
- `IconBriefcase` - Business, work
- `IconMail` - Email, contact
- `IconPhone` - Phone, communication
- `IconCalendar` - Scheduling, dates
- `IconCheck` - Success, completion
- `IconArrowRight` - Navigation, next
- `IconMenu` - Navigation menu
- `IconX` - Close, cancel

## Icon Naming Convention

All icons are prefixed with `Icon` and use PascalCase:
- Target icon → `IconTarget`
- Users icon → `IconUsers`
- Mail icon → `IconMail`

## Styling with Tailwind

You can style icons using Tailwind classes:

```tsx
<IconTarget 
  size={48} 
  className="text-[#D4A017] hover:text-[#B89014] transition-colors" 
/>
```

## Resources

- [Tabler Icons Website](https://tabler.io/icons)
- [Tabler Icons GitHub](https://github.com/tabler/tabler-icons)
- [Icon Search](https://tabler.io/icons) - Search and browse all icons
