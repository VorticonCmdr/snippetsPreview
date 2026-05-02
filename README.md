# snippetsPreview Chrome extension

# build process:
- npm run build — alle Templates (preview, serp, replica-small/large/news)
- npm run build:replica — nur die drei replica-Templates
- npm run build:replica-small (etc.) — einzeln
- 
## zip chrome extension
zip -r snippetsPreview-v1.0.0.0.zip ./snippetsPreview/ -x '*/.git/*' -x '*/.handlebars' -x '*/.DS_Store' -x '*/.gitignore' -x '*/*.md'
