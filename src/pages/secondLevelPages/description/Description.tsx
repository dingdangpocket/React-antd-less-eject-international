import { Link, useParams } from "react-router-dom";
import DescriptionRouter from "@/router/description/descriptionRouter";

export default function Description() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return (
    <div>
      description
      <Link to={"/home/description:id/list"}>详情列表</Link>
      <DescriptionRouter></DescriptionRouter>
    </div>
  );
}
