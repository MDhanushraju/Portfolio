import React from 'react'
import "./Project.css"
import recipeImg from '../assets/recipe.png';

export default function Project() {
  return (
    <>
    <h1 className='text-center'>Projects:-</h1>
    <div className="container projects" id='project'>
      
    <div className='po'>   
      <div className="container p-1">
        
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center"><h3>Recipe Finder</h3></div>
              <div className="card-body body-1">
                <img src={recipeImg} alt="" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                   <button className='btn btn-success '><a href=" https://mdhanushraju.github.io/Project-Food-recipe/" target='blank' className='a-1 ' style={{textDecoration:"none",color:"white"}}>view</a></button>
              </div>
        </div>
      </div>
      {/* <div className="container p-2">
         <div className="card-2">
              <div className="card-body body-2">
                <img src="" alt="" className='img' />
              </div>
              <div className="card-footer foot-2 ">
                   <button className='btn btn-danger'>about</button>
                   <button className='btn btn-success'>view</button>
              </div>
        </div>
        </div>
      <div className="container p-3"> 
        <div className="card-3">
              <div className="card-body body-3">
                <img src="" alt="" className='img' />
              </div>
              <div className="card-footer foot-3 ">
                   <button className='btn btn-danger'>about</button>
                   <button className='btn btn-success'>view</button>
              </div>
        </div>
        </div>
       <div className="container p-4"> 
  <div className="card-4">
    <div className="card-body body-4">
      <img src="" alt="" className='img' />
    </div>
    <div className="card-footer foot-4">
      <button className='btn btn-danger'>about</button>
      <button className='btn btn-success'>view</button>
    </div>
  </div>
</div>
<div className="container p-5"> 
  <div className="card-5">
    <div className="card-body body-5">
      <img src="" alt="" className='img' />
    </div>
    <div className="card-footer foot-5">
      <button className='btn btn-danger'>about</button>
      <button className='btn btn-success'>view</button>
    </div>
  </div>
</div>

       <div className="container p-6"> 
        <div className="card-6">
              <div className="card-body body-6">
                <img src="" alt="" className='img' />
              </div>
              <div className="card-footer foot-6 ">
                   <button className='btn btn-danger'>about</button>
                   <button className='btn btn-success'>view</button>
              </div>
        </div>
        </div> */}
        </div>
    </div>
    </>
  )
}
