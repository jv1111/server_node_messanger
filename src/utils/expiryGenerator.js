const expireInYears = (numOfYears) => {
    const expires = new Date();
    expires.setHours(expires.getHours() + numOfYears); // Token expires after 1 year
    return expires
}

const expireInMonths = (numOfMonths) => {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + numOfMonths); // Token expires after the specified number of months
    return expires;
}

const expireInHours = (numOfHours) => {
    const expires = new Date();
    expires.setHours(expires.getHours() + numOfHours); // Token expires after the specified number of hours
    return expires;
}

const expireInMinutes = (numOfMinutes) => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + numOfMinutes); // Token expires after the specified number of minutes
    return expires;
}

const expireInSeconds = (numOfSeconds) => {
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + numOfSeconds); // Token expires after the specified number of seconds
    return expires;
}

module.exports = {
    expireInYears,
    expireInMonths,
    expireInMinutes,
    expireInHours,
    expireInSeconds
}