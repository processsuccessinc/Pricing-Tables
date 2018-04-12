const  gulp  =  require('gulp'),
      pug = require('gulp-pug'),
      babel = require('gulp-babel'),
      postcss  =  require('gulp-postcss'),
      mqpacker = require('css-mqpacker'),
      colorFunction = require('postcss-color-function'),
      nested = require('postcss-nested'),
      cssnext  =  require('postcss-cssnext'),
      postImport  =  require('postcss-import'),
      browserSync = require('browser-sync');

gulp.task('default', ['serve','watch'])

gulp.task('serve', ()=>{
	browserSync.init({
		server: './'
	})
})

gulp.task('watch',()=>{
  gulp.watch('./src/css/style.css', ['css'])
  gulp.watch('./src/index.pug',['pug'])
  gulp.watch('./src/js/app.js',['babel'])
})



gulp.task('pug', () =>{
  gulp.src('./src/index.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})


gulp.task('babel',() =>{
  gulp.src('src/js/app.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
})


gulp.task('css', ()=>{
	const procesar = [
    postImport(),
    colorFunction(),
    nested(),
    // configuración css next
		cssnext({
      features:{
        autoprefixer:{
          grid:true,
        }
      },
      customProperties:false,
    }),
    mqpacker(),
	]

  return gulp.src('./src/css/style.css')
	.pipe(postcss(procesar))
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream())
})