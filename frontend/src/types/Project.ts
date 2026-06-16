export interface ProjectData {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    demoUrl?: string;
    codeUrl?: string;
    color: string;
    warning?: string;
    credentials?: {
        label: string;
        accounts: { user: string; pass: string; label: string }[];
    };
    adminPanelUrl?: string;
}
