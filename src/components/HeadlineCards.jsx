import React from 'react'
import Card from './Card'

const HeadlineCards = () => {
  return (
    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-12 mx-auto'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default HeadlineCards