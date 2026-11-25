import type { Relics } from "../../types/hsr";
import { getRelicPieceIcon, getRelicSetIcon } from "../../utils/assets";
import { RelicsSets } from "../item/ResourcesLists";

export const RelicsList: Relics[] = [];

const AsNavigatorIseeSeesIt: Relics = {
    Set: RelicsSets.AsNavigatorIseeSeesItSet,
    icon: getRelicSetIcon("As Navigator Isee Sees It"),

    a1: {
        name: "Navigator's Deep Space Mirror",
        image: getRelicPieceIcon("As Navigator Isee Sees It", "NavigatorsDeepSpaceMirror")
    },
    a2: {
        name: "Navigator's Game Die",
        image: getRelicPieceIcon("Navigators Game Die",  "NavigatorsDeepSpaceMirror")
    },
    a3: {
        name: "Navigator's Astral Chart Uniform",
        image: getRelicPieceIcon("NavigatorsAstralChartUniform", "NavigatorsDeepSpaceMirror")
    },
    a4: {
        name: "Navigator's Everstride Boots",
        image: getRelicPieceIcon("NavigatorsEverstrideBoots", "NavigatorsDeepSpaceMirror")
    },
};

RelicsList.push(AsNavigatorIseeSeesIt)