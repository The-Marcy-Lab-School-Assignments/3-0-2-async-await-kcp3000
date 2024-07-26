export const fetchHandler = async (url, options = {}) => {
  try {
    // const fetchData = await fetch(url, options)
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(`Fetch failed with status - ${res.status}, ${res.statusText}`)

    const isJson = (res.headers.get('content-type') || '').includes('application/json');

    // const contentBody = res.body
    /** FEEDBACK: You are really close! After checking if the contentType is 'application/json' you would return it as json however if it is not, you would then turn into a text format and return that instead! */
    if (isJson) {
      const fetchData = await res.json()
      return [fetchData, null]
    }

    const text = await res.text()
    return [text, null]

    // return [data, null]

  } catch (error) {
    console.warn(error)
    return [null, error]
  }
}


//im not really understanding the last 3 test, very lost as to what i should do

/*
const fetchData = await fetch(url, options)

    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`)

    const [data, error] = await fetchHandler(fetchData)
    if (error) {
      console.error(error)
    } else {
      return data
    }


    const contentType = response.headers.get('content-type');
    if (contentType !== null && contentType.includes('application/json')) {
      const data = await response.json();
      return [data, null]
    }


  } catch (error) {
    console.warn(error)
    return [null, error]
  }
}
*/