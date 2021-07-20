const recentsService = require('../services/recents.service');

const recentsController = {};

recentsController.create = async function (req, res, next) {
  try {
    const newRecents = await recentsService.createRecents(req.body);
    return res.status(201).json({ newRecents });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

recentsController.getRecents = async function (req, res, next) {
  try {
    const recents = await recentsService.getRecents();
    return res.status(200).json({ status: 200, data: recents, message: 'Successfully recents retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
module.exports = recentsController;
