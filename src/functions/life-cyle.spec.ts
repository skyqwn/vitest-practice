import { delay } from "src/libs/delay";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  test,
} from "vitest";

describe("each", () => {
  beforeEach(() => {
    console.log("before each");
  });

  afterEach(() => {
    console.log("after each");
    console.log("");
  });

  test("1", () => {
    console.log("1");
  });

  test("2", () => {
    console.log("2");
  });
});

/**
 * 결과값이 1,2 로 나옴
 */
describe("all", () => {
  //   beforeAll(() => {
  //     console.log("before all");
  //   });

  //   afterAll(() => {
  //     console.log("after all");
  //     console.log("");
  //   });

  test("1", async () => {
    await delay(300);
    console.log("1");
  });

  test("2", async () => {
    await delay(100);
    console.log("2");
  });
});

/**
 * 결과값이 2,1,3,4 로 나옴
 * 병렬적으로 실행하기 때문에 2,1의 순서는 보장이 되고
 * sequential매소드를 사용하면 병렬적인 테스트 안에서도 직렬적으로 순서 보장받음
 */
describe.concurrent("concurrent", () => {
  test("1", async () => {
    await delay(300);
    console.log("1");
  });

  test("2", async () => {
    await delay(100);
    console.log("2");
  });

  test.sequential("sequential - 3", async () => {
    await delay(300);
    console.log("sequential- 3 ");
  });

  test.sequential("sequential - 4", async () => {
    await delay(100);
    console.log("sequential - 4");
  });
});

// describe.sequential
// describe.shuffle 무작위 실행
