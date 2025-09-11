export const attendanceData = {
  percentage: 82,
  threshold: 75,
};

export const scheduleData = [
  { time: '09:00 - 10:30', course: 'Data Structures & Algorithms', location: 'Room 301' },
  { time: '10:45 - 12:15', course: 'Database Management Systems', location: 'Lab 5' },
  { time: '13:30 - 15:00', course: 'Operating Systems', location: 'Room 204' },
  { time: '15:15 - 16:45', course: 'Software Engineering Principles', location: 'Room 410' },
];

export type Assignment = {
  course: string;
  title: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Overdue';
};

export const assignmentsData: Assignment[] = [
  { course: 'Data Structures & Algorithms', title: 'Implement a Red-Black Tree', dueDate: '2024-10-28', status: 'Pending' },
  { course: 'Database Management Systems', title: 'Normalization Exercise', dueDate: '2024-10-25', status: 'Pending' },
  { course: 'Operating Systems', title: 'Process Scheduling Simulation', dueDate: '2024-10-22', status: 'Submitted' },
  { course: 'Software Engineering Principles', title: 'Requirement Specification Document', dueDate: '2024-10-20', status: 'Submitted' },
  { course: 'Data Structures & Algorithms', title: 'Graph Traversal Algorithms', dueDate: '2024-10-15', status: 'Overdue' },
];

export const eventsData = [
  {
    id: '1',
    title: 'HackInnovate 2024',
    date: 'Nov 15-17, 2024',
    description: 'A 36-hour hackathon focused on building innovative solutions for a sustainable future.',
    image: 'https://picsum.photos/seed/event1/600/400',
    imageHint: 'coding hackathon'
  },
  {
    id: '2',
    title: 'Guest Lecture: AI in Modern Applications',
    date: 'Nov 20, 2024',
    description: 'Join us for an insightful talk by industry expert Dr. Evelyn Reed on the impact of AI.',
    image: 'https://picsum.photos/seed/event2/600/400',
    imageHint: 'lecture presentation'
  },
  {
    id: '3',
    title: 'Annual Sports Meet',
    date: 'Dec 5, 2024',
    description: 'Compete in various sports and cheer for your department. Let the games begin!',
    image: 'https://picsum.photos/seed/event3/600/400',
    imageHint: 'sports competition'
  },
  {
    id: '4',
    title: 'Cultural Night: "Spectrum"',
    date: 'Dec 12, 2024',
    description: 'An evening of music, dance, and drama showcasing the diverse talents of our students.',
    image: 'https://picsum.photos/seed/event4/600/400',
    imageHint: 'performance stage'
  },
];
