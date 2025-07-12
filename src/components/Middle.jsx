import React from 'react'

export const Middle = () => {
  return (
  <>
  <main className='flex my-10 justify-center items-center gap-20 '>
{
    allBox.map((item,index)=>(
        <div className='border-2 w-[300px] h-[300px]'>
            <img  src={item.img} alt={item.namee} style={{width:"100%",height:"100%"}} />
            <button>Play now</button>
        </div>
    ))}

    


  </main>
  </>
  )
}
const allBox = [
    {
        img:"/image.png",
        namee:"dsa"

    },
     {
         img:"/image.png",
        namee:"dsa"

    },
     {
        img:"/image.png",
        namee:"dsa"

    }
]

