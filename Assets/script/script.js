$(function () {
  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDay);

  var currentHour = dayjs().format('H');
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });

  $('.time-block').each(function () {
    var eventId = $(this).attr('id');
    var savedEvent = localStorage.getItem(eventId);
    if (savedEvent) {
      $(this).find('textarea').val(savedEvent);
    }
  });

  $('.saveBtn').on('click', function () {
    var eventId = $(this).parent().attr('id');
    var eventText = $(this).siblings('.description').val();
    localStorage.setItem(eventId, eventText);
  });
});