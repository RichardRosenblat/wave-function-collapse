# Wave Function Collapse

This is a React project that implements the **Wave Function Collapse Algorithm** in a simple application to solve a Sudoku puzzle.

## What is the Wave Function Collapse Algorithm?

The WFC Algorithm is a way to generate random patterns that *"make sense"* by following a given set of rules.**It is based on fundamental concepts from quantum mechanics! How cool is that?**
It looks very complex, but in reality it's quite simple once you understand its core concepts and the steps that it takes to generate the random patterns.

### How does it work?

> According to quantum mechanics, a system can be in a superposition of states until it's measured or observed. That means that a given system can exist in more than one state at a time, until we observe that system in some way.
>
>
> A wave function is nothing more than a way to describe mathematically this superposition, which will include all possible states the system can have.
>
> Once we observe the superposition, it will collapse into a single state.
>

The Wave Function Collapse Algorithm is just a set of steps based on the concept above.

1. The algorithm starts with a grid of cells, each having more than one possible state.

    > Imagine an empty 9x9 Sudoku board. Every cell can have one of a set of 9 values (or states), from 1 to 9. So we say that the board is in a superposition with every possible state of all of its cells.
    >
2. We start by **collapsing** a cell. That means we must choose a cell and decide a **single state** for it.

    > On our example of a Sudoku board, you can imagine this as writing a number in one of the cells. We collapse all of the numbers that cell could be into a single value.
    >
3. Now that a cell has been **collapsed**, this must change the possible states of at least one other cell, removing one or more of them.

    > For example, in the Sudoku board, writing the number 9 in a cell will take that possible state from all of the surrounding cells and both the cells on the same horizontal and vertical lines of the one we collapsed.
    >
4. When a cell **loses one or more possible states**, we can say it lost entropy, having a lesser value of entropy than a cell that has more possible states. So now we must select a random cell from the group of cells that has the smallest amount of possible states (the smallest amount of entropy).

    > Back at the Sudoku example, we pick a random cell from the ones that lost the number 9 from their possible states during the last example.
    >
5. Now we must **collapse the cell that has been picked from the previous step**, into a random state of its possible states.

    > Just like step 2 and 3, this is simply writing a random value on the cell from its possible values. For example, the number 8.
    >
6. Now we **repeat the steps 2-5**, until all cells have been collapsed and the grid cannot have any other state.

    > In the Sudoku example, this is simply repeating the steps before until the game is finished.
    >

And that's it! The Wave Function has collapsed into a single state!

## WFC Algorithm applications

The WFC Algorithm can be used in many fields and applications. One of the most interesting is in the field of entertainment, where it is used in games to generate maps and levels that look natural but are random enough to guarantee a different playthrough each time.

## Project usage

### Installing the project

To install the project, you first need to clone the repository

```bash
git clone <https://github.com/RichardRosenblat/wave-function-collapse.git>

```

And then install the project's dependencies

```bash
npm install

```

or

```bash
yarn install

```

### Running the project

To run the project, you can use the npm script start. Just be sure to have your terminal on the project's root directory.

```bash
npm start

```

or

```bash
yarn start

```

## Stack

This application was created using these technologies:

- React
- Material UI
- Recoil
- Classnames
- Normalize.css

## Contributing

If you want to contribute to this project, feel free to submit a pull request. Please make sure to follow the existing coding style and add appropriate tests for any new functionality.

## License

MIT

## Contact information

Richard Rosenblat - [rosenblatr@gmail.com](mailto:rosenblatr@gmail.com)[LinkedIn](https://www.linkedin.com/in/richard-rosenblat/)[Github](https://github.com/RichardRosenblat)
