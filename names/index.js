const peopleNames = require('..country/state/city/index.js')
const getFirstNames = require('..utilities/utils/index.js')

const getPeopleInCity = peopleNames => {
  const firstNameList = getFirstNames(peopleNames)
  return firstNameList
}

module.exports = getPeopleInCity

// getPeopleInCity(peopleNames)
// closole.log(firstNameList)
