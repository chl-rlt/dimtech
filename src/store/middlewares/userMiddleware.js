const userMiddleware = (store) => (next) => (action) => {
 console.log('je suis le user Middleware')
 next(action)
}

export default userMiddleware