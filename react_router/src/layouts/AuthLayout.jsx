import { Outlet } from "react-router";
function AuthLayout() {
    return (
    <div style={{border: "1px solid #eee", margin: "10px auto", padding: "10px", width: "200px" }}>
        <Outlet />
        </div>
)
}
export default AuthLayout;