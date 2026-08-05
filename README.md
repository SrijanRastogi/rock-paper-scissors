# Rock Paper Scissors (Odin Solution Structure)

A refactored version of the console-based **Rock Paper Scissors** game following the structure recommended by **The Odin Project**.

## About

This branch reorganizes the project to better demonstrate function design and separation of responsibilities.

The game is played entirely in the browser console using `prompt()` for user input.

## Refactoring Changes

Compared to the original implementation:

* `playGame()` manages the entire game.
* `playRound()` is responsible for only one round.
* `humanScore` and `computerScore` are local to `playGame()`.
* Five rounds are played from inside `playGame()`.
* The overall winner is determined after all five rounds have been completed.

## Features

* Random computer choice
* User input using `prompt()`
* Five-round gameplay
* Running score tracking
* Final game winner announcement
* Cleaner function organization

## Technologies Used

* HTML
* JavaScript
* Git
* GitHub

## How to Run

1. Clone the repository.
2. Switch to the `odin-solution` branch.
3. Open `index.html` in your browser.
4. Open the browser's Developer Console.
5. Play through the prompts and observe the console output.

## Project Structure

```text
.
├── index.html
├── script.js
└── README.md
```

## Notes

This branch exists for comparison with the original implementation found in the **`main`** branch. The gameplay is the same, but the code organization follows the approach encouraged by The Odin Project.

## Acknowledgements

This project was completed as part of **The Odin Project** Foundations Course.
