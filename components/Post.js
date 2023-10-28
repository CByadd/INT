import React from 'react'
import Posts from './Posts';
import{
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
}from "@heroicons/react/outline"
import{HeartIcon as HeartIconFilled} from "@heroicons/react/solid";

function Post({id,username,userImg,img,caption}) {
  return (
    <div>

 
<div className='relative absolute child mt-7'>
<div className='flex items-center '>
    <img src="LOGO.png"alt='' className='rounded-full h-11 w-11 object-cover ml-3 mr-3' />
    <p className='text-white'>Srinivash</p>
    <DotsHorizontalIcon className=' h-5 pl-96 text-white  Do'/>
    </div>
  <div className='bg-slate-950 mt-3'>
  <img src='https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3202736%2Farticles%2F3202813%2FAudi_R8_V10_GT_RWD_2022_10_04_T07_33_03_015_Z_8a6e5e398e.jpg&w=750&q=75'
    className='flex object-cover w-fit'/>
  </div>

  <div className='flex justify-between px-4 pt-4 text-white'>
    <div className='flex space-x-4'>
      <HeartIcon className='btn'/>
      <ChatIcon className='btn'/>
      <PaperAirplaneIcon className='btn'/>
    </div>

    <BookmarkIcon className='btn'/>
  </div>

<div>
  <p className='p-5 truncate text-white'>
    <span className='font-bold mr-4'>Srinivash</span>
          Fugiat veniam ut sunt enim aliqua sunt anim. Ad ex ipsum excepteur labore aute. Nisi mollit ea et mollit consequat veniam commodo ut et magna dolore velit. Sit duis consectetur qui dolore ex adipisicing ut aliquip quis aute excepteur officia eiusmod. Deserunt aliquip deserunt voluptate consectetur anim labore mollit. Lorem officia magna cillum esse dolore ipsum aute. Labore cupidatat sit nisi labore elit voluptate ad amet culpa sunt laboris.
  </p>
</div>

<div>
  <form className='flex items-center p-4'>
    <EmojiHappyIcon className='h-7 text-white'/>
    <input type='text'  placeholder='Add a comment' className=' ml-3 mr-3 border-none outline-none flex-1 bg-black text-white'
    />
    <button className='text-white'>Post</button>
  </form>
</div>


</div>



        
    </div>
  );
}

export default Post
