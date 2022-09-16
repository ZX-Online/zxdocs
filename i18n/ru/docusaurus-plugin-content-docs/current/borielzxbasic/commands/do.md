# DO ... LOOP

**DO** ... **LOOP** это _составной_ оператор, используемый для выполнения циклов. Код внутри **DO ... LOOP** будет повторяться, если заданное условие _истинно_. Цикл выполняется по крайней мере один раз, если условие цикла записано в конце, даже если заданное _условие_ ложно на первой итерации.

## Синтаксис

Конструкция **DO** ... **LOOP** очень мощная и может быть использована в 5 различных ситуациях:

### "Вечные" циклы

Sometimes we want a loop to repeat forever, no matter what, because we need to exit the loop when an external event happens. For example, we want to repeat forever waiting for a key press. Traditionally we use GOTO for this in Sinclair BASIC. Other languages use WHILE (1), etc. The best way to do this in ZX BASIC is this one:

Иногда мы хотим, чтобы цикл повторялся вечно, независимо ни от чего, потому что нам нужно выйти из цикла, когда произойдет внешнее событие. Например, мы хотим вечно повторять цикл в ожидании нажатия клавиши. Традиционно в Sinclair ZX Basic для этого используется `GOTO`. В других языках используется `WHILE (1)` и т.д. Лучший способ сделать это в Boriel ZX Basic - вот этот:

```
DO
    [<какой-то код>]
LOOP: REM Этот цикл будет выполняться вечно
```

Этот код **выполняется вечно**. Лучше всего использовать именно такой код вместе использования, например, `STEP 0` в цикле `FOR`, или цикл `WHILE 1`. Сгенерированный машинный код получается наиболее эффективным.

### Цикл UNTIL

```
DO
    [<какой-то код>]
LOOP UNTIL <условие>
```

Этот цикл повторяется до тех пор, _пока_ не будет выполнено заданное условие. Цикл гарантированно выполнится хотя бы один раз независимо от условия выхода из цикла - оно оценивается только в конце первого прохода цикла.

Вы также можете поместить условие в начало таким образом:

```
DO UNTIL <условие>
    [<какой-то код>]
LOOP
```

В этом случае сначала проверяется условие, и программа не переходит к выполнению вложенных инструкций, если условие в начале не выполнено.

#### Пример использования UNTIL

Пример: _Выполнять цикл до тех пор, пока пользователь не нажмёт кнопку_

```
REM Код в одну строку!
DO LOOP UNTIL INKEY$ <> ""
```

### Цикл WHILE

```
DO
    [<какой-то код>]
LOOP WHILE <условие>
```

This form repeats _while_ the given condition is true.

The difference with the [WHILE](while) sentence is the latter won't execute the inner sentences if _condition_ is false at the start. Remember: **DO**...**LOOP** will execute _sentences_ at least once regardless of the condition upon entry to the loop - it is only evaluated at the end of the first loop.

You can also put the condition at the beginning, this way:

Этот цикл повторяется до тех пор, пока заданное условие _истинно_.

Разница с конструкцией [WHILE](while) в том, что последнее не будет выполнять вложенный код, если условие в начале _ложно_. Запомните: **DO**...**LOOP** выполнит вложенный код по крайней мере один раз независимо от условия при входе в цикл - оно оценивается только в конце первого цикла.

Вы также можете поместить условие в начало, таким образом:

```
DO WHILE <условие>
    [<какой-то код>]
LOOP
```

В этом случае сначала проверяется условие, и программа не переходит к выполнению вложенного кода, если условие в начале не выполнено.

#### Пример использования WHILE

Пример: _Выполняем цикл пока никакая кнопка не нажата_

```
REM Код в одну строку!
DO LOOP WHILE INKEY$ = ""
```

## Примечания

* Эта конструкция отсутствует в Sinclair Basic.
* **WHILE** может быть использован также в конструкции цикла [WHILE ... END WHILE](while).

## Смотрите также

* [IF ... END IF](if)
* [WHILE ... END WHILE](while)
* [FOR ... NEXT](for)
* [EXIT](exit)
* [CONTINUE](continue)