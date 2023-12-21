import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSearch = ({ Images, setImages }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1)
    }, [searchTerm])

    async function fetchImages(e, flag) {
        if (e) {
            e.preventDefault()
        }
        try {
            const response = await axios.get("https://api.unsplash.com/search/photos", {
                headers: {
                    "Accept-Version": "v1",
                    "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                },
                params: {
                    query: searchTerm,
                    per_page: 5,
                    page: page

                }
            })

            if (flag == "submit") {
                setImages(response.data.results)
            } else {
                setImages([...Images, ...response.data.results])
            }
            setPage(page + 1)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="search-section">
            <h1>Image Bazzar</h1>
            <form onSubmit={(e) => fetchImages(e, "submit")}>
                <input type="text" placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button className="btn" type="submit">Search</button>
            </form>
            <button onClick={fetchImages}>Next</button>
        </div>
    )
}

export default ImageSearch