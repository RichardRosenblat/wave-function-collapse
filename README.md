# Wave Function Collapse

This is a React project that implements the **Wave Function Collapse Algorithm** to solve Sudoku puzzles.  
The project provides a simple web application where users can input a Sudoku puzzle, and the algorithm will generate a solution that follows the rules of the game.  
The project is built using React, Material UI, Recoil, Classnames, and Normalize.css. The main goal of this project is to showcase the power of the Wave Function Collapse Algorithm and its potential applications in game development and other fields.

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
  
    > Imagine an empty 9x9 Sudoku board.
    >  ![empty grid](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/1.png?raw=true)
    > Every cell can have one of a set of 9 values (or states), from 1 to 9.
    > ![cell with multiple states](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/2.png?raw=true)
    > So we say that the board is in a superposition with every possible state of all of its cells.
    > ![the grid has multiple cells with multiple states](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/3.png?raw=true)
    >

2. We start by **collapsing** a cell. That means we must choose a cell and decide a **single state** for it.

    > On our example of a Sudoku board, you can imagine this as writing a number in one of the cells. We collapse all of the numbers that cell could be into a single value.
    > ![we collapse a cell into the value 1](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/4.png?raw=true)
    >
3. Now that a cell has been **collapsed**, this must change the possible states of at least one other cell, removing one or more of them.

    > For example, in the Sudoku board, writing the number 1 in a cell will take that possible state from all of the surrounding cells and both the cells on the same horizontal and vertical lines of the one we collapsed.
    > ![the cells around this collapsed cell loose states](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/5.png?raw=true)
    >
4. When a cell **loses one or more possible states**, we can say it lost entropy, having a lesser value of entropy than a cell that has more possible states. So now we must select a random cell from the group of cells that has the smallest amount of possible states (the smallest amount of entropy).

    > Back at the Sudoku example, we pick a random cell from the ones that lost the number 1 from their possible states during the last example.
    > ![we collapse another cell](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/6.png?raw=true)
    >
5. Now we must **collapse the cell that has been picked from the previous step**, into a random state of its possible states.

    > Just like step 2 and 3, this is simply writing a random value on the cell from its possible values. For example, the number 9.
    > ![Just like before the cells around the collapsed cell loose states](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/7.png?raw=true)
    >
6. Now we **repeat the steps 2-5**, until all cells have been collapsed and the grid cannot have any other state.

    > In the Sudoku example, this is simply repeating the steps before until the game is finished.
    >![the function stops when the game is finished](https://github.com/RichardRosenblat/wave-function-collapse/blob/main/github_assets/8.png?raw=true)
    >

And that's it! The Wave Function has collapsed into a single state!

## WFC Algorithm applications

The Wave Function Collapse algorithm is a powerful technique that can be used in many applications, especially in the field of **game development**. One of the main benefits of using the WFC algorithm is that it can generate random patterns that follow a given set of rules. This means that developers can use the WFC algorithm to generate game maps, levels, or puzzles that are unique and different every time, while still adhering to the game's rules and constraints.

For example, in a game like Minecraft, the WFC algorithm can be used to generate random terrain that looks natural and organic, while still following the game's rules of physics and block placement. In a game like Super Mario, the WFC algorithm can be used to generate random levels that have a different layout and difficulty every time the game is played.

Another benefit of using the WFC algorithm is that it can **save developers a lot of time and effort**. Instead of manually designing and creating levels or puzzles, developers can use the WFC algorithm to generate them automatically. This can be especially useful in games that have a large number of levels or puzzles, as it can significantly reduce the development time and cost.

Overall, the WFC algorithm is a powerful tool that can be used in many different applications. Its ability to generate random patterns that follow a given set of rules makes it especially useful in game development, where unique and diverse content is essential to keep players engaged and interested.

## Project usage

### Installing the project

To install the project, you first need to clone the repository

```bash
git clone https://github.com/RichardRosenblat/wave-function-collapse.git

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

Richard Rosenblat - [rosenblatr@gmail.com](mailto:rosenblatr@gmail.com) | [LinkedIn](https://www.linkedin.com/in/richard-rosenblat/) | [Github](https://github.com/RichardRosenblat)
