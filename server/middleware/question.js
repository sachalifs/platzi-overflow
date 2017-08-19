const question = {
  _id: 1,
  title: '¿Cómo reutilizo un componente en Android?',
  description: 'Miren esta es mi duda...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    email: 'sacha@platzi.com',
    password: '123456',
    firstName: 'Sacha',
    lastName: 'Lifszyc'
  }
}

export const questions = new Array(10).fill(question)

export const questionMiddleware = (req, res, next) => {
  const { id } = req.params
  req.question = questions.find(({ _id }) => _id === +id)
  next()
}

export const questionsMiddleware = (req, res, next) => {
  req.questions = questions
  next()
}
