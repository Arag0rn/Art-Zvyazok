export const updateUserTimestampsMiddleware = (store) => (next) => (action) => {
    if (action.type === 'user/addUser') {
      const user = action.payload;
      const now = Date.now();
      user.createdAt = now;
      user.updatedAt = now;
    }
    return next(action);
  };