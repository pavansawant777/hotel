<div>
  $(document).ready(function() {'{'}
  $('.book-btn').click(function() {'{'}
  const card = $(this).closest('.card');
  card.addClass('booked');
  $(this).prop('disabled', true);
  card.find('.remove-btn').prop('disabled', false);
  alert(card.find('.card-title').text() + ' is booked.');
  {'}'});
  $('.remove-btn').click(function() {'{'}
  const card = $(this).closest('.card');
  card.removeClass('booked');
  card.find('.book-btn').prop('disabled', false);
  $(this).prop('disabled', true);
  alert(card.find('.card-title').text() + ' is removed.');
  {'}'});
  $('#check-booked-tables').click(function() {'{'}
  const bookedTables = $('.card.booked').map(function() {'{'}
  return $(this).find('.card-title').text();
  {'}'}).get().join(', ');
  if (bookedTables.length &gt; 0) {'{'}
  alert('Booked Tables: ' + bookedTables);
  {'}'} else {'{'}
  alert('No tables are booked.');
  &nbsp;{'}'}
  &nbsp;&nbsp;&nbsp;&nbsp;{'}'});
  &nbsp;&nbsp;{'}'});
</div>
