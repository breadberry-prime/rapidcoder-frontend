import { CODELANGUAGE } from "../enums/codelanguage.enum";
import { CodeLevelInterface } from "../interfaces/code-level.interface";

export let codeLevels: CodeLevelInterface[] = [
    {
        "level" : 1,
        "language" : CODELANGUAGE.PYTHON,
        "content" : ">>> print(\"Hello World!\")"
    },
    {
        "level" : 1,
        "language" : CODELANGUAGE.CSHARP,
        "content" : "Console.WriteLine(\"Hello World!\");"
    },
    {
        "level" : 1,
        "language" : CODELANGUAGE.JAVASCRIPT,
        "content" : "console.write(\"Hello World!\");"
    }
]