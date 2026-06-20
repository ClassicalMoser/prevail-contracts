/**
 * Asserts that two types are exactly the same at compile time.
 *
 * @example
 * const _typesMatch: AssertExact<ManualType, z.infer<typeof schema>> = true;
 */
export type AssertExact<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : never
  : never;
