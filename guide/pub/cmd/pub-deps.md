Deps is one of the commands of the pub tool. [Learn more about pub](../).

```bash
$ pub deps [--style=<style>]
```

This command prints the dependency graph for a package. The graph includes both the [immediate dependencies](../glossary.md#immediate-dependency) that the package uses (as specified in the pubspec), as well as the [transitive dependencies](../glossary.md#transitive-dependency) pulled in by the immediate dependencies.

The dependency information is printed as a tree, a list, or a compact list.

For example, the pubspec for the markdown_converter example specifies the following dependencies:

```yaml
dependencies:
  barback: ^0.15.2
  markdown: ^0.7.2
```

Here’s an example of the pub deps output for markdown_converter:

```
$ pub deps
markdown_converter 0.0.0
|-- barback 0.15.2+6
|   |-- collection 1.1.2
|   |-- path 1.3.6
|   |-- pool 1.1.0
|   |   '-- stack_trace...
|   |-- source_span 1.2.0
|   |   '-- path...
|   '-- stack_trace 1.4.2
|       '-- path...
'-- markdown 0.7.2
```

### Options

For options that apply to all pub commands, see [Global options](/#global-options).

==--style=&lt;style&gt;== or -s ==&lt;style&gt;==
<br/>
Optional. How the output should be displayed. The options are: ==compact==, ==tree==, or ==list==. The default is tree.

:::tip
Problems? See [Troubleshooting Pub](../troubleshoot.md).
:::