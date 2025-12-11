'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Burger, Container, Group } from '@mantine/core';

const navLinks = [
  { href: '/about', label: 'Sobre Mí' },
  { href: '/services', label: 'Servicios' },
  { href: '/methodology', label: 'Metodología' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacto' },
];

export function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="bg-[#0d1f2d] border-b border-[#0f2330] sticky top-0 z-50">
      <Container size="xl" className="py-4">
        <Group justify="space-between" align="center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/svgs/logo.svg"
              alt="Alejandro Valencia"
              width={40}
              height={40}
              className="drop-shadow-lg"
            />
            <span className="text-xl font-playfair font-bold text-[#dcc97f] drop-shadow-lg leading-tight uppercase">
              <span className="block">Alejandro</span>
              <span className="block">Valencia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Group gap="xl" visibleFrom="md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#dcc97f] transition-colors font-medium drop-shadow-md"
              >
                {link.label}
              </Link>
            ))}
            <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary">
              Agendar Sesión
            </Button>
          </Group>

          {/* Mobile Menu Button */}
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            hiddenFrom="md"
            size="sm"
          />
        </Group>

        {/* Mobile Navigation */}
        {opened && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpened(false)}
                className="block text-white hover:text-[#dcc97f] transition-colors font-medium py-2 drop-shadow-md"
              >
                {link.label}
              </Link>
            ))}
            <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="w-full">
              Agendar Sesión
            </Button>
          </div>
        )}
      </Container>
    </nav>
  );
}
