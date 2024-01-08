const UserData=({users})=>{
   return(
    <>

    {
        users.map((curUser)=>{
            const {FARMER_ID, FARMER_NAME, PLACE} =curUser;

            return(
                <tr>
                    <td>{FARMER_ID}</td>
                    <td>{FARMER_NAME}</td>
                    <td>{PLACE}</td>
                </tr>
            )
        })
    }
    </>
   )
}
export default UserData;