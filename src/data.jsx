const flashcards = [
  {
    id: 1,
    question: "What are Python functions?",
    answer: `Python functions are reusable blocks of code used to perform a specific task.

Types of functions:
1. Built-in functions (print, len, type)
2. User-defined functions
3. Lambda (anonymous) functions
4. Recursive functions

Examples:

# User-defined function
def greet(name):
    return "Hello " + name

print(greet("Alice"))

# Lambda function
square = lambda x: x * x
print(square(5))

# Recursive function
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
`,
    status: ""   // ✅ Default is WHITE
  },
  {
    id: 2,
    question: "What are all types of loops in Python?",
    answer: `Python supports different types of loops:

1. for loop
2. while loop
3. nested loops
4. loop control statements (break, continue, pass)

Examples:

# for loop
for i in range(5):
    print(i)

# while loop
count = 0
while count < 5:
    print(count)
    count += 1

# nested loop
for i in range(2):
    for j in range(3):
        print(i, j)

# break
for i in range(5):
    if i == 3:
        break
    print(i)

# continue
for i in range(5):
    if i == 2:
        continue
    print(i)

# pass
for i in range(3):
    pass
`,
    status: ""   // ✅ Default is WHITE
  },
  {
    id: 3,
    question: "Explain lists, tuples, and dictionaries in Python.",
    answer: `Lists, tuples, and dictionaries are core Python data structures.

1. List (ordered, mutable)
2. Tuple (ordered, immutable)
3. Dictionary (key-value pairs, mutable)

Examples:

# List
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)

# Tuple
my_tuple = (1, 2, 3)
print(my_tuple)

# Dictionary
my_dict = {"name": "Alice", "age": 25}
print(my_dict["name"])
my_dict["age"] = 26
print(my_dict)
`,
    status: ""   // ✅ Default is WHITE
  },
  {
    id: 4,
    question: "What are strings in Python?",
    answer: `Strings are sequences of characters enclosed in single, double, or triple quotes.

Common string operations:
- Concatenation
- Slicing
- Methods (upper, lower, replace, split)

Examples:

# Creating string
text = "Hello World"

# Concatenation
print(text + "!!!")

# Slicing
print(text[0:5])

# String methods
print(text.upper())
print(text.lower())
print(text.replace("World", "Python"))
print(text.split(" "))
`,
    status: ""   // ✅ Default is WHITE
  }
];

export default flashcards;
