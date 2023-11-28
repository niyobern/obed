import axios from "axios";

export const getServerSideProps = (async (context) => {
    const res = await axios.get("https://nvb_backend-1-z3745144.deta.app/obed/users")
    const users = res.data
    return { props: { users: users } }
})

const UserTable = ({users}) => {
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Email</th>
            <th className="py-2 px-4 border-r">Phone</th>
            <th className="py-2 px-4">Profile</th>
            <th className='py-2 px-4'>Institution</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4 border-r">{user.name}</td>
              <td className="py-2 px-4 border-r">{user.email}</td>
              <td className="py-2 px-4 border-r">{user.phone}</td>
              <td className="py-2 px-4 border-r">{user.profile}</td>
              <td className="py-2 px-4 border-r">{user?.institution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
