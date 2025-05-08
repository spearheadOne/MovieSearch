# Movie Search

A tiny app for movie search using OMDB API

Search is available via title and year or via IMDB ID

## Structure

The app consists of two parts

- movie-search - React based frontend
- movie-server - A tiny express server for calling OMDB API

The APP requires an api key set to OMDB_API_KEY environment variable


## Build and run

### Frontend

- Install dependencies
```
yarn install
```
- Run dev server
```
yarn dev
```
Dev server has a cors disabled to use backend server

- Run production build
```
yarn build
```

Additionally linter and prettier are presented: 
```
yarn lint
yarln lint:fix
yarn format
```

note: tailwind css4 and eslint have some compatibility issues

### Backend
- Install dependencies
```
yarn install
```
- Run server
```
yarn start
```

Additionally linter and prettier are presented:
```
yarn lint
yarln lint:fix
yarn format
```