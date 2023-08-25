# Multi-User Dungeons (MUD) Notes

Here is a graph of what the rooms look like

![room1-diagram](/img/labs/mud.png)

## File Format

Example Room

```txt
Room #0
~
You are at the start. Your journey begins..
~
s 5
~
```

Each room will have 3 fields, they are each delimited by tildes. `getline` will be helpful here for counting the number of rooms in the file.

## Resetting a File Stream

This lab requires us to read a file multiple times: once to count the number of rooms in the file and allocate enough memory for them, and then again to read the rooms into memory. It is possible to close and reopen the file, but there is a more efficient way.

```cpp
file.clear(); // reset the error state
file.seekg(0); // move the cursor back to the beginning of the file
```

We have gone over clear before. Basically when an input stream exhausts its input, it will enter an error state. While in the error state it will ignore any commands we try to give it. We can reset the error state by calling clear.

`file.seekg(0);` is new. This will set the position of the next character to be read to the beginning of the file. We can essentially reread the file from the beginning like we just opened it.

For future reference, `seekg` can be used to navigating to an arbitrary position in the file, but we will not be using that functionality in this lab.

## Parsing the Input

Parsing the actual file _should_ be pretty straight forward, there are multiple ways to do it, but depending on how you do it, the following code snippet may be helpful.

```cpp
  string text = "hello\n\n\n";
  while (text.back() == '\n') {
    text.pop_back();
  }
  cout << text << endl; // prints "hello"
```

To get the whitespace to match canvas and work with the tests, you may need to do this. This will delete any trailing `\n` characters from the string.

The file is like this:

```txt
~\n
room name\n
~\n
room description\n
~\n
```

You will need to manually remove newlines from the end of the room name, room description, and after the `~` characters

```cpp
for (size_t i = 0; i < number_of_rooms; ++i) {
  string name;
  string description;
  string exits;
  string ignore_newline;



  Room &room = rooms[i]; // shortcut for accessing `rooms[i]` via `room`

  getline(rooms_fin, name, '~');

  // ignore the \n after the `~`, you'll need this more than just here
  getline(rooms_fin, ignore_newline);

  // TODO: you will need to process `name` further to remove trailing
  // whitespace

  room.name = name; // save to the current room like this

  getline(rooms_fin, description, '~');

  // TODO: process the description

  getline(rooms_fin, exits, '~');
  istringstream exits_iss(exits);

  char direction; // read these out of the `istringstream`
  int room_index;

  while (/* TODO  */) { // parse exit lines
      // TODO: you don't need to store the direction, but use the direction with a
      // switch to determine where to write it on the rooms class - see
      // `set_room_direction` function below
  }
}
```

This is code for a top-level function, but if you are using a room class, you can make it a method

```cpp
void set_room_direction(Room &room, const char direction,
                        const int room_index) {
    switch (direction) {
    case 'n':
        // you can use assert statements to help check you are not double assigning,
        // the program will exit if the assertion is not true
        // `#include <cassert>` must be included for them to work
        assert(room.north == -1);
        break;

    case 's':
        assert(room.south == -1);
        break;

    case 'e':
        assert(room.east == -1);
        break;

    case 'w':
        assert(room.west == -1);
        break;

    default:
        throw invalid_argument(string("invalid direction ") + direction);
    }
}
```

I would also recommend creating a `get_room_direction`, or creating functions for any time you are switching on a direction.

I should also note, make sure you are downloading the room file from Canvas, and moving the file with `mv`, `cp`, or `scp`. **Do not** copy and paste the contents of the room file. If you are on Windows, this can insert `\r` characters into the file, which will cause issues with your program.

## Sentinel Values

A sentinel value is an arbitrarily significant value used to encode a special condition, usually to indicate the end of a sequence of values, or a non-existent state aka null. In this lab, we will use sentinel values to indicate that a room does not have a connection in a particular direction.

## Room Class

This is not complete, but it is a good start. You will need to add more member functions and data to this class.

```cpp
class Room {
private:
  int north = -1; // sentinel value, -1 means no room
  int south = -1;
  int east = -1;
  int west = -1;
  // still needs name, description, and maybe more
public:
  void look() const {}
};
```

Or you you prefer using a struct, you can do that too.

```cpp
struct Room {
  int north = -1; // sentinel value, -1 means no room
  int south = -1;
  int east = -1;
  int west = -1;
  // still needs name, description, and maybe more
};

void look_around_room(const Room &room) {}
```

## `new` and `delete` operators

### Stack vs. Heap

We can use the `new` operator to allocate memory on the heap. The heap is a lot more flexible than the stack, but less efficient. All the data structures we have been using from the stl like vectors, use the heap under the hood. This is what allows us to have dynamic data structures that can grow and shrink as needed e.g. `push_back` and `pop_back`.

When would we use `new` and `delete`? Here is an example of the limitations of the stack:

```cpp
void do_something_else(){
    /* ... */
}
int *create_array_on_stack(const size_t array_size) {
  int array[array_size];
  for (size_t i = 0; i < array_size; ++i) {
    array[i] = i;
  }
  return array;
}

int main() {
  const size_t array_size = 10;
  int *array_ptr = create_array_on_stack(array_size);
  array_ptr[0]; // this will work -- returns 0
  array_ptr[1]; // this will work -- returns 1
  do_something_else();
  array_ptr[0]; // uh oh, this will not work -- returns garbage
  array_ptr[1]; // uh oh, this will not work -- returns garbage

  return 0;
}
```

Any memory allocated by a normal function, save for the return type, will immediately be overwritten by the next stack frame, or function call. This is where the heap comes in

```cpp
int *create_array_on_heap(int size) {
  int *array = new int[size];
  for (int i = 0; i < size; i++) {
    array[i] = i;
  }
  return array;
}

int main() {
  const size_t array_size = 10;
  int *array_ptr = create_array_on_heap(array_size);
  array_ptr[0]; // this will work -- returns 0
  array_ptr[1]; // this will work -- returns 1
  do_something_else();
  array_ptr[0]; // this will work -- returns 0
  array_ptr[1]; // this will work -- returns 1

  delete[] array_ptr; // must delete heap memory manually!

  return 0;
}
```

The caveat with the heap, is we must remember to delete the memory ourselves once we are finished with it. If not, we will have a memory leak, memory no longer in use but cannot be reclaimed by the operating system.

### Using `new` and `delete`

If you noticed, there are two ways to use the `new` and `delete` operators, with `[]` and without `[]`.

```cpp
int *single_int = new int;
int *array_of_ints = new int[10];

delete single_int;
delete[] array_of_ints;
```

If you call `new` with `[]`, you must call `delete[]` with the same pointer. If you call `new` without `[]`, you must call `delete` with the same pointer. If you do not, you will get a memory error.

### Initializing Data on the Heap

You should not need this for this lab, but a final note about `new` and `delete`, you can use any constructor you want with `new`.

```cpp
// stack construction -- these should be familiar
vector<int> ints(10, 0);
vector<int> ints{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

// heap construction -- exact same syntax as stack construction, just returns a pointer
vector<int> *ints_ptr = new vector<int>(10, 0);
vector<int> *ints_ptr = new vector<int>{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

// primitive types also have constructors in c++
int *value = new int(1);
int *values = new int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
```

It is also worth noting that in `c++` memory initialized with `new` is initialized to 0 by default whereas on the stack it is not.

## Destructors

This is not required for this lab, and is a little more advanced of a concept, but in c++ we can automate deleting memory. Classes have another special function called a destructor, this is the exact opposite of the class constructor. Managing memory this way is a lot less error prone. We can specify a destructor by adding a tilde (~) before the class name `~MUD`. If you use this method, you will want to create another class, to hold the rooms. Here is an example:

```cpp
class MUD {
  Room *rooms;

public:
  MUD(Room *const _rooms) { rooms = _rooms; }
  void run() const {}
  // this will automatically call delete[] on rooms for us when the Game
  // object falls out of scope
  ~MUD() { delete[] rooms; }
};
```

## Testing

### Testing with `diff`

I do not have a grade script for this lab, but I have same text files you can use to test your program against.

[Here's a guide to using the diff command yourself](https://ethan0429.github.io/cs102-writeups/docs/general/about-grading#checking-output)

This is not listed in the guide, but you can feed a test into your program like this

```bash
diff -y <(./mud room1 <tests/input/01-basic.txt) tests/output/01-basic.txt
```

Or if you prefer writing your program to a file

```bash
./mud room1 <tests/input/01-basic.txt >lab_output.txt
diff -y lab_output.txt tests/output/01-basic.txt
```

Remember, if you get a `No such file or directory` error, tab is your best friend.

You can download the tests with this command

```bash
curl https://raw.githubusercontent.com/seeker-3/cs102-resources/main/tests/mud-tests.zip -o mud-tests.zip
```

### Testing with `valgrind`

Valgrind is a tool that can help us find memory errors. Valgrind will check that for every `new` there is a corresponding `delete`. It is a good idea to run your program through valgrind before submitting it.

How to use `valgrind`

```bash
valgrind --leak-check=full ./my_program room1 <tests/input/01-basic.txt
```

If `valgrind` fails, you should see something like this

```bash
==1768002== HEAP SUMMARY:
==1768002==     in use at exit: 40 bytes in 1 blocks
==1768002==   total heap usage: 3 allocs, 2 frees, 73,768 bytes allocated
==1768002==
==1768002== 40 bytes in 1 blocks are definitely lost in loss record 1 of 1
==1768002==    at 0x4C38B6F: operator new[](unsigned long) (vg_replace_malloc.c:640)
==1768002==    by 0x400857: func() (in /home/abradl11/a.out)
==1768002==    by 0x400886: main (in /home/abradl11/a.out)
==1768002==
==1768002== LEAK SUMMARY:
==1768002==    definitely lost: 40 bytes in 1 blocks
==1768002==    indirectly lost: 0 bytes in 0 blocks
==1768002==      possibly lost: 0 bytes in 0 blocks
==1768002==    still reachable: 0 bytes in 0 blocks
==1768002==         suppressed: 0 bytes in 0 blocks
```

If `valgrind` succeeds, you should see something like this

```bash
==17874== HEAP SUMMARY:
==17874==     in use at exit: 0 bytes in 0 blocks
==17874==   total heap usage: 0 allocs, 0 frees, 0 bytes allocated
==17874==
==17874== All heap blocks were freed -- no leaks are possible
```

You can practice using valgrind with the follow two programs

Will fail

```cpp
int main() {
  int *p = new int;

  // delete p;

  return 0;
}
```

Will succeed

```cpp
int main() {
  int *p = new int;

  delete p;

  return 0;
}
```
