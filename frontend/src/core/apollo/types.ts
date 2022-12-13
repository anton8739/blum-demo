import {PostI} from "../../types";

export interface GetPostsResponse {
    posts: {
        data: PostI[]
    }
}