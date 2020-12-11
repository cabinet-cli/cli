<h1 align="center">
  <br />
  <img src="https://avatars0.githubusercontent.com/u/75741868?s=100&v=4" />
  <br />
  Cabinet
  <sup>
    <br />
    <br />
  </sup>
</h1>

<div align="center">
  <img src="https://img.shields.io/badge/cli-oclif-brightgreen.svg?style=flat-square" alt="Oclif" />
  <img src="https://img.shields.io/travis/com/cabinet-cli/core?style=flat-square" alt="Build Status" />
  <img src="https://img.shields.io/codecov/c/github/cabinet-cli/core?style=flat-square" alt="Coverage" />
  <br />
  <sup>A normal web archiver but aims to work for literally everything
</sup>
  <br />
  <br />
</div>

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cabinet-cli
$ cabinet COMMAND
running command...
$ cabinet (-v|--version|version)
cabinet-cli/0.0.1 win32-x64 node-v12.18.4
$ cabinet --help [COMMAND]
USAGE
  $ cabinet COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cabinet help [COMMAND]`](#cabinet-help-command)
* [`cabinet run`](#cabinet-run)

## `cabinet help [COMMAND]`

display help for cabinet

```
USAGE
  $ cabinet help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `cabinet run`

run the archiving process just for once

```
USAGE
  $ cabinet run

OPTIONS
  -c, --config=config  [default: ./config.json] specify configuration file path
  -h, --help           show CLI help
  --no-splash          prevent display splash logo
  --print-config       print current provided configuration data

EXAMPLE
  $ cabinet run
```

_See code: [src/commands/run.ts](https://github.com/cabinet-cli/core/blob/v0.0.1/src/commands/run.ts)_
