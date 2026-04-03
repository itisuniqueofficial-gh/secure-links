# Secure Links

Secure Links is a GitHub Pages site for viewing file details and accessing available download links for It Is Unique Official.

Live site:
- `https://sl.itisuniqueofficial.com`

## Features

- File detail pages powered by static JSON maps
- Download links for supported providers
- Simple GitHub Pages deployment
- Responsive static frontend
- Giscus-powered comments

## Project Structure

- `index.html` renders file information
- `tool.html` provides the link generator tool
- `script.js` and `tool.js` handle frontend logic
- `map-1.json` and `map-2.json` store file metadata
- `_includes/` contains shared Jekyll fragments
- `_config.yml` configures the Pages site

## Local Preview

To preview locally with Jekyll:

1. Install Ruby and Bundler
2. Install Jekyll: `gem install jekyll bundler`
3. Run: `jekyll serve`
4. Open the local URL shown in the terminal

## Deployment

This repository is configured for GitHub Pages with a custom domain:
- `sl.itisuniqueofficial.com`

Current site settings in `_config.yml`:

```yml
baseurl: ""
url: "https://sl.itisuniqueofficial.com"
```

If the domain changes, update both `_config.yml` and `CNAME`.

## Data Format

The JSON map files use this structure:

```json
{
  "file-id": {
    "name": "Example File",
    "size": "1.2 GB",
    "desc": "Short description",
    "mg": "mega-file-id",
    "gd": "google-drive-file-id",
    "tg": "telegram-start-value"
  }
}
```

## Support

- Website: `https://www.itisuniqueofficial.com`
- Support: `support@itisuniqueofficial.com`
- Security: see the organization `SECURITY.md`

## License

This project is licensed under the MIT License.
