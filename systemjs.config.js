
System.config({
	defaultJSExtensions: true,
	transpiler: "typescript",
	typescriptOptions: {
		"target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": ["es2015", "dom"],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
	},

    paths: {
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'src',

      'rxjs':'npm:rxjs',
	    'typescript':'npm:typescript/lib/typescript.js',
      'lodash':'npm:lodash/lodash.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'app': {
        main: './app',
        defaultExtension: 'ts'
      },
      'rxjs': {
        main: 'Rx',
        defaultExtension: 'js'
      }
    }
  });