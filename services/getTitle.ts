import axios from "axios";

export const getTitle = async () => {
    try {
        const response = await axios.get(`example.json`);
        return response.data;
    } catch(e: any) {
        return e
    };
}