import axiosClient from "./axiosClient";
import axios from "axios";


const PostApi = {
    getAll(params, ourRequest = false) {
        const url = "/posts";
        if(ourRequest) {
            return axiosClient.get(url, {
                params,
                cancelToken: ourRequest.token
            })
        } else {
            return axiosClient.get(url, {
                params
            })
        }
    },
    getId(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    }


}

export default PostApi;