import axios from "axios";

export const createEvent = async (body,token) => {
    const {date,quantity} = body;
    let newBody = []
    if (new Date(date) <= new Date()) {
        newBody = {...body,assistance:quantity}
    } else {
        newBody = {...body,estimate:quantity}
    } 
    delete newBody.quantity;
    try {
        const response = await axios.post("http://localhost:3000/api/events",newBody,{
            headers: { Authorization: token}
        });
        return response;
    } catch (error) {
        return error
    }
}