cabinet-cli
===========

A normal web archiver but aims to work for literally everything

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cabinet-cli.svg)](https://npmjs.org/package/cabinet-cli)
[![Downloads/week](https://img.shields.io/npm/dw/cabinet-cli.svg)](https://npmjs.org/package/cabinet-cli)
[![License](https://img.shields.io/npm/l/cabinet-cli.svg)](https://github.com/cabinet-cli/core/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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
```sh-session
$ npm install -g cabinet-cli
$ cabinet COMMAND
running command...
$ cabinet (-v|--version|version)
cabinet-cli/0.0.1 win32-x64 node-v12.18.2
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
