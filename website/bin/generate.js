const { generateLessons } = require('./generate_lessons')
const { generateDatabase } = require('./build_database')

const generateLessonPromise = generateLessons()
const generateDatabasePromise = generateDatabase()

Promise.all([generateLessonPromise, generateDatabasePromise]).then(() => {
	console.debug('Finished')
})