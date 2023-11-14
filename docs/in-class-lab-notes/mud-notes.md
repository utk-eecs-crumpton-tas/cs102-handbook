# Multi-User Dungeons (MUD) Notes

Here is a graph of what the rooms look like

![room1-diagram](@site/static/img/labs/mud.png)

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

We have gone over clear before. Basically, when an input stream exhausts its input, it will enter an error state. While in the error state it will ignore any commands we try to give it. We can reset the error state by calling clear.

`file.seekg(0);` is new. This will set the position of the next character to be read to the beginning of the file. We can essentially reread the file from the beginning like we just opened it.

For future reference, `seekg` can be used to navigating to an arbitrary position in the file, but we will not be using that functionality in this lab.

## Sentinel Values

A sentinel value is an arbitrarily significant value used to encode a special condition, usually to indicate the end of a sequence of values, or a non-existent state aka null. In this lab, we will use sentinel values to indicate that a room does not have a connection in a particular direction.

```cpp
struct Room {
  int north = -1; // sentinel value, -1 means no room
  int south = -1;
  int east = -1;
  int west = -1;
};
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
