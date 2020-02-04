export const login = (req, res) => {
    let user = req.user;
    let token = user.createToken();
    return res.status(200).json({user, token});
}