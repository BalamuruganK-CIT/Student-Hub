import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { assignmentsData, Assignment } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';

export function AssignmentsTable() {
  const getBadgeVariant = (status: Assignment['status']) => {
    switch (status) {
      case 'Submitted':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Overdue':
        return 'destructive';
      default:
        return 'outline';
    }
  };
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Assignments</CardTitle>
        <CardDescription>Manage and track your coursework.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignmentsData.map((assignment, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{assignment.course}</TableCell>
                <TableCell>{assignment.title}</TableCell>
                <TableCell>{assignment.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(assignment.status)} className={cn('text-xs', {'bg-green-500': assignment.status === 'Submitted'})}>
                    {assignment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
