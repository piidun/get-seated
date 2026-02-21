import { levels } from "./data/levels.js";
import { renderPassportCards } from "./render/passportCard.js";

let currentLevel = levels.level1; // later: pick based on game state
renderPassportCards(currentLevel);
