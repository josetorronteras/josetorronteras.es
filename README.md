# josetorronteras.es

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Web framework
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [Docker](https://www.docker.com) - Containerized project
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 🚀 Local Development

1. Clone the repository:

```bash
git clone https://github.com/josetorronteras/josetorronteras.es.git
cd josetorronteras.es
```

2. Link the content repository:

The site content (data files and blog posts) lives in a separate private repository. Clone it next to this one and create a symlink so Astro can find it:

```bash
# From the josetorronteras.es root
git clone https://github.com/josetorronteras/josetorronteras.es-content.git ../josetorronteras.es-content
ln -sf ../../../josetorronteras.es-content src/data/content
```

> If you already have the content repo cloned at `../josetorronteras.es-content`, just run the `ln -sf` line.

To remove the symlink:

```bash
rm src/data/content
```

3. Start the development environment with Docker:

```bash
docker compose up
```

The site will be available at `http://localhost:4321`

## 📦 Available Commands

| Command                                        | Description                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| `docker compose up`                            | Starts the development environment                                |
| `docker compose run --rm app npm run <script>` | Runs any npm script inside the container (e.g. dev, build, check) |
| `npm run dev`                                  | Starts the development server                                     |
| `npm run build`                                | Builds the site for production                                    |
| `npm run preview`                              | Previews the local production build                               |
| `npm run check`                                | Runs type checks                                                  |
| `npm run format`                               | Formats code using Prettier                                       |

## 📝 Licencia

This project is licensed under the [MIT](LICENSE.md) license.
