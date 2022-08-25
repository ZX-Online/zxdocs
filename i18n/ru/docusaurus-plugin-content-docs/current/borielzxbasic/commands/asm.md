# ASM

## Синтаксис

```
ASM
  (ассемблерный код для z80)
  ...
END ASM
```

## Описание

Ассемблирует содержимое как код z80 и вставляет результат ассемблирования непосредственно в программу.

Используйте с осторожностью.

## Примеры

```
FUNCTION FASTCALL whatLetter (A as uByte) as uByte
	ASM
			JP START
	DATA:	DEFB "A Man, A Plan, A Canal, Panama"
	START:	LD HL,DATA
    		LD E, A
    		LD D, 0
    		ADD HL, DE
    		LD A, (HL)
	END ASM
END FUNCTION
```

Вышеприведённая функция, вызванная через `whatLetter(<value>)` вернёт `<value>`-й по счёту символ из фразы `"A Man, A Plan, A Canal, Panama"`.
