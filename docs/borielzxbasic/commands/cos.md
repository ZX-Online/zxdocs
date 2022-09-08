# COS

## Syntax

```
COS(numericExpression)
```

## Description

Returns the cosine value of the given argument.
Argument must be a numeric expression in radians units. Returned value type is [float](../structure/types#Float).

## Examples

```
REM Cosine value
PRINT "Cosine value of a is "; COS(a)
```

## Remarks

*  This function is 100% Sinclair BASIC Compatible
*  If the given argument type is not float, it will be [converted](cast) to float before operating with it.

## See also

* [SIN](sin) and [ASN](asn)
* [TAN](tan) and [ATN](atn)
* [ACS](acs)
*  Faster library option for lower accuracy trigonometry for games: [FCOS](../library/fsin.bas)

