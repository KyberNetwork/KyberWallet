
const loadAll = false
const defaultLanguage = 'en'
const otherLang = ['vi', 'fr']

const supportLanguage = [defaultLanguage, ...otherLang]

const defaultAndActive = [defaultLanguage, 'active']
module.exports = { supportLanguage, defaultLanguage, loadAll, defaultAndActive, otherLang }