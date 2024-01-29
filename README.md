# Steps to reproduce

1. Install any NodeJS version providing Symbol.dispose and Symbol.asyncDispose (v20.9.0 might be a candidate one)
2. Test your node version: `node -e "console.log(Symbol.asyncDispose);console.log(Symbol.dispose);"`
3. Install pnpm global dependency: `node i -g pnpm`.
4. Install dependencies: `pnpm i`
5. Run the test script: `pnpm test`

## Expected output

- Tests should pass

## Actual output:

```text
Symbol
    ✕ should define a dispose property (3 ms)
    ✕ should define an asyncDispose property

  ● Symbol › should define a dispose property

    expect(received).not.toBeUndefined()

    Received: undefined

      3 | describe("Symbol", () => {
      4 |   it("should define a dispose property", () => {
    > 5 |     expect(Symbol.dispose).not.toBeUndefined();
        |                                ^
      6 |   });
      7 |
      8 |   it("should define an asyncDispose property", () => {

      at Object.toBeUndefined (src/index.spec.js:5:32)

  ● Symbol › should define an asyncDispose property

    expect(received).not.toBeUndefined()

    Received: undefined

       7 |
       8 |   it("should define an asyncDispose property", () => {
    >  9 |     expect(Symbol.asyncDispose).not.toBeUndefined();
         |                                     ^
      10 |   });
      11 | });
      12 |

      at Object.toBeUndefined (src/index.spec.js:9:37)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s
Ran all test suites.
 ELIFECYCLE  Test failed. See above for more details.
```