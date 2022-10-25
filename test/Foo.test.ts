import { Foo, isCuteNumberGreaterThan10 } from "../src/Foo";

describe("Foo", () => {
  it("bar", () => {
    expect(new Foo().bar()).toEqual("bar");
  });

  it("should return true given numbers: 1, 3, 5, 8, 12", () => {
    // given
    const numbers = [1, 3, 5, 8, 12];

    // when
    const res = isCuteNumberGreaterThan10(numbers);

    // then
    expect(res).toBeTruthy();
  });
});
