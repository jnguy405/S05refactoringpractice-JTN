# Section 5 - Identifying code smells practice - Jenalee Nguyen

# List of code smells and corresponding refactoring pattern

1. **Mystery Names**: variable names `c` for counter, `a`, `b`, and `h` for the constants, function `setup()` does not give insight to the contents of the block of code, `bI`, `bD`, `bR`, and `ctr` are too short (even with comments describing the const above).

- **Changes -> Rename Variable (137)**:
  1. `c` -> `counter` to keep track of the counter
  2. REMOVE `a`, `b`, and `h` and just fill in the values in `document.body.innerHTML`. Constants for reference IDs can be made later if it is reoccuringly used.
  3. `setup()` will be removed (It is also currently an unnecessary **Middle Man** found in function `start()`)
  4. `bI` -> `incBtn`, `bD` -> `decBtn`, `bR` -> `resetBtn`, and `ctr` -> `counterEl`.

2. **Long Function, Middle Man, and Duplicate Code**: The entirety of the logic is wrapped in `setup()` and then called as a _Middle Man_ later in function `start()`.

- **Changes**:
  1. REMOVE `setup()` wrapper and calls from the face of the Earth.
  2. Wrap the HTML setup in `createUI()` so it is easy to locate in `start()`
  3. Wrap `ids` and `Event Listeners` in `setupCounter()`
  4. Extract the duplicate code found in the `incBtn`, `decBtn`, and `resetBtn` event listeners into a helper function and call that in each event with corresponding parameters for matching event behavior.

3. **Data Type Declaration**:

- TypeScript does not like when types are not defined (funny!)
  1. Change example: `change: number` and `counterEl: HTMLElement`.
  2. Or all the voids!
