import localRoute from './auth/routers/local.router';
import userRoutes from './users/user.routes';
export default app => {
    app.use('/api/v1/auth', localRoute);
    app.use('/api/v1/users', userRoutes);
};