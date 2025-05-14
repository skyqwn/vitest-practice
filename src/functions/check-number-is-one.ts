export class TypeError extends Error {
  constructor(message?: string) {
    super();
    this.message = message ?? "";
  }
}

export const checkNumberIsOne = (target: any): boolean => {
  const isNumber = typeof target === "number";

  if (!isNumber) throw new TypeError("shold be a number");

  const ok = target === 1;

  return ok;
};
