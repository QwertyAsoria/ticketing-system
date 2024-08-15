import axios from "axios";


export function update_ticket_status_service(data) {
    try {
        const res = axios.put("/api/update_ticket_status/"+data.ticket_id, data);
        return res;
    } catch (error) {
        return error;
    }
}

export function create_ticket_service(data) {
    try {
        const res = axios.post("/api/ticket", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_ticket_service(data) {
    const search = window.location.search
    try {
        const res = axios.get("/api/ticket"+search);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_ticket_by_id_service() {
    const ticket_id =window.location.pathname.split('/')[3]
    try {
        const res = axios.get(`/api/ticket/${ticket_id =='tickets'?window.location.pathname.split('/')[4]:ticket_id}`,window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}
export function get_ticket_by_user_id_service(id) {
    try {
        const res = axios.get(`/api/get_ticket_by_user_id/${id??window.location.pathname.split('/')[3]}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export function update_ticket_by_id_service(data) {
    try {
        const res = axios.put(`/api/ticket/${data.id}`,data);
        return res;
    } catch (error) {
        return error;
    }
}