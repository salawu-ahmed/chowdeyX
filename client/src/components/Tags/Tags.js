import React from 'react'
import classes from './tags.module.css'
import { Link } from 'react-router-dom'

export default function Tags({tags, forFoodPage}) {
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFoodPage ? "start" : "center",
      }}
    >
      {tags.map((tag) => (
        <Link key={tag.name} to={`/tag/${tag.name}`}>
          
          <span>{tag.name}</span>
          {!forFoodPage && (<span>{tag.count}</span>)}
        </Link>
      ))}
    </div>
  );
}
