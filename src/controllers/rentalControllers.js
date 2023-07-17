import Notice from "../models/notice.js";

export const rentalNoticeWrite = async (req, res) => {
  const { title, description, writer } = req.body;
  // console.log(title, description, writer)
  try {
    const notice = await Notice.create({
      title,
      description,
      writer,
      createdAt: Date.now(),
    })
    res.json({ ok: "true", notice })
  } catch (error) {
    res.json({ ok: "false", error });
  }
};

export const rentalNotice = async (req, res) => {
  try {
    const notices = await Notice.find({});
    res.json({ ok: "true", notices });
  } catch (error) {
    res.json({ ok: "false", error });
  }
};