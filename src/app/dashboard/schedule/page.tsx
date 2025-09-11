import { ScheduleCard } from '@/components/dashboard/schedule-card';

export default function SchedulePage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Today's Schedule</h1>
      </div>
      <div className="grid auto-rows-fr gap-4">
        <ScheduleCard />
      </div>
    </>
  );
}
