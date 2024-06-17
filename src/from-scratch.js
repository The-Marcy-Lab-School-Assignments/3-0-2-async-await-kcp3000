export const fetchHandler = async (url, options = {}) => {
  try {
    // const fetchData = await fetch(url, options)
    const [data, error] = await fetch(url, options)

    const fetchData = await res.json()

    if (!res.ok) throw new Error(`Fetch failed with status - ${res.status}, ${res.statusText}`)
    const contentType = res.headers.get('content-type')
    const contentBody = res.body

    if (!contentBody) {
      return res.text()
    } else if (contentType.includes('application/json')) {
      return fetchData
    }

    return [data, null]

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