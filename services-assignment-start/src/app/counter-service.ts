export class CounterService{
    activeToInactiveCount: number = 0;
    inactiveToActiveCount: number = 0;

    setActiveToInactiveCount(){
        this.activeToInactiveCount++;
    }

    setinactiveToActiveCount(){
        this.inactiveToActiveCount++;
    }
}