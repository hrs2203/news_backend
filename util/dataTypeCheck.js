class TypeValidator{

    isString(input_var){
        return (typeof(input_var) == String);
    }

    isInteger(input_var){
        return (typeof(input_var) == Number);
    }

    isBoolean(input_var){
        return (typeof(input_var) == Boolean);
    }

    isMap(input_var){
        return (typeof(input_var) == Map);
    }

    


}


module.exports = TypeValidator;