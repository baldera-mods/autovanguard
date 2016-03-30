module.exports = function AutoVanguard(dispatch) {
  dispatch.hook('sCompleteEventMatchingQuest', function(event) {
    dispatch.toServer('cCompleteDailyEvent', { id: event.id });
  });
};
