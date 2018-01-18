# Change Log
- Initial release 2018/01/08 : Extension project creation
## [Unreleased]
### Initial release
### Known bugs
- nothing works as nothing is done ;-)

### TODO
- Import Ada mode from ada4vscode
- Improve Ada mode from ada4vscode
- Find out .gpr files in current workspace
- Create .vscode/gnatsettings.json
    - list gnat projects in workspace
    - mark 1 of projects as 'current'
    - define current project as ${gpr} to use in task scripts
    - create default gnat tasks (build, clean, compile)
    - Command select current project editing json or with explorer menu
    - Find out a way to define project's scenario values
- Improve completion with withed packages using ${gpr}
- Add command 'find-definition', 'find-uses' using gnat xrefs
- 