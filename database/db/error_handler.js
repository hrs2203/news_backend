/**
 * Custom Error Handelling Class
 * Handel error of different type
 *  1. Statis funcion
 *  2. Model Specific operation using object
 *  3. Based on Express.js Error handelling class.
 */

const ObjectId = require('mongoose').Types.ObjectId;

class CustomErrorHander{

    /// TODO: Still needs more work.
    static isValidId(input_id){
        return ObjectId.isValid(input_id);
    }

    static inValidIdResposeJson(){
        return ({
            "status": 400,
            "message": "invalid Id"
        })
    }

}

module.exports = CustomErrorHander;