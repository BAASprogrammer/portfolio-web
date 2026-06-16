export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    type: 'work' | 'education';
    icon: React.ReactNode;
    color: string;
    details: {
        title: string;
        content: string;
        highlight: string;
        icon: React.ReactNode;
        color: string;
    }[];
    technologies: string[];
    badge?: string;
}
