import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { scheduleData } from '@/lib/mock-data';
import { CalendarClock, MapPin } from 'lucide-react';

export function ScheduleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          <div className="space-y-4">
            {scheduleData.map((item, index) => (
              <div key={index}>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.course}</p>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <CalendarClock className="h-3.5 w-3.5" />
                        <span>{item.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                {index < scheduleData.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
