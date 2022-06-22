"use strict";

const Joi = require("joi");
const {validate} = require("../helpers");

exports.validate = (payload) =>{
    const schema = {
        email: Joi.string().
        email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
        password: Joi.string().required()
    };
    return validate(schema,payload);
};