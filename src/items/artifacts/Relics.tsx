import type { Relics } from "../../types/hsr";
import { getRelicPieceIcon, getRelicSetIcon } from "../../utils/assets";
import { RelicsSets } from "../item/ResourcesLists";

export const RelicsList: Relics[] = [];

const AsNavigatorIseeSeesIt: Relics = {
    Set: RelicsSets.AsNavigatorIseeSeesItSet,
    icon: getRelicSetIcon("As Navigator Isee Sees It"),

    a1: {
        name: "Navigators Deep Space Mirror",
        image: getRelicPieceIcon("As Navigator Isee Sees It", "NavigatorsDeepSpaceMirror")
    },
    a2: {
        name: "",
        image: ""
    },
    a3: {
        name: "",
        image: ""
    },
    a4: {
        name: "",
        image: ""
    },
};

RelicsList.push(AsNavigatorIseeSeesIt)