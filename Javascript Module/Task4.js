const formFields = [
    { id: 'login', value: 'john.doe' },
    { id: 'password', value: 'secret' }
]

const convertToObject = (data, idFieldName = 'id') => {
    let res = {}
    data.forEach((obj) => {
        let values = Object.values(obj)
        res[values[0]] = values[1]
    }
    )
    return res
}

const formData = convertToObject(formFields)

/**
 * {
 *   login: 'john.doe',
 *   password: 'secret'
 * }
 */
console.log(formData)

const convertToArray = (data, idFieldName = 'id') => {
    let array = []
    Object.entries(data).forEach(
        ([key, value]) => {
            array.push(
                { 'name': key, 'value': value }
            )
        }
    )
    return array
}

const backConverted = convertToArray(formData, 'name')

/**
  * [
  *   { name: 'login', value: 'john.doe' },
  *   { name: 'password', value: 'secret' }
  * ]
 */
console.log(backConverted)