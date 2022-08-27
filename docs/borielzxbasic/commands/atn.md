# ATN

## Syntax

```
ATN(numericExpression)
```

## Description

Returns the arc tangent value of the given argument.

Argument must be a numeric expression. Returned value type is [float](../structure/types#Float).

## Examples

```
REM Arc tangent value
PRINT "Arc Tangent value of a is "; ATN(a)
```

## Remarks

*  This function is 100% Sinclair BASIC Compatible
*  If the given argument type is not float, it will be [converted](cast) to float before operating with it.

## See also

* [COS](acs) and [ACS](asn)
* [SIN](sin) and [ASN](asn)
* [TAN](tan)
