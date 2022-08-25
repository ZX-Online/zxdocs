# AT

## Description

**AT** is not a statement, but a _modifier_.
It can be used both as a [PRINT modifier](print#modifiers) and a [variable declaration modifier](dim).

## Remarks

* This identifier is compatible with Sinclair BASIC (see [PRINT](print)), but _expands_ it, since it allows positioning at rows 22 and 23 (all 24 rows are available to the programmer). Traditionally, Sinclair BASIC only allows to print at rows 0..21.
* This identifier _expands_ the Sinclair BASIC version when used with [DIM](dim)

## See also

* [PRINT](print)
* [DIM](dim) - Variable Declarations
* [POS](../library/pos)
* [CSRLIN](../library/csrlin)