import { AssignmentsTable } from '@/components/dashboard/assignments-table';

export default function AssignmentsPage() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl font-headline">Assignments</h1>
            </div>
            <div className="grid auto-rows-fr gap-4">
                <AssignmentsTable />
            </div>
        </>
    );
}
