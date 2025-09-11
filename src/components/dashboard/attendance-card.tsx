'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { attendanceData } from '@/lib/mock-data';
import { TrendingUp } from 'lucide-react';
import {
  PolarGrid,
  RadialBar,
  RadialBarChart,
} from 'recharts';

export function AttendanceCard() {
  const chartData = [
    { name: 'attendance', value: attendanceData.percentage, fill: 'hsl(var(--primary))' },
  ];
  const isBelowThreshold = attendanceData.percentage < attendanceData.threshold;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Attendance</CardTitle>
        <CardDescription>Current Semester</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{
            attendance: {
              label: 'Attendance',
              color: 'hsl(var(--primary))',
            },
          }}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            barSize={20}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4" /> {attendanceData.threshold}% Required
        </div>
        <div
          className={`leading-none ${
            isBelowThreshold ? 'text-destructive' : 'text-muted-foreground'
          }`}
        >
          {isBelowThreshold
            ? `Your attendance is below the required ${attendanceData.threshold}%.`
            : `You are maintaining good attendance.`}
        </div>
      </CardFooter>
    </Card>
  );
}
