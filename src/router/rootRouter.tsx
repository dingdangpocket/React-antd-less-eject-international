import { Routes, Route } from "react-router-dom";
import { rootRouterConfig } from "@/routerConfig/routerConfig";
export default function RootRouter() {
  return (
    <>
      <Routes>
        {rootRouterConfig.map((item: any, index: number) => {
          return <Route path={item.path} element={item.element} key={index}></Route>;
        })}
      </Routes>
    </>
  );
}
// import Description from "@/pages/description/Description";
// import Home from "@/pages/home/Home";
// import Login from "@/pages/login/Login";
// import Profile from "@/pages/profile/Profile";
// import System from "@/pages/system/System";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// export default function RootRouter() {
//   const [isAdmin, setIsAdmin] = useState<boolean>(false);
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login/>}/>
//         <Route path="/home/*" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/description:id" element={<Description />} />
//         <Route
//           path="/system"
//           element={
//             isAdmin ? (
//               <System />
//             ) : (

//               <p
//                 style={{
//                   background: "#9b2723",
//                   color: "white",
//                   height: "70px",
//                   lineHeight: "70px",
//                   padding: "5px",
//                 }}
//               >
//                 对不起您无权访问改页面!
//               </p>

// ​            )
// ​          }
// ​        />
// ​        <Route path="*" element={<p>ERROR-PAGE</p>} />
// ​      </Routes>
// ​      <button
// ​        style={{
// ​          width: "430px",
// ​          height: "40px",
// ​          color: "white",
// ​          background: "green",
// ​        }}
// ​        onClick={() => setIsAdmin(true)}
// ​      >
// ​        申请访问权限
// ​      </button>
// ​    </>
//   );
// }
