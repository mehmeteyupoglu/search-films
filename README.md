# Film DB

Film DB is a cool small weekend project . It basically searches for films and retrives data from mock [OMDB Api](http://www.omdbapi.com/). Vue.js and it's ecosystem has been adopted on the client side. For the whole list of packages used in the project, please checkout [package.json](https://github.com/mehmeteyupoglu/search-films/blob/main/package.json).

## Principles, Docs and Methodologies

From the very beginning of the project, a clean architecture, well-decomposed code on the client side has been the ultimate objective. Especially reactivity and the reusability of the framework has been exploited to have a light and performant web app.

### Tools, conventions, design systems

- [Conventional commits](www.conventionalcommits.org/) have been used throught the development process for a clean and consistent versioning
- The project has been documented with the help of [jsdoc](https://jsdoc.app/) and [vue style guide](https://vue-styleguidist.github.io/)
- To have a clean reusability of components and a solid reusable structure, [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) principles helped

## Timeline

The project was created within a couple days. For the detailed timeline of the development phase check below:

| Time Period                 |                   Work                   |
| --------------------------- | :--------------------------------------: |
| April 1, 2021 9:00-10.30pm  |          Initial setup, layout           |
| April 2, 2021 10:00-12.00am |      Initial design, configuration       |
| April 2, 2021 1:00-2.00pm   |           Service integration            |
| April 2, 2021 8:00-10.30pm  | Activate searching films in autocomplete |
| April 3, 2021 9:30-10.30am  |         Snackbar, documentation          |

## Project setup

### Vue project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Run your unit tests

```
yarn test:unit
```
