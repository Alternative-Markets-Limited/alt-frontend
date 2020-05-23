/**
 * Fetches the postal address of a given location coordinate
 * @param {Number} amount the amount that is to be formatted
 * @returns {String} the formatted Naira amount
 */

export const formatMoney = amount => {
    if (typeof (amount) === 'number') {
        return amount.toLocaleString();
    }
    return 'Invalid Amount';
};

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

/**
 * Filters an array of objects by custom predicates.
 *
 * @param  {Array}  userProperties: the array of users orders
 * @param  {Object} propertyToBuy: an object of the property to buy
 * @param  {Number} maxFraction: the max number of fractions users can buy
 * @return {Number}
 */
export const determineMaxFraction = (userProperties, propertyToBuy, maxFraction) => {
    // check if the user has bought property before
    const existingProperty = userProperties.find(
        userProperty => String(userProperty.property_id) === String(propertyToBuy.id)
    );
    // if user has property add up all the fractions quantity bought
    if (existingProperty) {
        const properties = userProperties.map(userProperty => {
            if (String(userProperty.property_id) === String(propertyToBuy.id)) {
                return userProperty.fractions_qty;
            }
            return undefined;
        });
        const totalFractions = properties.reduce((acc, val) => acc + (val || 0), 0);
        const remFractions = maxFraction - totalFractions;
        if (remFractions >= propertyToBuy.tokens) {
            return propertyToBuy.tokens;
        }
        return remFractions;
    }
    if (maxFraction >= propertyToBuy.tokens) {
        return propertyToBuy.tokens;
    }
    return maxFraction;
};

/**
 * Filters an array of objects by custom predicates.
 *
 * @param  {Object}  state: the object to compare with
 * @param  {Object} formValues: the object to compare
 * @return {Object}
 */
export const detectChangedFields = (state, formValues) => {
    const changedData = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formValues)) {
        if (state[key] !== formValues[key]) {
            changedData[key] = value;
        }
    }
    return changedData;
};
