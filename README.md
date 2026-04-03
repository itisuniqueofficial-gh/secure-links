# Secure Links GitHub Pages Setup

This project is now ready to run as a GitHub Pages Jekyll site.

## Files Added for GitHub Pages

- `_config.yml` enables Jekyll configuration
- `index.html` and `tool.html` now use Jekyll front matter
- Asset links now use Jekyll path filters so they work on GitHub Pages

## Before Deploying

Update `_config.yml` to match your repository type.

For a user or organization site:

```yml
baseurl: ""
url: "https://username.github.io"
```

For a project site:

```yml
baseurl: "/repo-name"
url: "https://username.github.io"
```

Custom domain example:

```yml
baseurl: ""
url: "https://sl.itisuniqueofficial.com"
```

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload or push all files from this project.
3. Open the repository on GitHub.
4. Go to `Settings` > `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select your branch, usually `main`.
7. Select the folder `/ (root)`.
8. Save the settings.

GitHub will build and publish the site automatically.

## Custom Domain

This repository includes a `CNAME` file for:

```txt
sl.itisuniqueofficial.com
```

In GitHub:

1. Open `Settings` > `Pages`.
2. Set the custom domain to `sl.itisuniqueofficial.com`.
3. Enable HTTPS after DNS is configured.

At your DNS provider, point `sl.itisuniqueofficial.com` to GitHub Pages using the records GitHub shows for your Pages site.

## Site URLs

- Home page: `/`
- Tool page: `/tool.html`

If this is a project site, the full URL will include your repository name because of `baseurl`.

## Notes

- JSON files like `map-1.json` and `map-2.json` are served as static files by GitHub Pages.
- The JavaScript `fetch()` calls will keep working as long as those files stay in the site root.
- If you later rename the repository, update `baseurl` in `_config.yml`.
- With a custom domain on a user/org Pages site, keep `baseurl: ""`.
*** Add File: CNAME
sl.itisuniqueofficial.com
