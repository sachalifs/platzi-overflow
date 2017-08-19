export function handleError(error, res) {
  res.status(500).json({
    message: 'An error occurred',
    error
  })
}
