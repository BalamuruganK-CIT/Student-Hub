import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { eventsData } from '@/lib/mock-data';

export function EventsFeed() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {eventsData.map((event) => (
        <Card key={event.id} className="flex flex-col">
          <CardHeader>
            <div className="relative aspect-video w-full mb-4">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="rounded-lg object-cover"
                data-ai-hint={event.imageHint}
              />
            </div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.date}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Register Now</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
