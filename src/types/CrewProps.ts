import { CrewDescription } from ".";

export interface CrewProps {
    crew: CrewDescription;
    changeTab: (index: number) => void;
}