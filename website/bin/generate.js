const { generateLessons } = require('./generate_lessons')
const { generateDatabase } = require('./build_database')

generateLessons().then(() => {
	generateDatabase()
})