# react-tutorial

Each folder is a lesson. If you are on OSX, create a node_modules/ directory at the top level folder:

```sh
mkdir node_modules
```

After that you can go to the first lesson folder to run yarn to install dependencies:

```sh
cd <lesson-dir>
yarn
```

You only have to do 'yarn' once because node_modules/ in each lesson is symbolically linked to the node_modules/ folder in its parent directory recussively.

To play with a lesson, in each lesson folder spin up webpack dev server:

```sh
yarn dev -- --open
```

which will launch your browser and open up to localhost:8888.


