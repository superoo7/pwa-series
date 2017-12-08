---
path: '/c1-5-Node-NPM-Yarn'
title: 'Introduction and Installation of Node, NPM and Yarn'
published: true
chapter: '1.5'
date: '2017-12-08'
---

__[Node.js](https://nodejs.org)__ is JavaScript runtime that can runs on devices. Alongside with __[NPM](https://www.npmjs.com/)__, world's largest software registry.

In modern Front End Development, NPM is used as a package management that download a library and setup made easy.

__[Yarn](https://yarnpkg.com)__ is basically just `NPM ON STEROID` because yarn are able to cache previous install and super fast to use it.

## Node.js
### Installation
__Method 1: Typical Installation__
1. Go to [Node.js Official Download Page](https://nodejs.org/en/download/) and download install it. (Choose LTS version for stability)
2. Once install try `node -v` to verify installation.

__Method 2: Node Version Manager (NVM)__
> I prefer this method because I can have multiple version of Node.js

> FROM NVM GITHUB:
> Note: nvm does not support Windows. Two alternatives exist, which are neither supported nor developed by us:
> [nvm-windows](https://github.com/coreybutler/nvm-windows)
> [nodist](https://github.com/marcelklehr/nodist)
1. Go to [nvm official github #Install Script section](https://github.com/creationix/nvm#install-script)
2. Either `curl` or `wget`
3. Add `export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm` to your `~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc`
4. In terminal, `nvm install node --stable`
5. Set it to default `nvm alias default v8.9.2` (My version that I set)

### using Node
Since we installed node, test the installed version with `node -v`.

let's try node REPL

In console, simply just `node`. Then in terminal, simply try `console.log("test");`, and you will see it work! To exit, simply just `.exit`.

## NPM
Installation of Node.js will also install NPM alongside.

## Basic NPM Operation
Let start a project with NPM. Go to a new empty directory, run `npm init`. The terminal will ask you a bunch of questions. Answer it and it will generate a `package.json` file.

Let just say we want to install `webpack` (webpack is a popular project bundler)

<table>
    <tr>
        <th>Command</th>
        <th>Function</th>
    </tr>
    <tr>
        <th><i>npm install --save webpack</i></th>
        <th>This will install `webpack` for current directory, and the version in saved (because `--save` flag, it added to package.json`)</th>
    </tr>
    <tr>
        <th><i>npm install -g webpack</i></th>
        <th>Install webpack globally</th>
    </tr>
    <tr>
        <th><i>npm uninstall -g webpack</i></th>
        <th>Uninstall webpack globally</th>
    </tr>
</table>

By installing locally, it will generate a file call `node_modules`. All the libraries that you downloaded is in there.

__That basically what you need to know to start using this!__

## Yarn (Optional)
I can say `yarn` is an upgrade of NPM, you guys can just go and read up [Install Yarn](https://yarnpkg.com/en/docs/install) and [Get Started with Yarn](https://yarnpkg.com/en/docs/getting-started).

> Just a side note, those who install node with nvm, need to take extra care upon installation of yarn. Read The installation doc carefully.

