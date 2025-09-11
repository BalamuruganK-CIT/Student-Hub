import { ChatInterface } from '@/components/chat-interface';

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex items-center p-4 border-b">
            <h1 className="text-lg font-semibold md:text-2xl font-headline">Academic Assistant</h1>
        </div>
      <ChatInterface />
    </div>
  );
}
