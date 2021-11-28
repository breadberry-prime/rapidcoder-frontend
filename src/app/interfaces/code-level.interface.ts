import { CODELANGUAGE } from "../enums/codelanguage.enum";

export interface CodeLevelInterface {
    level: number,
    language: CODELANGUAGE,
    content: string
}