# AltranWeather

To install all dependencies, please run ```npm install```
Afterwards, run the app in development mode or as a standalone app (see below).

## Considerations

The application uses the Store implementation from ngrx.
I use Observables from rxjs to query the store and display the data in the components.

I'm assuming that the exercise was designed with React in mind, because in Angular using the store is not that common, but I have tried to showcase what I can do with those 2 libraries (ngrx, rxjs) and so the application is built in a reactive way, using Observables with async pipe when possible.

Components are classified as smart or presentational in the folders containers and components.

The style is very basic. I'm not a fan of bootstrap, foundation or any other css library, but the project as Angular Material ready to use if needed. 

I understand styling and I have good knowledge of flex, scss, design patterns (responsive design, atomic design) but it's not my field, so I prefer not to spend too much time on it.

You'll see that the code is not commented; I believe that good code should not need comments, and although this is a very simple scenario I like to keep my functions as small as possible.

The configuration parameters are in /src/environments, that is the API, API_KEY and also the refresh time (in milliseconds). You have the option to force the reload of data from http in the application, but I think my KEY has a limit of 1 call every 10 minutes, so it might stop working if that is used too much.

Although is not clear in the exercise, I've built a basic page to display historic results. These are the results that the application gets every time data is fetch from http. Of course this should be improved, storing only 1 result every hour or something similar.
Also, the store will get data automatically only when the application is in the home screen. This could also be modified easily.
The way I implemented it is based on my considerations only when I didn´t get a clear idea from the requirements.

The app took me about 10h to develop (around 6 to 7h to develop the app and another 3h for unit testing).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

I've created unit tests for all components and services.

For the components within /components (presentational components) I'm just checking that the correct tags are being created for a given input.

For the components within /containers (smart components) I'm checking that the correct data is being retrieved from the Store, which I'm initializing with mock data.

For the service WeatherService I'm checking that the correct data is being retrieved after calling the http service, which I'm mocking with my own implementation.

I'm not unit testing the actions / reducers in the store as it would have taken me much more work.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

I've not created e2e tests for this application.