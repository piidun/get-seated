type WithConversationStats = {
  /**
   * The strength of which a passenger with this {@link Persona} tries to start conversations with the surrounding passengers.
   *
   * Should be non-negative.
   */
  readonly conversationStartingStrength: number;

  /**
   * The strength with which a passenger with this {@link Persona} is able to fend off other passengers starting conversations.
   *
   * Should be non-negative.
   */
  readonly conversationStartingDefense: number;

  /**
   * The contribution of a passenger with this {@link Persona} towards the conversation intensity they are part of.
   *
   * The conversation intensity is the average of the two conversation intensity contributions.
   *
   * Should be non-negative.
   */
  readonly conversationIntensityContribution: number;

  /**
   * The change in comfort level of a passenger with this {@link Persona} if they are not in a conversation.
   */
  readonly idleComfortChange: number;

  /**
   * The factor that determines how the comfort level of a passenger with this {@link Persona} changes if they are in a conversation.
   *
   * The factor is multiplied with the conversation intensity to get the final change of the comfort level.
   */
  readonly ownConversationComfortFactor: number;
};

type WithGeneralStimuliStats = {
  /**
   * The factor that determines how the comfort level of a passenger with this {@link Persona} changes if they are subjected to noise.
   *
   * The factor is multiplied with the noise intensity to get the final change of the comfort level.
   */
  readonly noiseComfortFactor: number;
};

/**
 * A mechanical representation of a passenger archetype.
 */
export type Persona = WithConversationStats & WithGeneralStimuliStats;

const HassatiniBladder: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.1,
  noiseComfortFactor: 0,
};

const TerriFied: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.2,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

const DawnteWakemi: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 1.0,
  conversationIntensityContribution: 0.0,
  idleComfortChange: 0.5,
  ownConversationComfortFactor: -0.5,
  noiseComfortFactor: -0.5,
};

const LemmyTelya: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: -0.5,
  ownConversationComfortFactor: 1.0,
  noiseComfortFactor: -0.2,
};

const PaigeTurner: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.7,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.5,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

const Barftholomew: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.0,
  ownConversationComfortFactor: 0.2,
  noiseComfortFactor: -0.1,
};

const InaMeeting: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 0.5,
  conversationIntensityContribution: 0.8,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: -0.8,
  noiseComfortFactor: -1.0,
};

const BerryFiery: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.0,
  ownConversationComfortFactor: -0.4,
  noiseComfortFactor: -0.8,
};

const OldMan: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.8,
  idleComfortChange: -0.1,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.1, // can't really hear it that well
};

const NewlywedOne: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

const NewlywedTwo: Persona = {
  conversationStartingStrength: 0.8,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.5,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.5,
  noiseComfortFactor: -0.2,
};

const PartyBroOne: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: 0.8,
  noiseComfortFactor: 0.0, // they don't mind noise
};

const PartyBroTwo: Persona = {
  conversationStartingStrength: 1.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 1.0,
  idleComfortChange: 0.8,
  ownConversationComfortFactor: 0.8,
  noiseComfortFactor: 0.0, // they don't mind noise
};

const TiredMom: Persona = {
  conversationStartingStrength: 0.5,
  conversationStartingDefense: 0.1,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

const TiredDad: Persona = {
  conversationStartingStrength: 0.2,
  conversationStartingDefense: 0.2,
  conversationIntensityContribution: 0.2,
  idleComfortChange: 0.2,
  ownConversationComfortFactor: -0.2,
  noiseComfortFactor: -0.5,
};

const Baby: Persona = {
  conversationStartingStrength: 0.0,
  conversationStartingDefense: 0.0,
  conversationIntensityContribution: 0.8, // crying??
  idleComfortChange: 0.2,
  ownConversationComfortFactor: 0.0,
  noiseComfortFactor: -0.5,
};
