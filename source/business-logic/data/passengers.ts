import DudesonSprite from "../../../assets/dudeson.png";
import WomanSprite from "../../../assets/woman.png";
import { Passenger } from "../models/Passenger";
import { Personality } from "../models/Personality";

export const HassatiniBladder: Passenger = {
  name: "Hassatini Bladder",
  age: "32",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.2,
    conversationIntensityContribution: 0.2,
    idleComfortChange: -0.1,
    ownConversationComfortFactor: 0.1,
    noiseComfortFactor: 0,
  },
};

export const TerryFied: Passenger = {
  name: "Terry Fied",
  age: "27",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.0,
    conversationIntensityContribution: 0.2,
    idleComfortChange: -0.1,
    ownConversationComfortFactor: 0.5,
    noiseComfortFactor: -0.2,
  },
};

export const DawnTewakemi: Passenger = {
  name: "Dawn Tewakemi",
  age: "56",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.0,
    conversationStartingDefense: 1.0,
    conversationIntensityContribution: 0.0,
    idleComfortChange: 0.5,
    ownConversationComfortFactor: -0.5,
    noiseComfortFactor: -0.5,
  },
};

export const LemmyTelya: Passenger = {
  name: "Lemmy Telya",
  age: "47",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 1.0,
    conversationStartingDefense: 0.0,
    conversationIntensityContribution: 1.0,
    idleComfortChange: -0.5,
    ownConversationComfortFactor: 1.0,
    noiseComfortFactor: -0.2,
  },
};

export const PaigeTurner: Passenger = {
  name: "Paige Turner",
  age: "53",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.7,
    conversationIntensityContribution: 0.2,
    idleComfortChange: 0.5,
    ownConversationComfortFactor: -0.2,
    noiseComfortFactor: -0.5,
  },
};

export const Barftholomew: Passenger = {
  name: "Barftholomew",
  age: "22",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.2,
    conversationIntensityContribution: 0.2,
    idleComfortChange: 0.0,
    ownConversationComfortFactor: 0.2,
    noiseComfortFactor: -0.1,
  },
};

export const InaMeeting: Passenger = {
  name: "Ina Meeting",
  age: "43",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.0,
    conversationStartingDefense: 0.5,
    conversationIntensityContribution: 0.8,
    idleComfortChange: 0.8,
    ownConversationComfortFactor: -0.8,
    noiseComfortFactor: -1.0,
  },
};

export const BerryFieri: Passenger = {
  name: "Berry Fieri",
  age: "36",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.2,
    conversationIntensityContribution: 0.5,
    idleComfortChange: 0.0,
    ownConversationComfortFactor: -0.4,
    noiseComfortFactor: -0.8,
  },
};

export const OldMan: Passenger = {
  name: "Clarence",
  age: "83",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 0.8,
    conversationStartingDefense: 0.0,
    conversationIntensityContribution: 0.8,
    idleComfortChange: -0.1,
    ownConversationComfortFactor: 0.5,
    noiseComfortFactor: -0.1, // can't really hear it that well
  },
};

const newlywedPersonality: Personality = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

export const MaxineInlove: Passenger = {
  name: "Maxine Inlove",
  age: "29",
  avatar: WomanSprite,
  personality: newlywedPersonality,
};

export const MaxInlove: Passenger = {
  name: "Max Inlove",
  age: "33",
  avatar: DudesonSprite,
  personality: newlywedPersonality,
};

const partyBroPersonality: Personality = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: 0.1,
  ownConversationComfortFactor: 0.8,
  noiseComfortFactor: 0.0, // they don't mind noise
};

export const PartyBroOne: Passenger = {
  name: "PartyBroOne",
  age: "24",
  avatar: DudesonSprite,
  personality: partyBroPersonality,
};

export const PartyBroTwo: Passenger = {
  name: "PartyBroTwo",
  age: "24",
  avatar: DudesonSprite,
  personality: partyBroPersonality,
};

export const TiredMom: Passenger = {
  name: "TiredMom",
  age: "28",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.5,
    conversationStartingDefense: 0.1,
    conversationIntensityContribution: 0.2,
    idleComfortChange: 0.2,
    ownConversationComfortFactor: -0.2,
    noiseComfortFactor: -0.5,
  },
};

export const TiredDad: Passenger = {
  name: "TiredDad",
  age: "30",
  avatar: DudesonSprite,
  personality: {
    conversationStartingStrength: 0.2,
    conversationStartingDefense: 0.2,
    conversationIntensityContribution: 0.2,
    idleComfortChange: 0.2,
    ownConversationComfortFactor: -0.2,
    noiseComfortFactor: -0.5,
  },
};

export const Baby: Passenger = {
  name: "Baby",
  age: "0",
  avatar: WomanSprite,
  personality: {
    conversationStartingStrength: 0.0,
    conversationStartingDefense: 0.0,
    conversationIntensityContribution: 0.8, // crying??
    idleComfortChange: 0.2,
    ownConversationComfortFactor: 0.0,
    noiseComfortFactor: -0.5,
  },
};

export const passengers = {
  HassatiniBladder,
  TerryFied,
  DawnTewakemi,
  LemmyTelya,
  PaigeTurner,
  Barftholomew,
  InaMeeting,
  BerryFieri,
  OldMan,
  MaxineInlove,
  MaxInlove,
  PartyBroOne,
  PartyBroTwo,
  TiredMom,
  TiredDad,
  Baby,
};
