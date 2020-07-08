// ==UserScript==
// @name         is.gd auto pronouncable
// @namespace    https://github.com/Alistair1231/
// @version      0.1
// @description  auto selects 'lowercase pronouncable'
// @author       Alistair1231
// @match        https://is.gd/
// @grant        none
// @license GPL-3.0
// @copyright 2018, Alistair1231 (https://openuserjs.org/users/Alistair1231)
// ==/UserScript==

// ==OpenUserJS==
// @author Alistair1231
// ==/OpenUserJS==

// now without jquery
(function () {
  function getElementByXpath (path) {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
  }

  getElementByXpath('//*[@id="r3"]').click()
  getElementByXpath('/html/body/div[1]/div[2]/form/div[2]/input').select()
})();
