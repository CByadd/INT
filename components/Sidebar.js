import React from 'react'

function Sidebar() {
  return (
    <div className='h-11 w-11 SIDE'><div></div>
        <button className='H'><img src=='https://data.terabox.com/thumbnail/f105e135acc1dc803b6dc74e310aa0e4?fid=4398309358028-250528-172778407360917&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kyflqe%2flye1QCB%2b3hFaRwPnojxQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=60166881653902407&dp-callid=0&time=1698494400&size=c1366_u768&quality=90&vuk=4398309358028&ft=image&autopolicy=1'/></button>
        <button className='S'><img src='Search.png'/></button>
        <button className='hidden md:block'><img src='Explore.png'/></button>
        <button className='R'><img src='Reels.png'/></button>
        <button className='ml-1 C'><img src='Chat.png'/></button>
        <button className='ml-2 hidden md:block'><img src='Likes.png'/></button>
        <button className='hidden md:block'><img src='Plus.png'/></button>
    </div>
  )
}

export default Sidebar
