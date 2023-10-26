const tryCatchController = (controller) => {
    return async (req,res,next) => {
        try {
            await controller(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

const tryCatchService = async (serviceFunction, ...args) => {
    try {
      const result = await serviceFunction(...args);
      return result;
    } catch (error) {
      console.error(error);
      // You can also return the error, throw it, or handle it in any other way you see fit
      return { error: error.message };
    }
};

module.exports = {
    tryCatchController,
    tryCatchService
}