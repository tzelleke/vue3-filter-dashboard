# Vue 3 Demo Dashboard

This is a demo dashboard built with Vue 3, AG Grid, Formkit and Tailwind CSS.

It uses Composition API exclusively and Pinia for state management.

The dashboard is a simple drill-down app that lists Nobel Prize Awards.
It allows you to filter by year and category and drill down to see the winners for each category.

Data has been obtained from the [Nobel Prize API](https://nobelprize.readme.io/docs) and preprocessed to make it easier to use.

## Project setup

```shell
git clone https://github.com/tzelleke/vue3-filter-dashboard.git
cd vue3-filter-dashboard

docker compose up -d

# now open http://localhost:5173
```
