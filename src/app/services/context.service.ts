import { Injectable } from '@angular/core';
import { CodeLevelInterface } from '../interfaces/code-level.interface';
import { CODE_LANGUAGE } from '../enums/code-language.enum';
import { codeLevels } from '../data/code-levels';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private _activeCodeLevel: CodeLevelInterface;
  private _codeLevels: Array<CodeLevelInterface>;

  constructor() {
    this._codeLevels = codeLevels;
    this._activeCodeLevel = this.getStartCodeLevel();
  }

  public get code() {
    return this._activeCodeLevel.content;
  }

  public get language() {
    switch (this._activeCodeLevel.language) {
      case CODE_LANGUAGE.PYTHON:
        return "python"
      case CODE_LANGUAGE.CSHARP:
        return "c#"
      case CODE_LANGUAGE.JAVASCRIPT:
        return "javascript"      
    }
  }

  private getStartCodeLevel () : CodeLevelInterface { 
    let maxIndex = this._codeLevels.length
    let randomIndex = Math.floor(Math.random() * maxIndex);
    // let codeLevel = this._codeLevels.filter(c => c.level == 1)[randomIndex];
    let codeLevel = this._codeLevels[randomIndex];

    return codeLevel;
  }

  private getCodeLevel (level: number, language: CODE_LANGUAGE) : CodeLevelInterface {
    // TODO: Validate level and language

    let maxIndex = this._codeLevels.length
    let randomIndex = Math.floor(Math.random() * maxIndex);
    
    let codeLevel = this._codeLevels
      .filter(c => c.level == level)
      .filter(c => c.language == language)[randomIndex];

    return codeLevel;
  }
}
