export interface Question {
    id: number;
    title: string;
    comment: string;
    correct: boolean;
    level: string;
    category: string;
    image?:string;
}