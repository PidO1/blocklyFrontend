var fs = require('fs');
var gulp = require('gulp');
var tap = require('gulp-tap');
var replace = require('gulp-replace');
var run = require('gulp-run');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

//CSS
const cssDestination = 'src/index.css';
const cssTarget = ['src/**/*.css', 'src/*.css', `!${cssDestination}`];

//Will import all css files 
async function importCSS() {
    let files = [];
    gulp.src(cssTarget)
        .pipe(tap(function (file, _t) {
            let temp = '';
            files.push((file.dirname.split('src')[1] + '\\' + file.basename).split('\\').join('/'))
            files.map((v) => temp += `@import \'.${v}\';\n`);
            // console.log(files[files.length - 1])
            gulp.src(cssDestination)
                .pipe(replace(/[\s\S]*/gm,))
                .pipe(tap(function (file, _t) {
                    fs.writeFile(file.path, temp, () => { });
                }))
        }));
}
//END CSS

//HTML
const htmlTarget = 'src/**/*.html';

/**
 * To use the HTML copy
 * Create the below file structure
 * The copy will look for a js file in the same directory and same name as the html file
 * i.e. pages/sample.js & pages/sample.html
 * src/pages
 * ---pageName
 * ------pageName.js
 * ------pageName.html
 * ------pageName.css (optional)
 * 
 * For details on how to structure your .js file refer to src/pages/sample
 * 
 * To copy the HTML to the .js file add the below:
 * @html:start
 * @html:end
 * 
 * The code between the tags (including the @ tags) will be replaced everytime you edit the html file.
 * This wont modify any other js.
 */
async function copyHTML() {
    gulp.src(htmlTarget)
        .pipe(tap(function (file, _t) {
            fs.readFile(file.path, "utf8", (_err, v) => {
                gulp.src(file.dirname + '\\' + file.basename.replace('html', 'js'))
                    .pipe(replace(/@html:start[\s\S]*?@html:end/gm,
                        ('@html:start\nasync getHtml() {\nreturn \`\n' + v + '\n\`;\n}\n//@html:end')))
                    .pipe(tap(function (file, _t) {
                        fs.writeFile(file.path, file.contents, () => {
                            // console.log(file.dirname + '\\' + file.basename);
                        });
                    }));
            });
        }));
}

gulp.task('html', copyHTML);
//END HTML

//NPM
function npmRunBuild() {
    return run('npm run build').exec();
}
//END NPM

//SERVER
gulp.task('server:startStop', async function () {
    connect.server({
        root: 'build',
        livereload: true
    });
    return connect.serverClose();
});

gulp.task('server:reload', function () {
    npmRunBuild();
    return connect.reload();
});

exports.allWatcher = function () {
    watch(['src/*', 'src', 'src/**/*'], gulp.series('server:reload'));
};
//END SERVER


//use the command `gulp` to run the below
exports.default = function () {
    watch(cssTarget, { events: ['add', 'delete'] }, importCSS);
    watch(htmlTarget, copyHTML);
}

//use the command `gulp css` to run the below
gulp.task('css', importCSS);
//use the command `gulp npm:build` to run the below
gulp.task('npm:build', npmRunBuild);
//use the command `gulp build` to run the below
gulp.task('build', gulp.series('css', 'html', npmRunBuild));
//use the command `gulp build:server` to run the below
gulp.task('build:server', gulp.series('build', gulp.parallel('server:startStop')));

//use the command `gulp local` to run the below
exports.local = gulp.series('build:server', this.allWatcher);
