# Bowling Notes

## Basic Program Structure

Three main components

- get_player_rolls - input all 21 rolls for the player and store them in a vector

- get_player_score - take the 21 rolls from the player and calculate their score.
  NOTE: You do not calculate the scores until all the rolls have been entered, this is much harder than doing it after.

- print_game_summary - print out all the players and their scores and print out the best and worst scores.

```cpp
int main() {
  vector<string> player_names;
  vector<int> player_scores;

  // better not to declare your rolls vector here
  // create it inside the loop so it will automatically be destroyed
  // then manually emptying it is not needed


  while (true) {
    string input_string;

    cout << "Enter player's name (done for no more players): ";
    cin >> input_string;

    if (input_string == "done") {
      break; // Don't do any of the summary here, exit the loop first
    }


    /* GET PLAYER ROLLS */

    // WARNING: allocate space for 21 rolls
    // 21 rolls is *needed* to not seg fault during the score calculation
    // I strongly recommend not using `push_back` and instead allocating all 21 then using `[]` to set the values
    const size_t TOTAL_ROLLS = 21;
    vector<int> rolls(TOTAL_ROLLS, 0); // (size, value)
    int roll_input;

    // input first 20 rolls
    for (size_t frame = 0; frame < NUMBER_OF_FRAMES; ++frame) {
      for (size_t roll = 0; roll < ROLLS_PER_FRAME; ++roll) {
        // TODO: set prompt e.g. "Enter score for frame 1, roll 1: "
        cin >> roll_input;
        // if roll is a strike, break out of loop
      }
    }

    // if there is a strike or spare on the last frame, prompt for a 3rd roll on
    // the last frame

    /* GET PLAYER ROLLS */

    // or get_player_rolls as a function
    const vector<int> player_rolls = get_player_rolls(); // function optional



    const string player_name = input_string;
    const size_t round_score = get_player_score(player_rolls); // function recommended

    // TODO: store the name and score
  }

  print_game_summary(player_names, player_scores); // function optional

  return 0;
}

```

## Get Player Rolls

```cpp
vector<int> get_player_rolls() {

  // WARNING: allocate space for 21 rolls
  // 21 rolls is **needed** to not seg fault during the score calculation
  // I strongly recommend not using `push_back` and instead allocating all 21 then using `[]` to set the values
  const size_t TOTAL_ROLLS = 21;
  vector<int> rolls(TOTAL_ROLLS, 0);
  size_t roll_input;

  // input first 20 rolls
  for (size_t frame = 0; frame < NUMBER_OF_FRAMES; ++frame) {
    for (size_t roll = 0; roll < ROLLS_PER_FRAME; ++roll) {
      // TODO: set prompt e.g. "Enter score for frame 1, roll 1: "
      cin >> roll_input;
      // if roll is a strike, break out of loop
    }
  }

  // if there is a strike or spare on the last frame, prompt for a 3rd roll on
  // the last frame

  return rolls;
}
```

## Get Player Scores

```cpp
int get_player_score(const vector<int> &rolls) {
  int round_score = 0;

  // calculate the first 9 frames
  // - spare = add next frame roll1
  // - strike = add next frame roll1 + roll2
  // - double strike = add next frame roll1 + next next frame roll1
  // - edge case: if there is a double strike on 9 and 10, treat 9 like a normal strike

  for (size_t frame_number = 0; frame_number < NUMBER_OF_FRAMES - 1;
       ++frame_number) {
    // advice: use a lot of intermediate variables
    const size_t current_frame = frame_number * 2;
    const size_t next_frame = current_frame + 2;
    const size_t next_next_frame = next_frame + 2; // this will still be in bounds on frame 9 because of roll 21. 8 * 2 + 4 = 20

    const int roll1 = rolls[current_frame];
    const int roll2 = rolls[current_frame + 1];

    const bool is_strike = roll1 == NUMBER_OF_PINS;
    const bool is_spare = roll1 + roll2 == NUMBER_OF_PINS;
  }

  // calculate the 10th frame
  // - strike or a spare = add all three rolls
  // - normal = add the first two rolls

  return round_score;
}

```

## Print Game Summary

```cpp
void print_game_summary(const vector<string> &player_names,
                        const vector<int> &player_scores) {

  // WARNING: if you forget to do this, your program will seg fault
  // when you try to access the elements of an empty vector
  if (player_names.size() == 0) {
    cout << "No players were entered." << endl;
    return;
  }

  // NOTE: there is a newline between the inputs and the summary,
  // but there is no newline if no players were entered
  cout << endl;


  // TODO: print all players and their scores

  /*
   * "John scored 300."
   * "Cheryl scored 122."
   */

  string worst_player_name = player_names[0];
  int worst_player_score = player_scores[0];

  string best_player_name = player_names[0];
  int best_player_score = player_scores[0];

  for (size_t i = 1; i < player_names.size(); ++i) {
    // TODO: find the best and worst score
  }

  // TODO: print results
  /*
   * "Cheryl did the worst by scoring 122."
   * "John won the game by scoring 300."
   */


}

```

## Scoring Examples

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
