import axios from 'axios'
const API_URL = "http://localhost:8080/"

const cloudinaryUpload = async (fileToUpload: string) => {
    try {
        return await axios.post(API_URL + '/Shop_sports', fileToUpload)
            .then(res => res.data)
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error);

    }
}

export default cloudinaryUpload