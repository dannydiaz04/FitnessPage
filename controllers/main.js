module.exports.index = async (req, res) => {
    res.render('main/index');
};

module.exports.fat_loss_page = async (req, res) => {
    res.render('main/fat_loss');
};

module.exports.workouts_page = async (req, res) => {
    res.render('main/workouts');
};