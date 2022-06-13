"use strict";

const userService = require("../services/UserService");
const response = require("../utils/responses");

exports.createAsync = async (req, res) => {
    const {
        error,
        data,
        statusCode
    } = await userService.createAsync(req.body);

    if (error) return response.error(res, error, statusCode);

    return response.success(res, data, statusCode);
};