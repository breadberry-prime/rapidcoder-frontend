import { CODE_LANGUAGE } from "../enums/code-language.enum";
import { CodeLevelInterface } from "../interfaces/code-level.interface";

export const codeLevels: CodeLevelInterface[] = [
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.PYTHON,
        "content" : "print(\"Hello World!\")"
    },
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.CSHARP,
        "content" : "Console.WriteLine(\"Hello World!\");"
    },
    {
        "level" : 1,
        "language" : CODE_LANGUAGE.JAVASCRIPT,
        "content" : "console.write(\"Hello World!\");"
    }
]