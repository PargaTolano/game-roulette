# Game Roulette #

Game Roulette is a next-js app/ website where you can select a random game from a certain collection and see a lot of useful info on it. The game data is brought using the [IGDB API](https://api-docs.igdb.com).

## Installation ##

Use git clone to clone the repository in the desired directory.

```bash
    git clone https://github.com/PargaTolano/game-roulette.git
```

After that, navigate to the directory via bash
```bash
    cd game-roulette
```

Install the node dependencies necessary to run the project via npm or yarn.

#### npm ####
```bash
    npm install

```

#### yarn ####
```bash
    yarn
```

## Running ##

In order to run the project you need to build it first via npm or yarn.

#### npm ####
```bash
    npm run build

```

#### yarn ####
```bash
    yarn run build
```

Run it with nom or yarn
#### npm ####
```bash
    npm run start

```

#### yarn ####
```bash
    yarn run start
```

## Directories ##
- constants
    - Constants used for commmon processes in the app, such as enumerations. 
- db
    - The database interaction layer, brings the data from the api to the app.
- pages

	- Contains the pages and views displayed through the whole application.
- pages/api
    - Internal api created for external requests
- public
    - Static resources used in the app.
- styles
    - Stylesheets used for the user interface stying of the app.

## Pages ##

### Games ###
Displays a collection of games to choose from, it's represented by the route 'games'.

### Game ###
Display the detailed info of an specific game, given by the id in the route right after the 'game' route.
