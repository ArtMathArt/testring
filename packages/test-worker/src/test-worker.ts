import {
    ITransport,
    ITestWorker,
    ITestWorkerConfig,
    FileCompiler,
    TestWorkerPlugin,
} from '@testring/types';
import { PluggableModule } from '@testring/pluggable-module';
import { TestWorkerInstance } from './test-worker-instance';


export class TestWorker extends PluggableModule implements ITestWorker {

    private compile: FileCompiler = (source: string, filename: string) => {
        return this.callHook(TestWorkerPlugin.compile, source, filename);
    };

    constructor(private transport: ITransport, private workerConfig: Partial<ITestWorkerConfig>) {
        super([
            TestWorkerPlugin.compile
        ]);
    }

    spawn() {
        return new TestWorkerInstance(this.transport, this.compile, this.workerConfig);
    }
}
