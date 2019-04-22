# Infinity_Divider
Static front-end concept for website Yorben. The concept is a site that makes it's own lay-out by randomising all the content into a grid.
--------------------
## 📦 Requirements
- Npm (NodeJS)

## 🚀 Get started
1. Fork and clone this repository
2. Navigate to your local folder and download all npm-packages with the following command:
```bash
npm install
```
3. Start the development server
```bash
npm start
```

## Instructions
### Adding a Thumbnail element
> We know, this is not the most user friendly solution. Maybe in the future we'ill make a more elegant solution

The sheer amount of thumbnails is quite annoying to create and maintain in static HTML. Therefore this project creates these elements dynamicially. To add/edit a thumbnail to the page, use the following steps:
1. Put your thumbnail-image into the static/img folder.
2. in the JS folder go to data.js. [Create a new element](https://www.w3schools.com/js/js_objects.asp) within this object with the name 'item + theAmountOfElements + 1'.


