module.exports = function makeRemoveConfigLogParameter ({ firestore }) {
  return async function removeConfigLogParameter ({ parameter_key } = {}) {
    if (!parameter_key) {
      throw new Error('You must supply a parameter key.')
    }

    const parameterToDelete = await firestore.findByParameterKey({ parameter_key })

    if (!parameterToDelete) {
      return deleteNothing()
    }

    return deleteByParameterKey({ parameter_key })
  }

  function deleteNothing () {
    return { 
      success: false,
      message: 'Parameter not found, nothing to delete.'
    }
  }

  async function deleteByParameterKey ({ parameter_key }) {
    return firestore.remove({ parameter_key })
  }
}