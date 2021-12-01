import { CODE_LANGUAGE } from "../enums/code-language.enum";

export interface CodeLevelInterface {
    level: number,
    language: CODE_LANGUAGE,
    content: string
}