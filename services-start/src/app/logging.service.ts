export class LoggingService{
    logStatusChange(status: string){
        console.log('Log Service - A server status changed, new status: ' + status);
    }
}