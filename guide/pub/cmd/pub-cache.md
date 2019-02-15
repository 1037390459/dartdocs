Cache is one of the commands of the pub tool. [Learn more about pub](../).

```bash
$ pub cache add <package> [--version <constraint>] [--all]
$ pub cache repair
```

The ==pub cache== command works with the [system cache](../glossary.md#system-cache). To add new packages to your cache, use pub cache add. To perform a clean reinstall of the packages in your system cache, use ==pub cache repair==.

### Options

For options that apply to all pub commands, see [Global options](./#global-options).

==add &lt;package&gt;==
<br/>
Installs a library in your cache

==--all==
<br/>
Optional. Use with pub add to install all matching versions of a library.

==--version &lt;constraint&gt;==
<br/>
Optional. Use with pub add to install the best version matching the specified constraint. For example:

```bash
$ pub cache add barback --version "<=0.8.0 <0.110"
```

If ==--version== is omitted, pub installs the best of all known versions.

==repair==
<br/>
It's possible for packages in your pub cache to change or break. For example, if you follow a symlink in the packages directory and modify a package, this affects the canonical copy of that package in the system cache. The pub cache repair command performs a clean reinstall of all hosted and git packages in the system cache.

:::tip
Problems? See [Troubleshooting Pub](../troubleshoot.md).
:::