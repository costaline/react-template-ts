import { routes, RoutesType } from './_routes';

export class Routes {
  private static routes = routes;

  static get all(): RoutesType {
    return this.routes;
  }
}
