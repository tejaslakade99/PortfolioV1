export default function Login() {
  return (
    <div className="input-form flex basis-1/4 flex-col">
      <form action="" method="post">
        <div className="input flex flex-col">
          <label htmlFor="email">Email Adresss</label>
          <input
            className="rounded border-8 border-gray-500 p-2"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="input flex flex-col">
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="pass" />
        </div>
        <button className="bg-red-600">Sign In</button>
      </form>
    </div>
  );
}
