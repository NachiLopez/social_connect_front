import React from 'react'

export const Feed = () => {
    const changeImage = (e) => {
        e.preventDefault()
        
        console.log(e.target.files[0]);
        const reader = new FileReader()
        const img = document.getElementById('imagenACargar')
        reader.onload = (e) => {
            img.src = e.target.result
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="container h-full mx-auto">
            <div className="container mx-auto bg-white max-w-6xl my-10 border-solid border-blue-900 border-2">
                <h3 className='text-2xl text-black font-semibold my-4 mx-4 '>Create a post</h3>
                <div className="write-zone relative">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e.target[0].value)
                        e.target[0].value = ""
                    }
                    }>
                        <div className="user-pic flex relative">
                            <img className='h-36 w-auto mb-8' src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <textarea className='text-xl w-full p-2.5 mr-6 mb-6 border-solid border-2 border-blue-900' type="text" placeholder='Write your thougts...'  cols="30" rows="5"></textarea>
                            <img className='absolute w-20 left-40 top-4' id='imagenACargar' src="" alt="imagenCargada" />
                        </div>
                        <div className='absolute w-full bottom-5 right-2 inline-flex justify-end'>
                            {/* <img className="w-10 h-10 mr-4" src="https://i.ibb.co/brF6gqk/Gallery-Icon.png" alt="GalleryIcon" /> */}
                            <input onChange={(e) => changeImage(e)} value={undefined} className='w-10 h-10 mr-4' type="file" src="https://i.ibb.co/brF6gqk/Gallery-Icon.png"/>
                            {/* ESTOY VIENDO COMO USAR ESTE INPUT PARA SUBIR UNA IMAGEN */}
                            <button className='border-solid border-blue-900 border-2 px-4 py-1 mb-3 mr-6'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="post container max-w-6xl mx-auto mb-24 grid grid-cols-3 grid-rows-3 border-solid border-2 border-blue-900">
                <div className="pic-post h-96 row-span-3 col-span-2 flex items-center justify-center self-center">
                    <img className='h-full border-solid border-2 border-blue-900' src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-lateral-hombre-feliz-que-conduce-coche_158595-4182.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1708646400&semt=ais" alt="PostPic" />
                </div>
                <div className="comments-and-post container row-span-2 col-start-3 overflow-y-auto max-h-80 border-solid border-l-2 border-blue-900">
                    <div className="post-desc flex relative mb-6 border-solid border-b-2 border-blue-900">
                        <img className="w-24 h-24" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <div className="data pt-3 pr-3">
                            <h3 className='text-bold text-xl'>Person's name uploaded a post</h3>
                            <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="public-comment-container row-start-3 col-start-3 col-end-3 flex border-solid border-l-2 border-t-2 border-blue-900">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e.target[0].value)
                        e.target[0].value = ""
                    }
                    } className='w-full h-3/4 inline-flex justify-end relative m-5'>
                        <input className='text-left leading-tight text-xl w-full h-full p-2.5 border-solid border-2 border-blue-900' type="text" placeholder='Comment something about the publication' />
                        <input className='absolute self-end top-20 right-2 h-8 border-solid border-blue-900 border-2 px-3' type="submit" value="Post" name='post-btn' />
                    </form>
                </div>
            </div>

            {/* SOLO PARA TENER MAS EJEMPLOS Y VER COMO QUEDA */}

            <div className="post container max-w-6xl mx-auto mb-24 grid grid-cols-3 grid-rows-3 border-solid border-2 border-blue-900">
                <div className="pic-post h-96 row-span-3 col-span-2 flex items-center justify-center self-center">
                    <img className='h-full border-solid border-2 border-blue-900' src="https://upload.wikimedia.org/wikipedia/commons/6/67/Carro_tirado_por_burros._T%C3%ADpico_en_Zamora.jpg" alt="PostPic" />
                </div>
                <div className="comments-and-post container row-span-2 col-start-3 overflow-y-auto max-h-80 border-solid border-l-2 border-blue-900">
                    <div className="post-desc flex relative mb-6 border-solid border-b-2 border-blue-900">
                        <img className="w-24 h-24" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <div className="data pt-3 pr-3">
                            <h3 className='text-bold text-xl'>Person's name uploaded a post</h3>
                            <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="public-comment-container row-start-3 col-start-3 col-end-3 flex border-solid border-l-2 border-t-2 border-blue-900">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e.target[0].value)
                        e.target[0].value = ""
                    }
                    } className='w-full h-3/4 inline-flex justify-end relative m-5'>
                        <input className='text-left leading-tight text-xl w-full h-full p-2.5 border-solid border-2 border-blue-900' type="text" placeholder='Comment something about the publication' />
                        <input className='absolute self-end top-20 right-2 h-8 border-solid border-blue-900 border-2 px-3' type="submit" value="Post" name='post-btn' />
                    </form>
                </div>
            </div>

            <div className="post container max-w-6xl mx-auto mb-24 grid grid-cols-3 grid-rows-3 border-solid border-2 border-blue-900">
                <div className="pic-post h-96 row-span-3 col-span-2 flex items-center justify-center self-center">
                    <img className='h-full border-solid border-2 border-blue-900' src="https://st1.uvnimg.com/70/f9/63461a07464e8e7df85587251eb3/auto.jpg" alt="PostPic" />
                </div>
                <div className="comments-and-post container row-span-2 col-start-3 overflow-y-auto max-h-80 border-solid border-l-2 border-blue-900">
                    <div className="post-desc flex relative mb-6 border-solid border-b-2 border-blue-900">
                        <img className="w-24 h-24" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                        <div className="data pt-3 pr-3">
                            <h3 className='text-bold text-xl'>Person's name uploaded a post</h3>
                            <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                        <div className="comment flex relative mr-6 mb-6 w-full border-solid border-b-2 border-blue-900">
                            <img className="w-16 h-16" src="https://i.ibb.co/cFtrJnK/User-Icon-Black.png" alt="UserIcon" />
                            <div className="data pt-3 pr-3">
                                <h3 className='text-bold text-lg'>Person's name uploaded a comment</h3>
                                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p className='text-sm text-end py-2'>MM/DD/YYYY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="public-comment-container row-start-3 col-start-3 col-end-3 flex border-solid border-l-2 border-t-2 border-blue-900">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e.target[0].value)
                        e.target[0].value = ""
                    }
                    } className='w-full h-3/4 inline-flex justify-end relative m-5'>
                        <input className='text-left leading-tight text-xl w-full h-full p-2.5 border-solid border-2 border-blue-900' type="text" placeholder='Comment something about the publication' />
                        <input className='absolute self-end top-20 right-2 h-8 border-solid border-blue-900 border-2 px-3' type="submit" value="Post" name='post-btn' />
                    </form>
                </div>
            </div>
        </div>
    )
}