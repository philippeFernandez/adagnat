# Change Log
## [Unreleased]
- Initial dev 2018/01/08 
    - dummy command 'check' for debug purpose
    - Imported rules from "ada4vscode"
    - Imported and changed basic snippets from "AlessandroDelSole.ada"
    - ${gnat}

### Initial release
### Known bugs

### TODO
- Add rules for .gpr files
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