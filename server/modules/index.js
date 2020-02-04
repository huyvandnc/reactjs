import localRoute from './auth/routers/local.router';
import userRoutes from './users/routers/user.router';
export default app => {
    app.use('/api/v1', localRoute);
    app.use('/api/v1', userRoutes);
};