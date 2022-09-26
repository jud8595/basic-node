import { foo } from "./index";

test('foo is 1', () => {
    expect(foo(1)).toBe(1);
});
