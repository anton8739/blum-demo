export interface PostI {
    id:number,
    attributes : {
        title : string,
        subTitle:string,
        description:string,
        image: {
            data : {  attributes : {
                    url : string
                }}[]
        }
    }
}