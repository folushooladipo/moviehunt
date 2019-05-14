import * as superagent from "superagent"

const REQUEST_TIMEOUT = 60000

export default function apiCaller() {
    return dispatch => {
        return (action): Promise<any> => {
            const apiCall: ApiCall = action.apiCall
            if (!apiCall) {
                return Promise.resolve(dispatch(action))
            }

            const actionType = action.type
            dispatch({
                type: `${actionType}_PENDING`
            })

            const requestPromise = new Promise((resolve, reject) => {
                const httpMethod = apiCall.method || "GET"
                let request = superagent[httpMethod.toLowerCase()]
                if (!request) {
                    return reject(new Error(`"${httpMethod}" is not an HTTP method we know of.`))
                }

                const url = apiCall.url
                switch (httpMethod) {
                    case "POST":
                    case "PUT":
                        request = request(url).send(action.payload)
                        break

                    default:
                        request = request(url).query(apiCall.query)
                        break
                }

                request
                    .timeout(REQUEST_TIMEOUT)
                    .end((err, res) => {
                        if (res && res.ok) {
                            return resolve(res.body)
                        }

                        return reject(err)
                    })
            })

            return requestPromise
                .then((requestResult => {
                    const payload = action.payload ?
                        { ...action.payload, ...requestResult } :
                        requestResult
                    dispatch({
                        ...action,
                        payload
                    })
                }))
                .catch(error => {
                    dispatch({
                        type: `${ actionType }_FAILURE`,
                        error
                    })
                })
        }
    }
}
