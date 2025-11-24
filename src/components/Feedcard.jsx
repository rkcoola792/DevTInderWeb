import React from 'react'

const Feedcard = ({name,age}) => {
  return (
  <div className="card bg-base-300 w-96 shadow-sm my-20 mx-auto h-1/2">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
    </h2>
    <p>{age}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default Feedcard
