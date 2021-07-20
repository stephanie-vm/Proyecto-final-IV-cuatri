const Recents = require('../models/recents.model');

const recentsService = {};

recentsService.createRecents = async function ({ nameList, userId, songsList }) {
  try {
    const recents = new Recents({ nameList, userId, songsList });
    const newRecents = await recents.save();
    return newRecents;
  } catch (e) {
    throw new Error('Error while save recents');
  }
};

recentsService.getRecents = async function () {
  try {
    const listRecents = await Recents.find({});
    return listRecents;
  } catch (e) {
    throw new Error('Error while Paginating recents list');
  }
};
module.exports = recentsService;
