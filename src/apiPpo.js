import axios from "axios";

async function ApiPpo(inputText, page) {
  return await axios.get("https://swapi.dev/api/people", {
    params: {
      search: inputText,
      page: page,
    },
  });
}

//AWAIT fammi il caffe ORA!
export default ApiPpo;
