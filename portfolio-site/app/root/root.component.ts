import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/root/root.html',
    directives: [ROUTER_DIRECTIVES]
})
export class RootComponent { }