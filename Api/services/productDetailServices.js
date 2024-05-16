exports.checkDuplicateDetail = async (model, body, productId) => {
    const {ram, rom, color} = body;
    return model.findOne({productId, ram, rom, color });
}