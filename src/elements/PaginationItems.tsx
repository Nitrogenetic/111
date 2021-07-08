import React, {useContext, useEffect, useState} from 'react';
import {gql, useQuery, ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import Pagination from "./Pagination";
import {cache} from "@cache";

function PaginationItems(props) {
    const query = gql`query Fetch($pagination: PaginationArgs! $filters:FilterArgs) {
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
    const [page, setPage] = useState(1)
    const {data, error} = useQuery(query, {
        variables: {pagination: {page: page, pageSize: 12}}
    })

    const [ minPrice, maxPrice ] = props

    // useEffect(()=>{
    //     return(
    //         <div>Типо Кеш: {Array.from(cache.data.data).map(item=>{
    //             return (
    //                 <div>{item}</div>
    //             )
    //         })}</div>
    //     )
    // },[])

    const filterQuery = gql`
        query pagination ($pagination: PaginationArgs!) {
            paginateGolfClubModels(pagination: $pagination) {
                content {
                    id
                    name
                    retailPrice
                }
            }
        }
    `
    const { filter } = cache.data.data.readQuery({
        query: filterQuery,
        variables: {
            pagination: {
                page: 1,
                pageSize: 12
            }
        }
    })

    console.log("Аполло Кеш: ", filter.paginateGolfClubModels.content.name)

    if (!data) return null;
    return (
        <div className={"PaginationPage"}>
            <div className={"golfItems"}>
                {data.paginateGolfClubModels.content.map(item => {
                    const {id, name, description, retailPrice, avatar} = item
                    return (
                        <div key={id} className={"golfItem"}>
                            <img src={"//hotcakegolf.brightlab.solutions/" + avatar} alt=""/>
                            <p className="golfItemName">{name}</p>
                            <p className="golfItemDescription">{description}</p>
                            <p className="golfItemPrice">${retailPrice}</p>
                        </div>
                    )
                })}
            </div>
            <Pagination
                current={page} // и отправить current={page} в PaginationItems в {pagination: {page: 1, pageSize: 12}}
                totalPages={data.paginateGolfClubModels.pagination.totalPages}
                onClick={setPage}
            />
        </div>
    );
}

export default PaginationItems;