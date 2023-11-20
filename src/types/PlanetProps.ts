import { PlanetDescription } from ".";

export interface PlanetProps {
    planet: PlanetDescription;
    changeTab: (index: number) => void;
}