import React from 'react'
import "./Project.css"
import recipeImg from '../assets/recipe.png'
import Portfolio from '../assets/portfolio.png'

export default function Project() {
  return (
    <>
      <h1 className='text-center'>Projects:-</h1>
      <div className="projects" id='project'>
        <div className="po">
          <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Recipe Finder</h3>
              </div>
              <div className="card-body body-1">
                <img src={recipeImg} alt="" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="https://mdhanushraju.github.io/Project-Food-recipe/" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
         <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Protfolio</h3>
              </div>
              <div className="card-body body-1">
                <img src={Portfolio} alt="" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
          <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Empty</h3>
              </div>
              <div className="card-body body-1">
                <img src="" alt="" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
