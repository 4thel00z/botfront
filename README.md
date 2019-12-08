<p align="center">
<a href="https://botfront.io">
    <img src="botfront/docs/images/botfront_animation.gif" width="100%">
</a>

<p align="center">
<a href="(https://github.com/botfront/botfront/actions">
    <img src="https://github.com/botfront/botfront/workflows/build/badge.svg" />
</a>
<a href="https://www.npmjs.com/package/botfront">
    <img alt="npm" src="https://img.shields.io/npm/v/botfront.svg">
</a>
<a href='https://github.com/botfront/botfront/blob/master/LICENSE'>
    <img alt="License" src="https://img.shields.io/badge/license-AGPLv3-blue.svg">
</a>
<a href='https://spectrum.chat/botfront'>
    <img alt="License" src="https://withspectrum.github.io/badge/badge.svg">
</a>
</p>



<p align="center">
  <a href="#highlights">Highlights</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#development">Development</a>
</p>
<p align="center">
  <a href="./CHANGELOG.md">Release Notes</a> •
  <a href="https://spectrum.chat/botfront">Get help</a> •
  <a href="https://botfront.io">Botfront.io</a>
</p>

<br/>
<h2 align="center">What is it</h2>


[Botfront](https://botfront.io) is an open source chatbot platform aiming to accelerate the development of complex and context-aware virtual assistants. Botfront runs on your machine and/or can be deployed on the cloud of your choice.

<br/>
<h2 name="highlights" align="center">Highlights</h2>

<center>
<table>
  <tr>
    <th><h2>😎</h2><h3>Easy to use</h3></th>
    <th><h2>🎓</h2><h3>Powerful</h3></th>
    <th><h2>💻️</h2><h3>Developer friendly</h3></th>
  </tr>
    <tr>
    <td width="33%">Conversational projects require easy prototyping, fast implementation and continous iteration. With Botfront, implementing context-aware conversation flows takes minutes and you can accelerate your time to market by an exponential factor.</td>
    <td width="33%">Botfront is built on top of  <a href="https://github.com/rasaHQ/rasa" target="_blank">Rasa</a>, one of the most popular and powerful conversational AI library. Botfront exposes all Rasa functionalities while astracting its complexity. Botfront projects can be exported for an existing Rasa installation.</td>
    <td width="33%">Botfront's intuitive CLI orchestrates all Botfront's services on your development machine.<br/><br/>Authoring, training, auto reloading actions code, it just works!</td>
  </tr>
  
</table>
</center>

<br/>
<h2 name="features" align="center">Features</h2>
<table>

<tr>
    <td width="33%"><h4>Build conversation as chatting</h4></td>
    <td width="67%">Botfront provides a <a href="https://botfront.io/docs/rasa/conversation-builder">unique and natural conversation authoring experience</a>. You can create complex dialog flows in minutes</td>
</tr>

<tr>
    <td width="33%"><h4>Train & evaluate NLU models</h4></td>
    <td width="67%">Botfront comes with a complete NLU annotation suite. You can tag vast amounts of data efficiently, train models and evaluate them. <a href="https://botfront.io/docs/rasa/nlu/evaluation/#evaluation-methods">Several evaluation methods</a> are available depending on the development state of your model</td>
</tr>
<tr>
    <td width="33%"><h4>Annotate incoming data</h4></td>
    <td width="67%">Botfront is always connected to your agents and conversation data keeps flowing in. You can annotate this data and even use it as an evaluation set to monitor your model and see how this new data can improve it</td>
</tr>
<tr>
    <td width="33%"><h4>Rasa integration</h4></td>
    <td width="67%">We were using Rasa before writing Botfront's first line of code. Botfront exposes all Rasa features and concepts and and just make them accessible at a higher level for faster development. You can <a href="https://botfront.io/docs/import-export/">export Botfront projects and use them with Rasa</a> at any time.</td>
</tr>

</table>
<br/>
<h2 name="quick-start" align="center">Quick Start</h2>

Botfront only requires a recent version of Docker. You can install the CLI with the following:

```bash
npm install -g botfront
```

Then just run `botfront`to get started.

<img src="/botfront/docs/terminalizer/botfront-setup.gif?raw=true" width="100%">
<br/>
<h2 name="documentation" align="center">Documentation</h2>

The [official documentation](https://botfront.io/docs) of Botfront is hosted on [botfront.io](https://botfront.io/docs). It is automatically built and updated on every new release.

If you need run the documentation elsewhere you can build a Docker container as follows:
```bash
# From the root of the repo
docker build -t botfront/botfront-docs botfront/docs
```

To serve the docs on port 8080 (e.g. `https://localhost:8080`):
```bash
docker run -p 8080:80 botfront/botfront-docs
```
<br/>
<h2 name="development" align="center">Development</h2>

### Installation

1. Botfront is a Meteor app, so the first step is to [install Meteor](https://www.meteor.com/install)
2. Then clone this repo and install the dependencies:
```bash
git clone https://github.com/botfront/botfront
cd botfront/botfront
meteor npm install
```
3. Install the CLI from the source code:
```bash
# if you installed Botfront from npm uninstall it.
npm uninstall -g botfront
# Install the cli from the source code
cd cli && npm link
```
Botfront needs to be connected to other services, especially Rasa. To do this, you need to create a regular project, and start Botfront with a dedicated configuration:

1. Create a Botfront project with `botfront init` (somewhere else, not in the repo)
2. Start your project with `botfront up -e botfront`. This will run all services except the Botfront app, since you are going to run it with Meteor locally
3. Run Botfront with `meteor npm run start:docker-compose.dev`. Botfront will be available at [http://localhost:3000](http://localhost:3000)

### Contribute

We ❤️ contributions of all size and sorts. If you find a typo, if you want to improve a section of the documentation or if you want to help with a bug or a feature, here are the steps:

1. Fork the repo and create a new branch, say `fix-botfront-typo-1`
2. Fix/improve the codebase
3. Commit the changes. **Commit message must follow [the naming convention](#naming-convention)**, say `fix(conversation builder): display story groups in alphabetical order`
4. Make a pull request. **Pull request name must follow [the naming convention](#naming-convention)**. It can simply be one of your commit messages, just copy paste it, e.g. `fix(readme): improve the readability and move sections`
5. Submit your pull request and wait for all checks passed (up to an hour)
6. Request reviews from one of the developers from our core team.
7. Get a 👍 and PR gets merged.

Well done! Once a PR gets merged, here are the things happened next:
- all Docker images tagged with `branch-master` will be automatically updated in an hour. You may check the status on the [Actions](https://github.com/botfront/botfront/actions) tab.
- your contribution and commits will be included in [our weekly release note](https://github.com/gnes-ai/gnes/blob/master/CHANGELOG.md). 🍻

<h3 name="naming-convention" align="center">Commits naming convention</h3>

To help everyone with understanding the commit history of Botfront, we employ [`commitlint`](https://commitlint.js.org/#/) to enforce the commit styles:

```text
type(scope?): subject
```

where `type` is one of the following:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

`scope` is optional, represents the module your commit working on.

`subject` explains the commit.

As an example, a commit that improved the documentation:
```text
docs(conversation builder): update slots manager screenshot.
```
<br/>
<h2 align="center">License</h2>

Botfront is [AGPLv3](https://github.com/botfront/botfront/blob/master/LICENSE) licensed. You can read the licence [here](https://github.com/botfront/botfront/blob/master/LICENSE).

<sub>
Copyright (C) 2019 9300-2038 Quebec Inc. All rights reserved.
</sub>
