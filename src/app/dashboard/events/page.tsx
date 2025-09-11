import { EventsFeed } from '@/components/dashboard/events-feed';

export default function EventsPage() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl font-headline">Upcoming Events</h1>
            </div>
            <div className="auto-rows-fr gap-4">
                <EventsFeed />
            </div>
        </>
    );
}
