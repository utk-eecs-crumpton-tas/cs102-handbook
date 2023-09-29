# Boiling Water Notes

## New APIs

- Command line arguments

  - `argc`
  - `argv`

- `getline`

  - optional third argument
  - `getline(istream, buffer)`
  - `getline(istream, buffer, delimiter)`
  - `getline(istream, buffer, '\n')` default behavior
  - `getline(istream, buffer, ',')`

- `stringstreams`

  - `istringstreams`

- `vectors`

  - `push_back`
  - `size`
  - `[]`

- `stoi` - string to integer
  - throws an error for invalid inputs

## Command Line Arguments

```cpp
int main(int argc, char** argv) {
  // We need to make sure to check `argc`, before we try accessing anything out of `argv`!
  if (argc != 2) {
    cerr << "usage: ./csv-parser filename" << endl;
    return 1;
  }

  // This will be a segfault if we do not check `argc` first!
  const string csvFilename = argv[1];
}
```

## Parsing a CSV File into Vectors Example

```csv
Name,Age,Occupation,Salary
John,25,Engineer,55000
Jane,28,Doctor,75000
Alex,30,Teacher,42000
Lisa,22,Student,0
Mike,35,Driver,32000
```

```cpp
  ifstream fin(csvFilename);

  if (!fin.is_open()) {
    cerr << "File failed to open." << endl;
    return 1;
  }

  // One vector for each column of the CSV
  vector<string> personNames;
  vector<int> personAges;
  vector<string> personOccupations;
  vector<int> personSalaries;

  string line;
  getline(fin, line); // Read past the first line. "Name,Age,Occupation,Salary"


  while (getline(fin, line)) { // `line` will be "John,25,Engineer,55000"
    string personName;
    string personAge;
    string personOccupation;
    string personSalary;

    istringstream recordStream(line); // `recordStream` will be "John,25,Engineer,55000"

    getline(recordStream, personName, ','); // `personName` will be "John", `recordStream` will be "25,Engineer,55000"
    getline(recordStream, personAge, ','); // `personAge` will be "25", `recordStream` will be "Engineer,55000"
    getline(recordStream, personOccupation, ','); // `personOccupation` will be "Engineer", `recordStream` will be "55000"
    getline(recordStream, personSalary, ','); // `personSalary` will be "55000", `recordStream` will be ""

    personNames.push_back(personName); // "John"
    personAges.push_back(stoi(personAge)); // stoi("25") -> 25
    personOccupations.push_back(personOccupation); // "Engineer"
    personSalaries.push_back(stoi(personSalary)); // stoi("55000") -> 55000
  };

  // We can immediately close the file after we have read all the data into vectors.
  fin.close();
```

## Calculating the Boiling Point

```cpp
double elevationToBoilingPoint(const double elevation) {
  double boilingPoint = 0.0;

  // TODO Calculate the boiling point of water at the given elevation
  //      using the equation provided in the lab description.

  return boilingPoint;
}
```

Math functions

```cpp
double pow(double base, double exponent);
```

```cpp
// natural log: ln(x)
double log(double x);
```

## Creating a CSV Record (Optional)

With a `struct`, you can store all of the csv fields into one vector.

```cpp
struct PersonRecord {
  string name;
  int age;
  string occupation;
  int salary;
};
```

```cpp
vector<PersonRecord> personRecords;
```

### Creating the CSV Record

```cpp
PersonRecord personRecord = {
  .name = personName,
  .age = stoi(personAge),
  .occupation = personOccupation,
  .salary = stoi(personSalary),
};

personRecords.push_back(personRecord);
```

### Accessing the CSV Record

```cpp
PersonRecord personRecord = personRecords[0];
/* yields:
PersonRecord {
  name: "John",
  age: 25,
  occupation: "Engineer",
  salary: 55000,
}
*/

// access it using
PersonRecord personRecord = personRecords[0];
personRecord.name; // "John"
personRecord.age; // 25
personRecord.occupation; // "Engineer"
personRecord.salary; // 55000

// or
personRecords[0].name; // "John"
personRecords[0].age; // 25
personRecords[0].occupation; // "Engineer"
personRecords[0].salary; // 55000
```
