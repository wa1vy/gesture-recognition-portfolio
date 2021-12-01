import {MyHardSkillsPage} from './components/MyHardSkillsPage'
import MyProjectsPage from './components/MyProjectsPage'
import BasePage from './components/basePage'
import PalmPage from "./components/PalmPage";

export const ConditionalRendering = {
    victory: MyHardSkillsPage,
    thumbs_up: MyProjectsPage,
    base: BasePage,
    rock: BasePage,
    palm: PalmPage,
}

export function SpecificGesturePage(gestureName) {
    const SpecificPage = ConditionalRendering[gestureName];
    return (
            <SpecificPage/>
    );
}