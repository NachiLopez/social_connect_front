import React from 'react'

export const Feed = () => {
    return(
        <div className="container h-full mx-auto">
            <div className="container mx-auto bg-white max-w-6xl my-10 border-solid border-blue-900 border-2">
                <h3 className='text-2xl text-black font-semibold my-4 mx-4 '>Create a post</h3>
                <div className="write-zone relative">
                    <div className="user-pic flex">
                        <img className='h-36 w-auto mb-8' src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <input className='text-xl block w-full p-2.5 mr-6 mb-6 border-solid border-2 border-blue-900' type="text" placeholder='Write your thougts...' />
                    </div>
                        <div className='absolute w-full bottom-5 right-2 inline-flex justify-end'>
                            <img className="w-10 h-10 mr-4" src="https://i.ibb.co/brF6gqk/Gallery-Icon.png" alt="GalleryIcon" />
                            <button className='border-solid border-blue-900 border-2 px-4 py-1 mb-3 mr-6'>Post</button>
                        </div>
                </div>
            </div>
            <div className="post container max-w-6xl mx-auto grid grid-cols-3 py-12 border-solid border-2 border-blue-900">
                <div className="pic-post col-span-2 justify-self-center">
                    <img className='border-solid border-2 border-blue-900' src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-lateral-hombre-feliz-que-conduce-coche_158595-4182.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1708646400&semt=ais" alt="PostPic" />
                </div>
                <div className="comments-and-post container h-full pl-6 border-solid border-l-2 border-blue-900">
                    <div className="post-desc flex">
                        <img className="w-32" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <div className="data">
                            <h3>Person's name uploaded a post</h3>
                            <p>MM/DD/YYYY</p>
                        </div>
                    </div>
                    <div className="comment container flex ">
                        <img className="w-32" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <div className="data">
                            <h4>Person's name</h4>
                            <p className=''>MM/DD/YYYY</p>
                        </div>
                    </div>
                    <div className="public-comment-container">
                        {/* se puede hacer con FORM */}
                        <input type="text" placeholder='Comment something about the publication' />
                        <button className='border-solid border-black border-2 px-3'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}