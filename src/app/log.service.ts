import { Injectable } from '@angular/core';

interface IConsole {
  log: any;
}

@Injectable()
export class LogService {
  console: IConsole;
  static active = false;
  constructor() {

    this.console = !LogService.isActiveLogging() ?
      LogService.ActiveLogging() :
      LogService.NoLogging();
  }

  static isActiveLogging(): boolean {
    return this.active;
  }
  static ActiveLogging(): IConsole {
    this.active = true;
    return {
      log: console.log
    };
  }
  static NoLogging(): IConsole {
    this.active = false;
    const NO_OPERATION = () => { };
    return {
      log: NO_OPERATION
    };
  }


}
