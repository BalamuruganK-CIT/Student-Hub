import { AttendanceCard } from '@/components/dashboard/attendance-card';

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Student Dashboard</h1>
      </div>
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AttendanceCard />
      </div>
    </>
  );
}
