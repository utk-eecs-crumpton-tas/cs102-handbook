# Bowling Notes

## Basic Program Structure

Three main components

- `inputPlayerRolls`: input all 21 rolls for the player and store them in a vector. If a strike happens, only input one roll for that frame. If there is a strike or spare on the last frame, input the 21st roll.

- `calculatePlayerScore`: take the 21 rolls from the player and calculate their score.
  NOTE: You do not calculate the scores until all the rolls have been entered, this is much harder than doing it after.

- `printGameSummary`: print out all the players and their scores and print out the best and worst scores. If no players were entered, print `"No players were entered."`

## Scoring Examples

[Bowling calculator](https://bowlinggenius.com/)

Spare - add current frame roll 1 + current frame roll 2 + next frame roll 1

![spare](@site/static/img/labs/bowling/spare.png)

Strike - add current frame roll 1 + next frame roll 1 + next frame roll 2

![strike](@site/static/img/labs/bowling/strike.png)

Double strike - add current frame roll 1 + next frame roll 1 + next next frame roll 1

![double-strike](@site/static/img/labs/bowling/double-strike.png)

Frame 10 spare - add frame 10 roll 1 + roll 2 + roll 3

![frame10-spare](@site/static/img/labs/bowling/frame10-spare.png)

Frame 10 strike - add frame 10 roll 1 + roll 2 + roll 3

![frame10-strike](@site/static/img/labs/bowling/frame10-strike.png)

Frame 9 double strike edge case - add frame 9 roll 1 + frame 10 roll 1 + frame 10 roll 2 (not frame 10 roll 3)

![frame9-double-strike-edge-case](@site/static/img/labs/bowling/frame9-double-strike-edge-case.png)
