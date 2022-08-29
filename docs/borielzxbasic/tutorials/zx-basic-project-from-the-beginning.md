
# HOWTO: ZX Basic Project from the beginning

This page is dummy. Original  is located <a href="https://docs.google.com/document/pub?id=1vUneCCC18oXLglzoRcJdrMDUSh7vaO_tGDjzjOc8IhU">here</a>.

UPDATE: Even though the Tutorial is not complete (and may never be); the end game was released.

You can grab it, and the source code, from http://www.worldofspectrum.org/infoseekid.cgi?id=0027713

# How to Write a Game in Boriel’s ZX Basic (Project from the very beginning!)

So, you think you’re a competent Sinclair Basic programmer, but feel that machine code on the humble speccy is still too much for you? Is there something you can do to get basic running faster?

Luckily the answer is yes. There are a few tools out there that will help you write machine code without actually having to write the machine code, and they are called compilers.

A compiler lets you write in what’s called a high level language (BASIC is an example of a high level language), and then translates that code (programmers say it compiles it) into machine code.

You can write in a cut-down, limited version of BASIC on the spectrum, and then get it to compile your code. If you want to do this, I’d recommend using Hisoft’s BASIC compiler. It’s definitely the best one out there for general use.

You can write in C, if you know that language. There’s a cross compiler called z88dk which has been used by several people to create some good games.

The third option is a compiler called “ZX Basic”, written by Jose Rodriguez (Aka “Boriel”). He’s thinking of changing the name, partly because people get confused between ZX Basic and Sinclair Basic, and partly because he wants to extend the compiler to other computers besides the ZX Spectrum 48K.

It’s worth mentioning that you could eschew compilers altogether and write games using Jonathan Cauldwell’s excellent arcade games designers, Shoot Em Up Designer (SEUD), Platform games Designer (PGD)  and Arcade games Designer (AGD). You can think of these as games engines that need less programming, in a similar way to Quill, Graphics Adventure Creator (GAC) and Professional Adventure Writer (PAW) are games engines for text adventures.

Because this guide is targeted at Sinclair Basic users, and it’s 2012; so we ought to acknowledge there are cross-compilation tools available, I’m going to attempt to fully document a project written completely in ZX Basic. The project of choice is a simple Pac Man clone. This is not really a complex game to program, which should mean that it’s easy to follow along.

All right. Enough chat. Let’s start with the simplest Sinclair Basic Program:

```basic
10 PRINT "Hello world"
```

How would we translate that into ZX Basic, and then machine code?

Well, the ZX Basic code could be:

```basic
10 PRINT "Hello world"
```

This is going to be easy isn’t it!? Look - no differences! It’s true that ZX Basic was written with an eye to being fairly compatible with Sinclair Basic. So quite a few programs will translate across with only a small number of changes. Occasionally no changes at all.

However ZX Basic is far more powerful. It’s also capable of being used as a modern version of Basic, with many design elements deliberately made as similar as possible to FreeBasic ( http://en.wikipedia.org/wiki/FreeBASIC if you want to look that up).

For starters, Line numbers are optional, and in fact don’t have the same meaning in ZX Basic as they do in Sinclair Basic. Our program could be written without:

```basic
PRINT "Hello world"
```

ZX Basic runs from top to bottom of your basic code, just like Sinclair basic, but even without numbering the lines. If you think about it, line numbers in zx basic are for putting the code in order and for jumping to with goto, gosub and so forth. If you aren’t jumping to a line of code, why would it need a line number - especially if we can use a better editor to move code around. If you’re reading this, there’s a good chance you have a better text editor on your computer right there already (probably even if it’s just notepad).

 In fact, ZX Basic uses line numbers as labels. It doesn’t require them to be in order. It would be perfectly valid in ZX Basic, to have a program that reads:

```basic
20 PRINT "Hello ";

10 PRINT "World"
```

Sinclair Basic wouldn’t like that - it would try to reorder it. ZX Basic just goes with the flow - and it would  run from top to bottom still, printing “Hello World”. The order of the line numbers doesn’t matter - and in fact, as we’ll see later, it’s better to use more descriptive labels.

How then do we write and compile ZX BASIC? First thing, download ZX Basic from http://www.boriel.com/wiki/en/index.php/ZX_BASIC:Archive

You should download the latest version. You should also make sure you look in the forums at Jose’s website boriel.com - it’s a good place to ask questions when you get stuck. (Not If. You will get stuck! We all do!)

You can compile a zx basic program from the command line with

zxb game.bas  [Assuming your text file is called “game.bas”]

But you might make life easier by adding some options:

```sh
zxb -T -B -a game.bas
```

The `-B` option says make a BASIC loader to load the program automatically.

The `-T` option says make a TZX file, which you can load straight into an emulator.

Finally, -a says make it an autorunning file.

Why this is good is that if you have an emulator that automatically runs a .tzx, it’s a matter of just clicking on or running the file to wrap it up in an emulator and go. This makes testing your programs very quick and easy.

There are two good options for tools to make this simpler, however. The first is TommyGun, which is a retro game development environment that supports ZX Spectrum games development.

Rather than write up how to get Tommygun to play nicely with ZX Basic, I’m going to refer to the guide Boriel put together, which should be here:

http://www.boriel.com/forum/how-to-tutorials/making-zx-basic-to-work-with-tommy-gun-t329.html

The second good option is BorIDE, by Leszek Chmielewski (Aka “LCD”). This was specially designed to work as an editor for ZX Basic, and you can get it from http://members.inode.at/838331/index.html

Remember though that anything that makes a standard text file will do nicely. Linux text editors are just as great. Windows notepad is too. Though I have to recommend the editors I mention above - they can highlight the syntax for you, which makes it far easier to read.

# Designing the game.

If you’re going to write code, the most important thing you can do is begin by NOT writing code. It’s very important to think about what you are doing, and how you are going to make it work first.

For example - let’s think about the screen a bit. This is the original pac-man screen:

![Pac-Man_Galaxian_Screen](/img/Pac-Man_Galaxian_Screen.png)

The first thing to notice, is that it’s the wrong way around! A spectrum runs on a TV screen that’s usually mounted wider than it is tall - in the ratio 4:3. Pac man machines had the TV turned on its side. So, how do we proceed?

Well, we can urge the player to turn the TV sideways, I suppose. But that’s not really practical. That leaves us with two practical options. We can turn the map sideways on the screen, and accept that, or we can redesign it somewhat in the constraints of our screen.

For the purposes of this guide, I have to choose one. I’m not writing a choose your own adventure here! So, we’ll redesign this to fit in 256 pixels wide, by 192 pixels high. This has been done before, and worked quite well. We’ll have to stretch it a little wider, though, and do a bit of vertical compression..

We’re going to need a memory structure for the screen display. An array will probably be fine, if we’re blocking this out. We’ll have a subroutine that displays the screen then. Backing up, before that we’ll need a subroutine that sets up our graphics!

In ZX Basic, subroutines are defined with the SUB command. They are named procedures that you can call later. They are also modules - and worth noting that they are very reusable. You can steal a sub (or a function) from another program, and it should work as a plug in item. This makes the ability to re-use code between projects far higher. In fact, in the wiki at Boriel.com, you’ll find a library of such modules that you can use in your own programs. Perhaps you’ll even want to add some of your own to it!

We also need to design some graphics. Here’s the shopping list:



Pac Man Left view

Pac Man Right view

Pac Man Up View

Pac Man Down View

Ghost (We’ll cheat and use the same one)

Dot

Power Pill

Horizontal Wall

Vertical Wall

Bottom Left Wall Corner

Bottom Right Wall Corner

Top Left Wall Corner

Top Right Wall Corner

Top End of Wall

Bottom End of Wall

Left End of Wall

Right End of Wall

Wall T junction Left

Wall T junction Right

Wall T Junction Up

Wall T junction Down

Ghost Box Gate

If we’re going for more detail, we’ll also need:

Multiple frames of Pacman Dying

Various Fruit bonuses.

That’s a lot of wall graphics! It’s also definitely going to run over the 21 graphic UDG limit. So we are going to have to be a bit clever there.

I think the smart split would be background and animated items - we don’t need to be drawing walls and pacman at the same time, so if we have two banks of UDG, we’re home free. We can swap them out by changing the UDG system variable (which says where in memory we have our UDG graphics).  

It’s much easier, in ZX Basic, to put the data into the program, and then point the UDG system variable to that location than it is to have a UDG poking loop.

Doing UDG in ZX Basic is something that I think is easier than doing it in Sinclair Basic - but there are some traps to be wary of. So, I’m going to start with a tough subject here, in the hope it will be useful to people new to ZX Basic, but who are familiar with many of the concepts, perhaps from using freebasic.

A basic program that pokes UDG from a DATA statement is hideously inefficient. First, the udg byte numbers in the data statements are stored in an inefficient way - they take up five bytes per number. Secondly, when you loop through them to poke them into the UDG area, you make yet another copy in memory - it’s in the basic program as well as in the UDG area.

Because ZX Basic is based on machine code, we can just keep the code in the native bytes format, and then point the UDG variable at it.

Which means, scary as it seems, we’re going to be doing raw machine code bytes right off. Sort of. Don’t worry - I’ll hold your hand, and it’s really quite simple when you get the hang of it.

I’m not going to teach you to design UDG. If you need help here, start with Chapter 14 of the ZX Spectrum manual:

http://www.worldofspectrum.org/ZXBasicManual/zxmanchap14.html

If I was doing this in Sinclair Basic, I’d probably do something like (for just one graphic):

10 FOR n=USR “A” to USR “A”+7

20 READ a: POKE n,a

30 NEXT n

40 DATA 0,0,0,24,24,0,0,0 : REM Dot

But ZX Basic doesn’t support Data statements - it doesn’t need to. It’s much more efficient at putting data into memory: Store it directly in the machine code.

We’re going to have a subroutine that sets up the UDG to be either bank 0 or bank 1 depending if we want to draw the initial maze, or draw the animated characters in it.

Subroutines

A subroutine is defined by the reserved word “SUB” and lasts until we close it off with “END SUB” If you are familiar with named procedures (perhaps from BBC basic), it’s the same idea.

So, say you wanted a hello world subroutine. You could do it like this:

```
SUB helloWorld ()

   PRINT “Hello World”

END SUB
```

By itself, this isn’t much of a program - it defines a subroutine, but it doesn’t run it. It’s a bit like having a DEF FN in Sinclair basic (and we’ll talk about how ZX Basic defines functions later). It doesn’t actually run - it sets up something you call later.

The brackets are for parameters - in this case helloWorld doesn’t have any. We’ll get to that bit in a moment.

How do you actually print your hello world then? Just call the Sub by name:

helloWorld()

So to print Hello World a couple of times we could have, as the full program:

SUB helloWorld ()

   PRINT “Hello World”

END SUB

helloWorld()

helloWorld()

Isn’t that much nicer than “GOSUB 9000” ? ZX Basic absolutely supports Gosub and Goto, but modern programmers will frown upon using goto, and you can write absolutely any program in ZX Basic without using Goto. In a way, you’re redefining the language with your own
