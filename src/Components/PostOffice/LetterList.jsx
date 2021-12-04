import React from "react"
import Letter from './Letter'

const LetterList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th width="8%">Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Subject</th>
          <th width="2%">Read</th>
        </tr>
      </thead>
      <tbody>
        Map Letter
      </tbody>
    </table>
  )
}

export default LetterList
