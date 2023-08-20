module.exports = function makeConfigLogParameter ({
    parameter_key,
    value,
    description
  } = {}) {

    // Parameter Key conditions
    if (!parameter_key) {
      throw new Error('Parameter must have a name as Parameter Key.');
    }
    if (typeof(parameter_key) !== "string") {
      throw new Error('Parameter Key must be a string.');
    }

    // Value restrictions
    if (!value) {
      throw new Error('Parameter must have a value.');
    }

    // Description restrictions
    if (!description) {
      throw new Error('Paremeter must have a description');
    }
    if (typeof(description) !== "string") {
      throw new Error('Description must be a string.');
    }

    return Object.freeze({
      getParameterKey: () => parameter_key,
      getValue: () => value,
      getDescription: () => description
    });
  };
