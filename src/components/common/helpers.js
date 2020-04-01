/**
 * Fetches the postal address of a given location coordinate
 * @param {Number} amount the amount that is to be formatted
 * @returns {String} the formatted Naira amount
 */

export const formatMoney = amount => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

