import React from 'react'

export const Feed = () => {
    return(
        <div className="feed-container ">
            <div className="create-post-container">
                <h4>Create a post</h4>
                <div className="write-zone">
                    <img src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                    <input type="text" placeholder='Write your thougts...' />
                    <hr />
                    <img src="https://i.ibb.co/brF6gqk/Gallery-Icon.png" alt="GalleryIcon" />
                    <button>Post</button>
                </div>
            </div>
            <div className="post-container">
                <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-lateral-hombre-feliz-que-conduce-coche_158595-4182.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1708646400&semt=ais" alt="PostPic" />
                <div className="post-description-container">
                    <img src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                    <h3>Person's name uploaded a post</h3>
                    <p>MM/DD/YYYY</p>
                    <div className="comment-container">
                        <img src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <h4>Person's name</h4>
                        <p className=''>MM/DD/YYYY</p>
                    </div>
                    <div className="public-comment-container">
                        {/* se puede hacer con FORM */}
                        <input type="text" placeholder='Comment something about the publication' />
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}