# Polymetro - the PWA polyrhythmic metronome

<div align="center">
<img src="https://raw.githubusercontent.com/somecho/polymetro/master/assets/overview.png" width="720">
<p><em>screenshots of mobile interface of polymetro in dark and light mode</em></p>
</div>

[Polymetro](https://polymetro.netlify.app) is a polyrhythmic metronome built as
a PWA using Vue for the frontend and Web Audio as the sound engine. The app can
only be accessed via mobile.

## Background

I designed and developed Polymetro in March of 2020, when I was learning Magnus
Lindberg's Twine. The piece is filled with polyrhythms, many of which I have
never encountered before.

<div align="center">
<img src="https://raw.githubusercontent.com/somecho/polymetro/master/assets/twine.png" width="720">
<p><em>snippet of Twine</em></p>
</div>

In order to learn these rhythms, it was necessary to *flatten* the polyrhythm
into one composite rhythm and subsequently learn it as a chunk. This wasn't
always easy when faced with a dense rhythm, like 9 against 8. To easy this
process for myself, I set out to create Polymetro.

## Development

The idea was to have a digital metronome that could play both single rhythms and
polyrhythms. Setting the desired metrum, the pulse grid would adjust itself to
visually show the number of beats per cycle.

<div align="center">
<img src="https://raw.githubusercontent.com/somecho/polymetro/master/assets/pulsegrid.png" width="720">
<p><em>screenshot of pulsegrid</em></p>
</div>

Each glyph in the pulse grid could be toggled by tapping on it, cycling between
three states: strong, weak and silent. 

The metronome is also trilingual. Clicking on the settings, a modal will appear
with the option to select between English, German and Chinese.
