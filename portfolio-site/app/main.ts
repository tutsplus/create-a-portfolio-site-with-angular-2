import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RootComponent } from './root/root.component';
import { myRouterProviders } from './root/root.routes';

bootstrap(RootComponent, [myRouterProviders]);

