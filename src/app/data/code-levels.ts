import { CODE_LANGUAGE } from "../enums/code-language.enum";
import { CodeLevelInterface } from "../interfaces/code-level.interface";

export const codeLevels: CodeLevelInterface[] = [
    // ===============================================
    // python
    // ===============================================
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nprint(\"Hello World!\")"
    },    
    {
        "level" : 2,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nx = 42\ny = 93\nprint(x + y)"
    },
    {
        "level" : 3,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nx = 35\ny = 99\nz = 43\n\nif (x + y) < (z + y)\n  print(\"entered scope\")"
    },
    {
        "level" : 4,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nclass Car:\n  def __init__(self, make, model, year):\n    self.make = make\n    self.model = model\n    self.year = year"
    },
    // ===============================================
    // c#
    // ===============================================
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.CSHARP,
        "content" : "\nConsole.WriteLine(\"Hello World!\");"
    },
    {
        "level" : 2,
        "language" : CODE_LANGUAGE.CSHARP,
        "content" : "\nint x = 42;\nint y = 93;\nConsole.WriteLine(x + y);"
    },
    {
        "level" : 3,
        "language" : CODE_LANGUAGE.CSHARP,
        "content" : "\nint x = 35;\nint y = 99;\nint z = 43;\n\nif ((x + y) < (z + y))\n{\n    Console.WriteLine(\"entered scope\");\n}"
    },
    {
        "level" : 4,
        "language" : CODE_LANGUAGE.CSHARP,
        "content" : "\nclass Car\n{\n    public Car(string make, string model, int year)\n    {\n        Make = make;\n        Model = model;\n        Year = year;\n    }\n\n    public string Make { get; set; }\n    public string Model { get; set; }\n    public int Year { get; set; }\n}"
    },
    // ===============================================
    // javascript
    // ===============================================
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.JAVASCRIPT,
        "content" : "\nconsole.write(\"Hello World!\");"
    },
    {
        "level" : 2,
        "language" : CODE_LANGUAGE.JAVASCRIPT,
        "content" : "\nvar x = 42;\nvar y = 93\nconsole.write(x + y);"
    },
    {
        "level" : 3,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nvar x = 35;\nvar y = 99;\nvar z = 43;\n\nif ((x + y) < (z + y)) {\n  print(\"entered scope\")\n}"
    },
    {
        "level" : 4,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "\nexport class Car {\n  constructor(make, model, year) {\n    this.make = make;\n    this.model = model;\n    this.self.year = year;\n  }\n}"
    },
]