import React from 'react';



const Table = () => {
    return (

        <div id= "table">
            <div className="container">
            <div className="row">

                <div className="col-sm-6">

                    <table>
                        <tr>
                            <th>Time:</th>
                            <td>13:16</td>
                        </tr>

                        <tr>
                            <th>Branch:</th>
                            <td>Inshaatchilar</td>
                        </tr>

                        <tr>
                            <th>Service:</th>
                            <td>Birkat resmileshdirilmesi</td>
                        </tr>

                        <tr>
                            <th>Reason:</th>
                            <td>Call me</td>
                        </tr>

                        <tr>
                            <th>No shows:</th>
                            <td>2</td>
                        </tr>

                        <tr>
                            <th>Last Call:</th>
                            <td>13:30</td>
                        </tr>

                        <tr>
                            <th>No show reason:</th>
                            <td>Zeng chatmadi</td>
                        </tr>

                        <tr>
                            <th>Phone number:</th>
                            <td>+994 50 568 56 55</td>
                        </tr>




                    </table>

                </div>

                <div id="rightSide" className="col-sm-6">

                  <ul>
                      <li>Customer name:</li>
                      <li>Branch:</li>
                      <li>Comment:</li>
                  </ul>
                  <ul>
                      <li><input></input></li>
                      <li><input></input></li>
                      <li><textarea></textarea></li>
                  </ul>


                </div>


            </div>

        </div>
        </div>

    )

}

export default Table;