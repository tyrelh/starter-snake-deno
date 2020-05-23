import { assert } from "https://deno.land/std/testing/asserts.ts";
import { root } from "../app/main.ts";

Deno.test("Root response contains expected fields", () => {
  // when
  const result = root();
  // then
  assert(result?.apiversion);
  assert(result?.author);
  assert(result?.head);
  assert(result?.tail);
  assert(result?.color);
});
