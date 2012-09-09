var Soprano = (function ($) {
  "use strict";
  // pre-cache stuff
  var $wholeNote = $(new Image()),
    $sharpNote   = $(new Image()),
    $flatNote    = $(new Image()),
    $staff       = $('#staff'),
    $correct     = $('#correct'),
    $incorrect   = $('#incorrect'),
    correct      = 0,
    incorrect    = 0,
    correctStr   = "Correct: {0}",
    incorrectStr = "Incorrect: {0}",
    self         = {};

  var loadImages = function () {
    $wholeNote.attr('src', 'images/wholenote.png').addClass('note');
    $sharpNote.attr('src', 'images/sharpnote.png').addClass('note');
    $flatNote.attr('src', 'images/flatnote.png').addClass('note');
  };

  var showNote = function (note, pos) {
    $sharpNote.hide();
    $flatNote.hide();
    $wholeNote.hide();

    switch (note) {
    case 1:
      $wholeNote.css(pos);
      $staff.html($wholeNote);
      $wholeNote.fadeIn();
      break;
    case 2:
      $sharpNote.css(pos);
      $staff.html($sharpNote);
      $sharpNote.fadeIn();
      break;
    case 3:
      $flatNote.css(pos);
      $staff.html($flatNote);
      $flatNote.fadeIn();
      break;
    }
  };

  var getNextNote = function () {
    var num = Math.floor(Math.random() * notes.length);
    showNote(notes[num].note.length, notes[num].pos);
    return notes[num].note;
  };

  var reset = function () {
    correct = 0;
    incorrect = 0;
    $correct.text(correctStr.replace("{0}", correct));
    $incorrect.text(incorrectStr.replace("{0}", incorrect));
  };

  var setupActions = function () {
    var currentNote = getNextNote();

    $('button').on('click', function () {
      // refresh case
      if ($(this).attr('id') === 'refresh') {
        reset();
        return;
      }

      if ($(this).attr('id') === currentNote) {
        correct += 1;
        $correct.text(correctStr.replace("{0}", correct));
      } else {
        incorrect += 1;
        $incorrect.text(incorrectStr.replace("{0}", incorrect));
      }
      currentNote = getNextNote();
    });
  };

  self.init = function () {
    loadImages();
    setupActions();
  };

  return self;
}(jQuery));
