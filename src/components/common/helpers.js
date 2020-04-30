/**
 * Fetches the postal address of a given location coordinate
 * @param {Number} amount the amount that is to be formatted
 * @returns {String} the formatted Naira amount
 */

export const formatMoney = amount => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

/**
 * Filters an array of objects by custom predicates.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Array}
 */
export const filterArray = (array, filters) => {
    const filterKeys = Object.keys(filters);
    // validates all filter criteria
    return array.filter(item => filterKeys.every(key => {
        if (typeof filters[key] !== 'function') return true;
        // ignores empty filters
        if (!filters[key].length) return true;
        return filters[key](item[key]);
    }));
};
