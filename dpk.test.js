import deterministicPartitionKey from './dpk'

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("In various case that valid data inputted, the ourput of sha3-512 is 128", () => {
    const trivialKey0 = deterministicPartitionKey("123123");
    expect(trivialKey0.length).toBe(128);

    const trivialKey1 = deterministicPartitionKey("{}");
    expect(trivialKey1.length).toBe(128);

    const trivialKey2 = deterministicPartitionKey("abcd");
    expect(trivialKey2.length).toBe(128);
  });
});
