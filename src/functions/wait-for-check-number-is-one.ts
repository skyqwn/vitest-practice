import { delay } from "src/libs/delay";

export class TypeError extends Error {
  constructor(message?: string) {
    super();
    this.message = message ?? "";
  }
}

export const waitForcheckNumberIsOne = async (
  target: any
): Promise<boolean> => {
  await delay(100);

  const isNumber = typeof target === "number";

  if (!isNumber) throw new TypeError("shold be a number");

  const ok = target === 1;

  return ok;
};
