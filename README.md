# Basic electron app packaging in Nix

Build and run with:
```bash
$ nix-build
$ ./result/bin/my-electron-app
```

or, if you use `flake`, you can build it and run it with:
```
$ nix run .
```

You can also run it in real time (useful when debugging) via:
```bash
$ nix-shell
$ electron .
```

If you want more examples, I created other branches:
- the branch `electron-forge` contains a similar project that works with `electron-forge` (basically, no change, except for the hash).
- the branch `main` contains the simpler case (npm)
