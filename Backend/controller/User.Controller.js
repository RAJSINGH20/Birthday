import User from "../model/user.model.js";
export const registerUser = async (req, res) => {
  try {
    const { username } = req.body;
    const image = req.file;
    if (!username || !image) {
      return res.status(400).json({
        message: "Username and image are required",
      });
    }
    const user = await User.create({ username, image: image.filename, }); res.status(201).json({ success: true, user });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
