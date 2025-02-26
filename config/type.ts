export interface CatInterface {
    id: string;
    title: string;
    shorttitle?: string;
    key?: string;
    cover?: string;
    count?: string;
    path?: string;
}

export type Cat2SubMap = Record<string, CatInterface[]>;
