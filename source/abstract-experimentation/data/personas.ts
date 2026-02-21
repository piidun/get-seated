import { Persona } from "../models/Persona.js";

export const HassatiniBladder: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.1,
  noiseComfortFactor: 0,
};

export const TerriFied: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.2,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

export const DawnteWakemi: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 1.0,
  conversationIntensityContribution: 0.0,
  idleComfortChange: 0.5,
  ownConversationComfortFactor: -0.5,
  noiseComfortFactor: -0.5,
};

export const LemmyTelya: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: -0.5,
  ownConversationComfortFactor: 1.0,
  noiseComfortFactor: -0.2,
};

export const PaigeTurner: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.7,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.5,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

export const Barftholomew: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.0,
  ownConversationComfortFactor: 0.2,
  noiseComfortFactor: -0.1,
};

export const InaMeeting: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 0.5,
  conversationIntensityContribution: 0.8,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: -0.8,
  noiseComfortFactor: -1.0,
};

export const BerryFiery: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.0,
  ownConversationComfortFactor: -0.4,
  noiseComfortFactor: -0.8,
};

export const OldMan: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.8,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.1, // can't really hear it that well
};

export const NewlywedOne: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

export const NewlywedTwo: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

export const PartyBroOne: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: 0.8,
  noiseComfortFactor: 0.0, // they don't mind noise
};

export const PartyBroTwo: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: 0.8,
  noiseComfortFactor: 0.0, // they don't mind noise
};

export const TiredMom: Persona = {
  conversationStartingStrength: 0.5,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

export const TiredDad: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

export const Baby: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.8, // crying??
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.0,
  noiseComfortFactor: -0.5,
};
