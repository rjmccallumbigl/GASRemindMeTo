// Set Google Calendar reminders for x days every day starting tomorrow.

function remindMeTo() {
  
  //  Declare variables
  var start = 1;
  var count = 49;  //  Get total count of days you want to be reminded. WARNING: too many and you will be throttled
  var calendar = CalendarApp.getDefaultCalendar();
  var now = new Date();  
  
  var MILLIS_PER_HOUR = 1000 * 60 * 60;
  var MILLIS_PER_DAY = MILLIS_PER_HOUR * 24;  
  
  // Creates an event every x day
  //  for (var multiplier = start; multiplier < count; multiplier++){
  for (var multiplier = start; multiplier <= 3; multiplier++){
    
    var event = calendar.createEvent('Enter Event Title Here: #' + multiplier,
                                     new Date(now.getTime() + MILLIS_PER_DAY*multiplier),
      new Date(now.getTime() + MILLIS_PER_DAY*multiplier + MILLIS_PER_HOUR))
      .setDescription("Enter description here!");  
  }
}
