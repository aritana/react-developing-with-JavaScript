import React from 'react'
import Card from '../Card/Card'

export default function Cards({ itens, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((item,indice) => {      
                return (
                    <Card item={item} key={indice+1} styles={styles} />
                )
            })}
        </ul>
    )
}