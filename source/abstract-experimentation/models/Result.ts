export type Result<TValue = void> =
  | ({ readonly success: true } & (TValue extends void
      ? {}
      : { readonly value: TValue }))
  | {
      readonly success: false;
      readonly error: string;
    };
