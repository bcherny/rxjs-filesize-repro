# Repro for [rxjs/issues/3971](https://github.com/ReactiveX/rxjs/issues/3971)

## Run it

```sh
yarn
yarn build
```

## Results

With `"module": "commonjs"` vs `"module": "es2015"` in tsconfig.json:

### Before patch

| | `"module": "commonjs"` | `"module": "es2015"` |
|-|-|-|
| rxjs | 79.6 KiB | 14.7 KiB |
| rxjs-compat | 80 KiB | 80.1 KiB

### After patch

| | `"module": "commonjs"` | `"module": "es2015"` |
|-|-|-|
| rxjs | 79.6 KiB | 14.7 KiB |
| rxjs-compat | 18.6 KiB | 18.7 KiB
