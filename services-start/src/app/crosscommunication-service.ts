import { EventEmitter } from "@angular/core";

export class CrossCommunicationService {
    informNewAccCreated = new EventEmitter<string>();
}