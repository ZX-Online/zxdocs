# ACS

## Синтаксис

```
ACS(числовое_выражение)
```

## Описание

Возвращает значение арккосинуса для аргумента.

Аргумент должен быть числовым выражением. Возвращаемое значение будет иметь тип [float](../structure/types#float).

## Примеры

```
REM Вычисление арккосинуса
PRINT "Арккосинус a = "; ACS(a)
```
 
## Примечания

* Эта команда 100% совместима с Sinclair ZX Basic
* Если заданный тип аргумента не `float`, он будет автоматически [преобразован](cast) в `float` перед вычислением.

## Похожие команды

* [SIN](sin) и [ASN](asn)
* [TAN](tan) и [ATN](atn)
* [COS](cos)
