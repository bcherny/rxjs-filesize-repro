# Repro for [rxjs/issues/3971](https://github.com/ReactiveX/rxjs/issues/3971)

## Run it

```sh
yarn
yarn build
```

## Results

With `"module": "commonjs"` in tsconfig.json:

```
bundle.js  79.6 KiB
```

With `"module": "es2015"` in tsconfig.json:

```
bundle.js  14.7 KiB
```
