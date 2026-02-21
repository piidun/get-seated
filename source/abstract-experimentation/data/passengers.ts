import { Passenger } from "../models/Passenger.js";
import { Personality } from "../models/Personality.js";

export const HassatiniBladder: Passenger = {
  name: "Hassatini Bladder",
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
  personality: newlywedPersonality,
};

export const MaxInlove: Passenger = {
  name: "Max Inlove",
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
  personality: partyBroPersonality,
};

export const PartyBroTwo: Passenger = {
  name: "PartyBroTwo",
  personality: partyBroPersonality,
};

export const TiredMom: Passenger = {
  name: "TiredMom",
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
  personality: {
    conversationStartingStrength: 0.0,
    conversationStartingDefense: 0.0,
    conversationIntensityContribution: 0.8, // crying??
    idleComfortChange: 0.2,
    ownConversationComfortFactor: 0.0,
    noiseComfortFactor: -0.5,
  },
};
