# Bowling

Build a text-based bowling game.

## Introduction

This lab is simple on the surface, but annoying to implement. It'll be good for refining your logic and reasoning skills. That and you'll learn how to score bowling!

## Bowling Lab

Here's how bowling is scored at a high level:

- A game consists of 10 frames
- Each frame consists of 2 rolls
- The 10th frame can have 3 rolls if the first 2 rolls are a strike or spare
- A strike is when you knock down all 10 pins with the **first** roll of a frame
- A spare is when you knock down all 10 pins with the **second** roll of a frame

Barring strikes and spares, a game's total score is the sum of the number of pins knocked down in each frame. The highest possible score is 300, consisting of 12 strikes.

Strikes and spares are a bit more complicated. A strike's value is 10 plus the number of pins knocked down in the next 2 rolls. A spare's value is 10 plus the number of pins knocked down in the next roll. If it's the 10th frame, then you will have 2 rolls to start. If you get a strike or spare, then you will have 1 more roll to finish the frame, making 3 rolls total. Otherwise, it's just 2 rolls for the last frame.

## Program flow

Here's a rough outline of the program flow:

1. The player is prompted to enter their name
2. The player enters the number of pins knocked down in each roll for every frame. If the first roll of a frame is a strike, then the 2nd roll is not prompted. Although you will still need to store the 2nd roll's value as 0, even though you won't be asking for the user to enter the 2nd roll. (_So notice we're storing our rolls in a vector or array_)
3. Once all frames have been entered, **evaluate** (don't print) the score for the player and store it. (_So we use a separate vector or array to store the scores_)
4. Repeat until the player enters `done` when prompted for their name
5. Print the scores for each player and the winner

Also note that the player can enter `done` at the beginning of the game, in which case no scores will be evaluated, and the print statement will be different.

## Algorithm

Algorithmically speaking, we can break this down into 2 parts:

### 1. Scoring the game

- For each frame, we need to know the number of pins knocked down in each roll and tally it up according to the scoring rules
- If it's the last frame, its score is simply the sum of the number of pins knocked down in each roll, since there are no frames after for strikes/spares

### 2. Scoring the frame

- If it's not a strike or spare, then the score is the sum of the number of pins knocked down in each roll
- If it's a strike, then the score is 10 plus the number of pins knocked down in the next 2 rolls
- If it's a spare, then the score is 10 plus the number of pins knocked down in the next roll

More specifically, scoring a frame is as follows:

### For each frame

- Get the number of pins knocked down in each roll
- Determine if the frame was a strike or spare

If it was a strike, then get the current frame's score plus the next 2 rolls

If it was a spare, then get the current frame's score plus the next roll

Otherwise, just get the current frame's score

- Repeat until all frames are scored

### TLDR

The _general_ formula for scoring a frame is:

```python
score += current_frame.roll1 + current_frame.roll2 # base case -- always do this
score += next_frame.roll1 + next_frame.roll2 # if strike
score += next_frame.roll1 # if spare
```

The caveats to consider are

1. You'll need to score the 10th frame slightly differently. It should be evaluated separately from the other frames.
2. If you get a strike two frames in a row, then you won't be able to do `score += next_frame.roll1 + next_frame.roll2`, because `roll2` in the next frame should be 0. You'll need to jump an extra frame ahead and get the next roll from there.
3. If you get a strike in the 9th frame as well as the 10th frame, then you'll need to make sure not to go a frame too far when scoring the 9th frame.

## Input/Output requirements

There are no special formatting requirements for this lab. Just output the words and lines as shown in the sample output.

As for the input requirements, just make sure your data types are what they should be. No error checking is required.

### example output 1

```txt
Enter player's name (done for no more players): John
Enter score for frame 1, roll 1: 10
Enter score for frame 2, roll 1: 10
Enter score for frame 3, roll 1: 10
Enter score for frame 4, roll 1: 10
Enter score for frame 5, roll 1: 10
Enter score for frame 6, roll 1: 10
Enter score for frame 7, roll 1: 10
Enter score for frame 8, roll 1: 10
Enter score for frame 9, roll 1: 10
Enter score for frame 10, roll 1: 10
Enter score for frame 10, roll 2: 10
Enter score for frame 10, roll 3: 10
Enter player's name (done for no more players): Cheryl
Enter score for frame 1, roll 1: 8
Enter score for frame 1, roll 2: 1
Enter score for frame 2, roll 1: 0
Enter score for frame 2, roll 2: 9
Enter score for frame 3, roll 1: 2
Enter score for frame 3, roll 2: 8
Enter score for frame 4, roll 1: 10
Enter score for frame 5, roll 1: 6
Enter score for frame 5, roll 2: 3
Enter score for frame 6, roll 1: 7
Enter score for frame 6, roll 2: 0
Enter score for frame 7, roll 1: 5
Enter score for frame 7, roll 2: 2
Enter score for frame 8, roll 1: 10
Enter score for frame 9, roll 1: 0
Enter score for frame 9, roll 2: 6
Enter score for frame 10, roll 1: 2
Enter score for frame 10, roll 2: 8
Enter score for frame 10, roll 3: 10
Enter player's name (done for no more players): done

John scored 300.
Cheryl scored 122.
Cheryl did the worst by scoring 122.
John won the game by scoring 300.
```

### example output 2

```txt
Enter player's name (done for no more players): John
Enter score for frame 1, roll 1: 8
Enter score for frame 1, roll 2: 1
Enter score for frame 2, roll 1: 0
Enter score for frame 2, roll 2: 9
Enter score for frame 3, roll 1: 2
Enter score for frame 3, roll 2: 8
Enter score for frame 4, roll 1: 10
Enter score for frame 5, roll 1: 6
Enter score for frame 5, roll 2: 3
Enter score for frame 6, roll 1: 7
Enter score for frame 6, roll 2: 0
Enter score for frame 7, roll 1: 5
Enter score for frame 7, roll 2: 2
Enter score for frame 8, roll 1: 10
Enter score for frame 9, roll 1: 0
Enter score for frame 9, roll 2: 6
Enter score for frame 10, roll 1: 2
Enter score for frame 10, roll 2: 8
Enter score for frame 10, roll 3: 10
Enter player's name (done for no more players): done

John scored 122.
John did the worst by scoring 122.
John won the game by scoring 122.
```

## Requirements

As per the lab's instructions, you'll need to implement the following:

- `vector` of `string`s to store the name(s) of the player(s)
- `vector` of 21 `int`s to store 2 rolls per frame, plus 1 roll for the 10th frame (if applicable)
- `vector` of `int`s to store the score(s) of the player(s)

- Each player must enter their name and subsequently their score for each roll of each frame
- Once the player has quit the game (by entering `done` when prompted for their name), the game should be scored and the results should be printed

## Bye

Good luck! Open a ticket on Discord or come to office hours if you have any questions, as always.
