import { formatDate } from "./dates-functions"


describe("Test format date function", () => {
  const date = new Date("2020-01-01T00:00:00.000Z")

  it("should return a string", () => {
    expect(typeof formatDate(date)).toEqual("string")
  })

  it("should return a string in the format YYYY-MM-DD", () => {
    expect(formatDate(date)).toEqual("2020-01-01T00:00:00.000Z")
  })
})
