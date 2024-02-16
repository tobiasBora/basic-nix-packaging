# Basic electron app packaging in Nix

Support of the tutorial https://stackoverflow.com/questions/78004799/package-elecron-application-in-nix/78004800#78004800

Build and run with:
```bash
$ nix-build
$ ./result/bin/my-electron-app
```

or, if you use `flake`, you can build it and run it with:
```
$ nix run github:tobiasBora/basic-nix-packaging
```

You can also run it in real time (useful when debugging) via:
```bash
$ nix-shell
$ electron .
```

If you want more examples, I created multiple branches:
- the branch `main` contains the simpler case (we use npm here)
- the branch `electron-forge` contains a similar project that works with `electron-forge` (basically, no change, except for the hash).
- the branch `using-library` contains an example showing how to use an external library (basically: nothing to change)

You can try them with:
```
$ nix run github:tobiasBora/basic-nix-packaging
$ nix run github:tobiasBora/basic-nix-packaging/electron-forge
$ nix run github:tobiasBora/basic-nix-packaging/using-library
```
