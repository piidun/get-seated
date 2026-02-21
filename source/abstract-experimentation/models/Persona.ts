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
