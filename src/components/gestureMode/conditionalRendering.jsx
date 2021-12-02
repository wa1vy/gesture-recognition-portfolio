import {HardSkillsPage} from '../hardSkillsPage'
import ProjectsPage from '../projectsPage'
import BasePage from './basePage/basePage'
import PalmPage from "../PalmPage";
import Contacts from "../Contacts";

export const ConditionalRendering = {
    victory: HardSkillsPage,
    thumbs_up: ProjectsPage,
    base: BasePage,
    rock: BasePage,
    palm: PalmPage,
    hangTen: Contacts
}

export function SpecificGesturePage(gestureName) {
    const SpecificPage = ConditionalRendering[gestureName];
    return (
            <SpecificPage/>
    );
}