# PPM Manipulation

Manipulate images in the PPM format from the command line.

## Introduction

This is definitely the hardest lab this semester, probably a bit harder than both blackjack, but it's also the most cool, in my opinion. The purpose of this lab is to be able to manipulate a `.ppm` file in several ways. It'll familiarize you more with classes, and also maybe make you think a bit.

## What is PPM?

`PPM` is a file type that designates a specific format the file should adhere to. Just like how your `.cpp` files need to include things like `int main()` or `#include`, a .`ppm` file needs to include "meta" content that outlines details pertaining to the content, and of course, it also needs to contain the content itself (e.g. the "pixels" that make up the image).

### What it contains

If you were to open a `.ppm` file with a text editor, this is what you would see (this is on a per-line basis, in this exact order)

1. A heading which will always be the string `P3`. If a `.ppm` file does not contain this, then it does not conform to the standard that a `.ppm` file should, and therefore should be omitted.
2. The `width` and `height` (WxH) of the image in pixels (e.g. `150 150` would be 150x150 image)
3. The `Max Intensity`. i.e. the absolute range of any color value in the image. Typically this will be `[0, 255]`, but the max intensity determines the bound, so assume the color range is `[0, maxIntensity]`.
4. Every line after this describes the color value of each subsequent pixel. Represented by integers ranging from the color range mentioned earlier. **One important thing to note** is that these lines could be in various formats. They can follow/precede commented lines (refer to #5), they can be in the format `r g b` or they can be in the format `r\nb\ng\n` (i.e. on separate lines), basically their format will be inconsistent, BUT we can work with that.
5. Any line beginning with `#` should be skipped, as it simply denotes a comment.

Here's an example of a `.ppm` file in plain text

```P3
3 2
255
255 0 0
0 255 0
0 0 255
255 255 0
255 255 255
0 0 0
```

As you can see, it is a valid `.ppm` file as it conforms to the format required.

- It has a header of `P3`
- It has a width of `3px` and a height of `2px`
- The max intensity is `255`
- The dimensions of the image are `3x2`

We know the dimensions of the file are `3x2`, so logically there are 6 pixels in total in the image. Every line after the max intensity is the color value of a pixel at that index (going from left to right, and then moving to the next row once you've reached the last column). Because there are `3 RGB` values per pixel, and there are `6 pixels`, we should expect to read `18 RGB values`. This is exactly what we see in the file.

# Your Job

Your job for this lab is to be able to parse these `.ppm` files and modify them in some way. Namely, your program should be able to do the following things:

- Read a `.ppm` file. e.g. check for `P3`, store your width/height/max intens, and store the color values of each pixel.
- Write a `.ppm` file
- Flip an image on the x-axis
- Flip an image on the y-axis
- Invert an image

## Pixel

The first thing you'll want to get out of the way is your `Pixel` structure. This will make it easy to read/write data with pixels. Using the `Pixel` structure, we'll create a `Picture` class whose core data member will be a `vector` of `Pixel`s.

`struct Pixel` contains:

- 3 `unsigned int`s, one for each `r`, `g`, and `b`. The reason we're using `unsigned` is because our color range is `[0,max_intensity]`, which is positive only range.

This should be pretty easy to create yourself.

## Picture

This is the greater class that will represent the PPM image itself and will contain the data members that will be used to manipulate the image.

### Width, height, and max intensity

- `private int` - width of the picture
- `private int` - height of the picture
- `private int` - max intensity of the picture

### Pixel list

A _private_ `vector` of `Pixel`s. These will be our "coordinates" so to speak.

### Constructor

A public constructor that sets up our class instance. It takes 0 arguments and sets the width, height, and max intensity to 0. So once you've invoked thsi constructor, you'll have a `Picture` object that has no pixels, an image width of 0, an image height of 0, and a max intensity of 0.

### Get Pixel (Immutable)

A public method that returns a **read-only** (`const <TYPE>&`) Pixel object located at the row & col passed as arguments. You'll need to do some arithmetic to transpose the `(row, col)` to a valid index to your vector of pixels since the vector is 1-dimensional. The formula for this is pretty simple, and you can easily google to find it online if you're not sure.

### Get Pixel (Mutable)

A public method that returns a **mutable** `Pixel` object based on the row and column passed as arguments. You'll notice this is an _overloaded_ method since there is another method with a similar signature. The difference between the two is the return value. This method returns `Pixel&`, whereas the other returns `const Pixel&`. i.e. the return value of this method is mutable, meaning it can be modified. So if you wanted to, you could do something like this:

```cpp
Picture pic;
Pixel p = pic.get_pixel(0,0);
p.r = 255;
```

This would set the `r` value of the pixel at `(0,0)` to `255`. This is useful when you want to modify the pixel at a specific location.

This isn't possible if you call the other method, since it returns a `const Pixel&`, which again means you can't modify the pixel.

The implementation of these methods is identical, only the return value type is different.

### Set Pixel

A public method that sets a pixel at index `(row, col)` (1D transposed) using the provided `px` argument. (e.g. `pixels[index] = px`). In other words, it finds the index of the pixel in your vector, and changes it to the new one provided.

### Invert

Inverts all pixels i.e. set every pixel color equal to `max_intensity - r/g/b`, respectively. **This should update the vector of pixels**. Simply loop through your vector of `Pixel`s and update the color values accordingly.

### Flip X

Flips all pixels around the x-axis. The general idea here is to examine two rows simultaneously. So we look at every pixel in the top row and swap each pixel with the corresponding pixel in the bottom row, and then we jump to the next set of rows after we've finished one.

You'll need two nested loops to do this. The outer loop will iterate over the rows, and the inner loop will iterate over the columns. You'll need to do some arithmetic to figure out which pixels to swap, but it's not too hard.

### Flip Y

This will be almost exactly like your `flip_x()` method, except you'll swap the roles of your nested loops, and you'll replace the concept of top/bottom with left/right. This should be easy enough to do if you've already done `flip_x()`, so I will leave it at this.

### Read Input

This part isn't hard, but a lot of students seem to be confused about what is going on with `read_input()` here, so I will try to explain it to the best of my ability. All this method does is read the input of **either**

- a `.ppm` _file_

**OR**

- Standard input, e.g. `stdin`, e.g. your keyboard -- like we've done most of the semester.

The tricky part is that it can read either of those. We determine which of those we are reading from in `main` from the arguments passed through `argv[]`.

The `read_input()` method itself will have no difference in implementation whether or not we are reading from a file or from `stdin`. This is because the argument it takes is of type `istream`, which is any general-purpose input stream. Both `ifstream`, and `cin` are derived from `istream`, so we can pass either of those into `read_input()` and it will work. No matter what, we will be using the `in` function argument to read once you're in the method from the following example

#### example

```cpp
bool read_input(istream& in) {
    in >> stuff; // this would be the same as cin >> stuff, or fin >> stuff
}

int main() {
    // passing file input stream to read_input()
    ifstream fin("file.txt");
    read_input(fin);

    // passing standard input stream to read input()
    read_input(cin);
}
```

#### Deciding which to use

In `main`, we will be using `argc` and `argv` to determine whether or not we are reading from a file or from `stdin`. Here is the argument format

```bash
./ppm <INPUT> <OUTPUT> <MANIPULATION>
```

- `INPUT` is the _name_ of the input file (e.g. `file.ppm`), **OR** it's a dash (`-`) if we are reading from `stdin`.
- `OUTPUT` is the _name_ of the output file (e.g. `file.ppm`), **OR** it's a dash (`-`) if we are writing to `stdout` (using `cout`).
- `MANIPULATION` is the only optional argument and is the one-letter representation for the manipulation we want to do. This can be any of the following: It can be `X` for `flip_x`, `Y` for `flip_y`, or `I` for `invert`. If no argument is specified, then you won't modify the image at all.

#### Reading

There are a ton of ways to do this. The meta content e.g. the header will always be in the same format, so you can read that fairly simply. Just like the last few labs, using a mixture of stringstream and getline is my recommendation, but there are other ways.
