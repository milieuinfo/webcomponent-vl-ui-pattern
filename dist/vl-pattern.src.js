
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';
import '@govflanders/vl-ui-pattern/dist/js/pattern.js';

/**
 * Gebruik de pattern mixin in combinatie met een input field om de gebruiker te verplichten om informatie in een bepaald formaat op te geven.
 * @mixin vlPattern
 *
 * @param {Object} SuperClass
 * @return {Object}
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-pattern/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-pattern/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-pattern.html|Demo}
 */
export const vlPattern = (SuperClass) => {
  return class extends SuperClass {
    /**
     * Wacht tot de pattern initialisatie klaar is.
     *
     * @return {Promise}
     */
    static awaitUntilReady() {
      return awaitUntil(() => window.vl && window.vl.pattern);
    }

    /**
     * Initialiseer de pattern.
     *
     * @param {HTMLElement} element
     */
    dress(element) {
      vl.pattern.dress(element);
    }
  };
};

