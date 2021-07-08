import {gql} from "@apollo/client";

function golfClubQuery() {
    const golfClubQuery = gql`query Fetch($pagination: PaginationArgs! $filters:FilterArgs) {
        paginateGolfClubModels(pagination: $pagination filters: $filters) {
            content {
                id
                name
                description
                retailPrice
                avatar
            }
            pagination {
                pageSize
                totalPages
            }
        }
    }`

    return golfClubQuery;
}

export default golfClubQuery()