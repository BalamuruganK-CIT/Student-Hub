'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Bot, LayoutGrid, CalendarDays, BookCheck, Calendar } from 'lucide-react';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/dashboard/schedule', label: 'Schedule', icon: CalendarDays },
  { href: '/dashboard/assignments', label: 'Assignments', icon: BookCheck },
  { href: '/dashboard/events', label: 'Events', icon: Calendar },
  { href: 'http://localhost:9002/dashboard/chat', label: 'Academic Assistant', icon: Bot },
];

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex flex-col space-y-2', className)} {...props}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
            pathname === link.href && 'bg-accent text-primary'
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
