import axios from "axios";

async function ApiPpo(inputText) {
  return await axios.get(`https://swapi.dev/api/people?search=${inputText}`);
}
//AWAIT fammi il caffe ORA!
export default ApiPpo;
