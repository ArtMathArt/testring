import { ITestFile } from '../test-finder';

export enum TestRunControllerHooks {
    beforeRun = 'beforeRun',
}

export interface IQueuedTest {
    retryCount: number,
    test: ITestFile
}

export interface ITestRunController {
    runQueue(testSet: Array<ITestFile>): Promise<Error[] | void>;
}