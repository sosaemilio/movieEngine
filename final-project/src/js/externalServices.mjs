const applicationKey = import.meta.env.VITE_APPLICATION_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;

function convertToJson(res) {
  let jsonResponse  = res.json();

  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: 'servicesError', message: jsonResponse };

  }
}

export async function getMoviesByTitle(movieTitle) {
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${movieTitle}&country=us&show_type=movie`;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': `${applicationKey}`,
            'X-RapidAPI-Host': `${rapidApiHost}`
        }
    };

    try {
        const response = await fetch(url, options);
        console.log
        const data = await convertToJson(response);
        console.log(data);
        return data.result;
    } catch (error) {
        console.error(error);
    }
}

export async function findMovieById(imbdId) {
  const url = `https://streaming-availability.p.rapidapi.com/v2/get/basic?country=us&imdb_id=${imbdId}&output_language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${applicationKey}`,
      "X-RapidAPI-Host": `${rapidApiHost}`
    }
  };
  try {
    const response = await fetch(url, options);
    const movie = await convertToJson(response);
    console.log(movie);
    return movie.result;
  } catch (error) {
    console.error(error);
  }
}