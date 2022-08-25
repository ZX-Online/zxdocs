# ASM

## Syntax

```
ASM
  (z80 assembler code)
  ...
END ASM
```

## Description

Starts immediate inline assembly context using standard z80 opcodes.
Use with caution.

## Examples

```
FUNCTION FASTCALL whatLetter (A as uByte) as uByte
   ASM
             JP START
   DATA:     DEFB "A Man, A Plan, A Canal, Panama"
   START:    LD HL,DATA
             LD E, A
             LD D, 0
             ADD HL, DE
             LD A, (HL)
   END ASM
END FUNCTION
```

The above function, when called with `whatLetter(<value>)` will return the `<value>`-th letter of the phrase
`"A Man, A Plan, A Canal, Panama"`.
