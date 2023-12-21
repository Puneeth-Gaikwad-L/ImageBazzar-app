
const ImageList = ({Images}) => {
    

    return (
        <div>
            {
                Images.map(value => (
                    <img
                        src={value.urls.small}
                        alt={value.alt_description}
                    />
                ))
            }
        </div>
    )
}

export default ImageList;