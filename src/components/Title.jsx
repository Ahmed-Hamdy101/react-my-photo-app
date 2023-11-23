import React from 'react'

export default function Title({classes,title}) {
  return (
    <h1 className={!classes?"title": classes }> {!title ? "TITLE":title}</h1>
  )
}
