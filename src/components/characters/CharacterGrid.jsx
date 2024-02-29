import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? (<h1>isLoading</h1>) : (
    <section className='cards'>
        {items.map(item => (
            <CharacterItem item={item} key={item.id} ></CharacterItem>
        ))}
    </section>
  )
}

export default CharacterGrid