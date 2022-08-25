# ACS

## Syntax

```
ACS(numericExpression)
```

## Description

Returns the arc cosine value of the given argument.
Argument must be a numeric expression. Returned value type is [float](../structure/types#float).

## Examples

```
REM Arc cosine value
PRINT "Arc Cosine value of a is "; ACS(a)
```
 
## Remarks

* This function is 100% Sinclair BASIC Compatible
* If the given argument type is not float, it will be [converted](cast) to float before operating with it.

## See also

* [SIN](sin) and [ASN](asn)
* [TAN](tan) and [ATN](atn)
* [COS](cos)
