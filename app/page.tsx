import { redirect } from "next/navigation";

async function page() {
  redirect("/dashboard");  
}

export default page;