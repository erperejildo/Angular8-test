# Angular8Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Code

- ngOnChanges, @Ouput() and @Input(): [HERE](https://github.com/erperejildo/Angular8-test/blob/master/src/app/components/money-converter/money-converter.component.ts#L16).
- Lazy load modules: all components are loaded as lazy load modules
- Route guard: [HERE](https://github.com/erperejildo/Angular8-test/blob/master/src/app/guards/page-two-route.guard.ts).
- Data between pages: [HERE](https://github.com/erperejildo/Angular8-test/blob/2759d7735506147f2a1c6140cd088a21e02f0600/src/app/components/login-popup/login-popup.component.html#L4) and [HERE](https://github.com/erperejildo/Angular8-test/blob/2759d7735506147f2a1c6140cd088a21e02f0600/src/app/pages/page-two/page-two.component.ts#L12).
- Page transition animation: [HERE](https://github.com/erperejildo/Angular8-test/blob/2759d7735506147f2a1c6140cd088a21e02f0600/src/app/pages/page-three/page-three.component.html#L6).
- Nested <router-outlet>: [HERE](https://github.com/erperejildo/Angular8-test/blob/master/src/app/pages/page-three/page-three-routing.module.ts).
- 2 inputs with some simple validation: [HERE](https://github.com/erperejildo/Angular8-test/blob/master/src/app/components/login-popup/login-popup.component.html).
- ng-content: [HERE](https://github.com/erperejildo/Angular8-test/blob/2759d7735506147f2a1c6140cd088a21e02f0600/src/app/pages/page-three/page-three.component.html#L2).
- Input directive that restricts the input to numbers only and auto formats the input
into currency: [HERE](https://github.com/erperejildo/Angular8-test/blob/master/src/app/components/money-converter/money-converter.component.html).
