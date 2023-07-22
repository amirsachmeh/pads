function ProfileCard({title,handle,image,alt}) {
    return (
        <div>
            <img  src={image} alt= {alt}/>
            <div>Title is {title}</div>
            <div>Title is {handle}</div>
        </div>
    )

}

export default ProfileCard ;