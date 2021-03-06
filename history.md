#0.1.0 / 2013-02-27

* Browser support!
* Support for compiling nools dsl from string source or path
* New reactive mode when running a flow
* Support for emitting custom events from rule actions
* Can now include `$` in your constraint variables
* Added support for `%`, `!=~`, `notIn`, and `notLike` in constraints
* Increased performance
  * Waltdb Bench (Before ~60000ms, Now ~25000ms)
  * Manners (Before ~2000ms, Now ~500ms)
* Better error reporting if action has reference error
* Better fact retraction in not and join nodes
* You can now use properties from object in `in` expressions.
* Refactoring of node types into seperate files
* Support for specifying a `scope` when compiling which can be used to expose methods and objects to be used in constraints and actions.
* More Examples (requirejs, browser, conways game of life)
* More tests and better coverage on or and not nodes.

#0.0.5 / 2012-09-10
* Fix for issue [#13](https://github.com/C2FO/nools/issues/13) where identifiers were not gathered in property chains that contained functions.

#0.0.4 / 2012-09-10
* Added travis CI

#0.0.3 / 2012-09-06
* Updates for repo rename
* code clean up


#0.0.2 / 2012-05-22
* Increased performance
  * Manners benchmark 800%
* Added Parser for nools DSL
* More helper functions
* Updated readme

