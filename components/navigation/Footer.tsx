import Link from 'next/link';
import { Container, Group, Text } from '@mantine/core';

const footerLinks = [
  { href: '/about', label: 'Sobre Mí' },
  { href: '/services', label: 'Servicios' },
  { href: '/methodology', label: 'Metodología' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1f2d] text-white mt-20">
      <Container size="xl" className="py-12">
        <Group justify="space-between" align="flex-start" mb="xl">
          <div>
            <h3 className="text-xl font-sans font-bold mb-4">Alejandro Valencia</h3>
            <p className="text-gray-300 max-w-md">
              Coaching Ejecutivo y Liderazgo Adaptativo para líderes que transforman equipos.
            </p>
          </div>

          <nav className="hidden md:block">
            <Group gap="xl">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#dcc97f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </Group>
          </nav>
        </Group>

        <div className="border-t border-gray-700 pt-8">
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} Alejandro Valencia. Todos los derechos reservados.
            </Text>
            <Text size="sm" c="dimmed">
              Liderazgo Adaptativo | Harvard Methodology
            </Text>
          </Group>
        </div>
      </Container>
    </footer>
  );
}
