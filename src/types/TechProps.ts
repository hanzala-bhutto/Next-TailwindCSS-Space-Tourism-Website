import { TechDescription } from ".";

export interface TechProps {
    technology: TechDescription;
    changeTab: (index: number) => void;
}