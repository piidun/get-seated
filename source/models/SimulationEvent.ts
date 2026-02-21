export type ConversationInitiationStartedEvent = {
  readonly type: "conversation initiation started";
  readonly initiatorIndex: number;
  readonly initiatorStrength: number;
};

export type ConversationBegunEvent = {
  readonly type: "conversation begun";
  readonly intensity: number;
  readonly initiatorIndex: number;
  readonly initiatorStrength: number;
  readonly targetIndex: number;
  readonly targetDefense: number;
};

export type ConversationBlockedEvent = {
  readonly type: "conversation blocked";
  readonly initiatorIndex: number;
  readonly initiatorStrength: number;
  readonly targetIndex: number;
  readonly targetDefense: number;
};

export type ConversationResultEvent = {
  readonly type: "conversation result";
  readonly intensity: number;
  readonly initiatorIndex: number;
  readonly initiatorComfortLevel: number;
  readonly initiatorComfortLevelChange: number;
  readonly targetIndex: number;
  readonly targetComfortLevel: number;
  readonly targetComfortLevelChange: number;
};

export type IdleResultEvent = {
  readonly type: "idle result";
  readonly passengerIndex: number;
  readonly passengerComfortLevel: number;
  readonly passengerComfortLevelChange: number;
};

export type NoiseResultEvent = {
  readonly type: "noise result";
  readonly noiseType: "engine" | "conversation";
  readonly intensity: number;
  readonly passengerResults: readonly {
    readonly passengerIndex: number;
    readonly passengerComfortLevel: number;
    readonly passengerComfortLevelChange: number;
  }[];
};

export type SimulationEvent =
  | ConversationInitiationStartedEvent
  | ConversationBegunEvent
  | ConversationBlockedEvent
  | ConversationResultEvent
  | IdleResultEvent
  | NoiseResultEvent;
