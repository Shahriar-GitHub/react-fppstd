import React, {Component} from 'react'
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlier</td>
            <td>Jones</td>
          </tr>
          <tr>
            <td>Henry</td>
            <td>Smith</td>
          </tr>
        </tbody>
      </table>
    )
  }
  
}
export default Table
