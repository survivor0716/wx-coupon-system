(function() {
  'use strict';

  angular
    .module('wxCouponSystem')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
