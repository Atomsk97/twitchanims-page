import Anim from "../models/Anim.js";

export const getAnims = async (req, res) => {
  try {
    const anims = await Anim.find().sort({ title: 1 });

    res.send(anims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAnim = async (req, res) => {
  try {
    const anim = await Anim.findById(req.params.id);

    if (!anim) return res.sendStatus(404);
    res.json(anim);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};