# Using Gulp to Build a Front End Website

### Build Process Dependencies
- [ ] Running the npm install command installs the build process dependencies properly

### Scripts Task
- [x] The gulp scripts command concatenates, minifies, and copies all of the project’s JavaScript files into an all.min.js file
- [x] The command copies the all.min.js file into the dist/scripts folder

### Styles Task
- [x] The gulp styles command compiles the project’s SCSS files into CSS, and concatenates and minifies into an all.min.css file
- [x] The command copies the all.min.css file into the dist/styles folder

### Source Maps
- [x] The gulp scripts command generates JavaScript source maps
- [x] The gulp styles command generates CSS source maps

### Images Task
- [x] The gulp images command copies the optimized images to the dist/content folder.

### Clean Task
- [ ] The gulp clean command deletes all of the files and folders in the dist folder.

### Build Task
- [ ] The gulp build command properly runs the clean, scripts, styles, and images tasks.
- [ ] The clean task fully completes before the scripts, styles, and images tasks are ran.

### Default Task
- [ ] The gulp command properly runs the build task as a dependency
- [ ] The gulp command serves the project using a local webserver.
