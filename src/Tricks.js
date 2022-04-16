import { trickData } from "./TrickData.js";

export const tricks = trickData.map((val, index) => {
    return {value: index, label: val.trickName}
});